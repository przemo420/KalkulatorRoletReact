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
    'ins': [
        {'name': 'Montaż bezinwazyjny standard', 'img': 'first.jpg', 'price': 0},
        {'name': 'Montaż bezinwazyjny do okien z nawiewnikiem', 'img': 'secend.jpg', 'price': 0},
        {'name': 'Montaż inwazyjny', 'img': 'third.jpg', 'price': 1 }
    ],
    'mat': [
        { 'name': 'Antracyt', 'img': 'antracyt', 'price': 0 },
        //{ 'name': 'Antracyt2', 'img': 'antracyt2', 'price': 0 },
        { 'name': 'Biały', 'img': 'biel', 'price': 5 },
        { 'name': 'Brąz', 'img': 'braz', 'price': 0 },
        { 'name': 'Dąb bag.', 'img': 'dabbagienny', 'price': 0 },
        { 'name': 'Kremowy', 'img': 'krem', 'price': 2 },
        { 'name': 'Mahon', 'img': 'mahon', 'price': 0 },
        { 'name': 'Orzech', 'img': 'orzech', 'price': 0 },
        { 'name': 'Sosna', 'img': 'sosna', 'price': 0 },
        { 'name': 'Winchester', 'img': 'winchester', 'price': 8 },
        { 'name': 'Złoty dąb', 'img': 'zlotydab', 'price': 0 },
        //{ 'name': 'Złoty dąb2', 'img': 'zlotydab2', 'price': 0 }
    ],
    'color': [
        { 'name': 'Kremowy', 'img': 'P201.jpg', 'price': 0 },
        { 'name': 'Biały', 'img': 'P202.jpg', 'price': 1 },
        { 'name': 'Krem. 2', 'img': 'P203.jpg', 'price': 0 },
        { 'name': 'Żółty 1', 'img': 'P204.jpg', 'price': 4 },
        { 'name': 'Żółty 2', 'img': 'P205.jpg', 'price': 0 },
        { 'name': 'Brązowy 1', 'img': 'P206.jpg', 'price': 0 },
        { 'name': 'Brązowy 2', 'img': 'P207.jpg', 'price': 5 },
        { 'name': 'Pomarańcz', 'img': 'P208.jpg', 'price': 0 },
        { 'name': 'Czerwony', 'img': 'P209.jpg', 'price': 0 },
        { 'name': 'Bordowy', 'img': 'P210.jpg', 'price': 0 },
        { 'name': 'Szary 1', 'img': 'P211.jpg', 'price': 0 },
        { 'name': 'Szary 2', 'img': 'P212.jpg', 'price': 7 },
        { 'name': 'Szary 3', 'img': 'P213.jpg', 'price': 0 },
        { 'name': 'Czarny', 'img': 'P214.jpg', 'price': 0 },
        { 'name': 'Zgniły', 'img': 'P215.jpg', 'price': 13 },
        { 'name': 'Zielony', 'img': 'P216.jpg', 'price': 0 },
        { 'name': 'Błękitny', 'img': 'P217.jpg', 'price': 0 },
        { 'name': 'Niebieski', 'img': 'P218.jpg', 'price': 0 }
    ],
    'pricePerQty': 2.50
};

fs.createReadStream( CFG_DIR + 'tkaniny.csv' ).pipe( csv({ skipLines: 1 }) )
    .on('data', (data) => {
        console.log(data);
    })
    .on('end', () => {
        console.log( 'Załadowano plik konfiguracyjny.' );
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
    console.log( 'Załadowano plik konfiguracyjny.' );
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

app.post('/api/form/calc', (req, res) => {
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