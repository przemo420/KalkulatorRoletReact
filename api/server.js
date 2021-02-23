const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors'),
      csv = require('csv-parser'),
      fs = require('fs'),
      nodeMailer = require('nodemailer'),
      port = 3000;

const CFG_DIR = './cfg/';
// place holder for the data
var config = { 
    'dim': {
        'width': {
            'min': 0,//50,
            'max': 0//2000
        },
        'height': {
            'min': 0,//50,
            'max': 0//2000
        }
    },
    'ins': [],
    'mat': [],
    'color': [],
    'pricePerQty': 0,
    'mail': {
        'from': 'Kalkulator rolet <rolety@sztosit.eu>',
        'subject': 'Kalkulator Rolet - Wyliczenie',
        'transport': {
            'host': 'mail48.mydevil.net',
            'port': 465,
            'secure': true,
            'auth': {
                'user': 'rolety@sztosit.eu',
                'pass': 'SIBZh953ehEu96AoOTW4'
            }
        }
    }
}, mailTransporter = nodeMailer.createTransport( config.mail.transport ), results = {};

loadConfigFile( 'inne' );
loadConfigFile( 'plisy', '', { skipLines: 1 } );
loadConfigFile( 'montaz', 'ins' );
loadConfigFile( 'systemy', 'mat' );
loadConfigFile( 'tkaniny', 'color' );

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/public')));

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});

app.get('/api/start', (req, res) => {
    res.json(config);
});

app.post('/api/form-send', (req, res) => {
    let data = req.body; let text = "<b>Dziękujemy za skorzystanie z naszego kalkulatora!</b><br><hr><br>Twoje zestawy:<br>";
    console.log( data );

    for( i=0; i < data.blinds.length; i++ ) {
        text += '<strong>' + (i+1) + '</strong>. ' + parseBlindInformation( data.blinds[ i ] );
    }

    text += '<br><hr><br>Cena całkowita: ' + data.price + '<br>Ilość sztuk: ' + data.qty;

    mailTransporter.sendMail({
        from: config.mail.from, // sender address
        to: data.email, // list of receivers
        subject: config.mail.subject, // Subject line
        html: text, // html body
    }, function(err) {
        if (err) {
            console.log( 'sendMailer error', err);
            
            return res.json({ 'success': false, 'msg': 'Wystąpił błąd wysyłania!' });
        }

        res.json({ 'success': true, 'msg': 'Wysłano zapytanie.' });
    });
});
app.post('/api/form-calc', (req, res) => {
    const body = req.body; let valid = false;

    if( typeof body.width === 'undefined' || 
        typeof body.height === 'undefined' ||
        typeof body.installation !== 'number' ||
        typeof body.material !== 'number' ||
        typeof body.color !== 'number' ) {
        return res.json( parseErrorPostMessage( 'Nieprawidłowe dane wejściowe.') );
    }

    body.width = Math.ceil( body.width );
    body.height = Math.ceil( body.height );

    if( body.width > config.dim.width.max || body.width < config.dim.width.min || 
        body.height > config.dim.height.max || body.height < config.dim.width.min ) {
        return res.json( parseErrorPostMessage( 'Nieprawidłowe wymiary.') );
    }

    let price = 0; let qty = 0; let nHeight = body.height; let nWidth = body.width;
    
    if( typeof results[ nHeight ] !== 'undefined' && typeof results[ nHeight ][ nWidth ] !== 'undefined' ) { // Jest gotowa cena
        price = results[ nHeight ][ nWidth ];
    } else {
        if( typeof results[ nHeight ] === 'undefined' ) { // nie ma tej wysokości, szukamy jedno wyżej
            for( let h in results ) {
                if( h > nHeight ) {
                    nHeight = h;
                    break;
                }
            }

            console.log( 'Wysokość znaleziona', nHeight, ', podana', body.height );
        }

        if( typeof results[ nHeight ][ nWidth ] === 'undefined' ) { // nie ma tej wysokości, szukamy jedno wyżej
            for( let w in results[ nHeight ] ) {
                if( w > nWidth ) {
                    nWidth = w;
                    break;
                }
            }

            console.log( 'Szerokość znaleziona', nWidth, ', podana', body.width );
        }

        if( typeof results[ nHeight ] === 'undefined' || typeof results[ nHeight ][ nWidth ] === 'undefined' ) {
            return res.json( parseErrorPostMessage( 'Nie można znaleźć odpowiedniej ceny.') );
        }

        price = results[ nHeight ][ nWidth ];
    }
    
    price = parseFloat( price.replace(',','.') ) + config.color[ body.color ].price + config.mat[ body.material ].price;
    qty = Math.ceil( price / config.pricePerQty );

    res.json({ 'success': true, 'price': price, 'qty': qty });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public_nodejs/index.html'));
});

function parseErrorPostMessage( msg ) {
    return { 'success': false, 'msg': msg };
}

function parseSpecifyStringToFloat( data ) {
    let i = parseFloat( data.replace(",", ".") );
    i *= 100;
    return parseInt( i.toFixed(0) );
}

function parseBlindInformation( blind ) {
    return (
        'Szerokość: ' + blind.width + 'cm, Wysokość: ' + blind.height + 'cm, ' + 
        config.ins[ blind.installation ].name + ', ' +
        config.mat[ blind.material ].name + ', ' +
        config.color[ blind.color ].name + '<br>'
    );
}

function loadConfigFile( fileName, cfgName='', csvConfig={} ) {
    let fsh = fs.createReadStream( CFG_DIR + fileName + '.csv' ).pipe( csv( csvConfig ) );

    switch( fileName ) {
        case 'plisy': {
            fsh.on('data', (data) => {
                let height = data['wys\\szer'];
                tempData = data;
                delete tempData['wys\\szer'];
        
                var sTempData = {};
                for ( var item in tempData ) {
                    var i = parseSpecifyStringToFloat( item );
                    sTempData[ i ] = tempData[ item ];
                }
        
                let sTempKeys = Object.keys( sTempData );
                config.dim.width.min = parseInt( sTempKeys[0] );
                config.dim.width.max = parseInt( sTempKeys[ sTempKeys.length-1 ] );
        
                if( height === 'undefined' ) {
                    console.log( height, data, '!!! UNDEFINED');
                    return;
                }
                height = parseSpecifyStringToFloat( height );
            
            //if( typeof config.dim.height.max === 'undefined' ) {
            //    config.dim.height.max = height;
            //}
        
                if( config.dim.height.max < height ) {
                    // Zmiana maksymalnej wysokości
                    config.dim.height.max = height;
                }
            
                if ( typeof config.dim.height.min === 'undefined' || config.dim.height.min == 0 || config.dim.height.min > height ) {
                    // Zmiana minimalnej wysokości
                    config.dim.height.min = height;
                }
        
                //console.log( 'Wysokość:', height, typeof height, config.dim.height );
                results[ height ] = sTempData;
            });
        } break;
        case 'inne': {
            fsh.on('data', (data) => {
                config.allegro = data[ 'allegro' ];
                config.pricePerQty = data[ 'cena' ];
            });
        } break;
        default: {
            fsh.on('data', (data) => {
                config[ cfgName ].push( data );
            });
        }
    }

    fsh.on('end', () => {
        console.log( 'Załadowano plik ' + fileName + '.csv' );
    });
}
const navObj = (obj, currentKey, direction) => {
    return Object.values(obj)[Object.keys(obj).indexOf(currentKey) + direction];
};