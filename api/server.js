const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors'),
      csv = require('csv-parser'),
      fs = require('fs'),
      nodeMailer = require('nodemailer'),
      port = 3080;

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');
const { getUnpackedSettings } = require('http2');

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
    'pricePerQty': 0
};

var mailTransporter = nodeMailer.createTransport({
    host: 'mail48.mydevil.net',
    port: 465,
    secure: true,
    auth: {
      user: 'rolety@sztosit.eu',
      pass: 'SIBZh953ehEu96AoOTW4'
    }
});

fs.createReadStream( CFG_DIR + 'inne.csv' ).pipe( csv() )
    .on('data', (data) => {
        config.allegro = data[ 'allegro' ];
        config.pricePerQty = data[ 'cena' ];
    })
    .on('end', () => {
        console.log( 'Załadowano plik inne.csv' );
    });

fs.createReadStream( CFG_DIR + 'montaz.csv' ).pipe( csv() )
    .on('data', (data) => {
        config.ins.push( data );
    })
    .on('end', () => {
        console.log( 'Załadowano plik montaz.csv' );
    });

fs.createReadStream( CFG_DIR + 'systemy.csv' ).pipe( csv() )
    .on('data', (data) => {
        config.mat.push( data );
    })
    .on('end', () => {
        console.log( 'Załadowano plik systemy.csv' );
    });

fs.createReadStream( CFG_DIR + 'tkaniny.csv' ).pipe( csv() )
    .on('data', (data) => {
        config.color.push( data );
    })
    .on('end', () => {
        console.log( 'Załadowano plik tkaniny.csv' );
    });

let results = {};
fs.createReadStream( CFG_DIR + 'plisy.csv' ).pipe( csv({ skipLines: 1 }) )
    .on('data', (data) => {
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
    })
  .on('end', () => {
    console.log( 'Załadowano plikp plisy.csv' );
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/public')));

/*app.use('/api', createProxyMiddleware({ 
    target: 'http://rolety.sztosit.eu/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));*/

app.get('/api/start', (req, res) => {
    res.json(config);
});

function parseBlindInformation( blind ) {
    return (
        'Szerokość: ' + blind.width + 'cm, Wysokość: ' + blind.height + 'cm, ' + 
        config.ins[ blind.installation ].name + ', ' +
        config.mat[ blind.material ].name + ', ' +
        config.color[ blind.color ].name + '<br>'
    );
}

app.post('/api/form-send', (req, res) => {
    let data = req.body; let text = "<b>Dziękujemy za skorzystanie z naszego kalkulatora!</b><br><hr><br>Twoje zestawy:<br>";
    console.log( data );

    for( i=0; i < data.blinds.length; i++ ) {
        text += '<strong>' + (i+1) + '</strong>. ' + parseBlindInformation( data.blinds[ i ] );
    }

    text += '<br><hr><br>Cena całkowita: ' + data.price + '<br>Ilość sztuk: ' + data.qty;

    mailTransporter.sendMail({
        from: 'Kalkulator rolet <rolety@sztosit.eu>', // sender address
        to: data.email, // list of receivers
        subject: "Kalkulator Rolet - Wyliczenie", // Subject line
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
  res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});

function parseErrorPostMessage( msg ) {
    return { 'success': false, 'msg': msg };
}

function parseSpecifyStringToFloat( data ) {
    let i = parseFloat( data.replace(",", ".") );
    i *= 100;
    return parseInt( i.toFixed(0) );
}

const navObj = (obj, currentKey, direction) => {
    return Object.values(obj)[Object.keys(obj).indexOf(currentKey) + direction];
};