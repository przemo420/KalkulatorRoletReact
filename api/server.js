const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors'),
      csv = require('csv-parser'),
      fs = require('fs'),
      port = 3080;

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');
const { getUnpackedSettings } = require('http2');

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
        {'name': 'Montaż inwazyjny', 'img': 'third.jpg', 'price': 0}
    ],
    'mat': [
        { 'img': 'antracyt', 'price': 0 },
        { 'img': 'antracyt2', 'price': 0 },
        { 'img': 'biel', 'price': 0 },
        { 'img': 'braz', 'price': 0 },
        { 'img': 'dabbagienny', 'price': 0 },
        { 'img': 'krem', 'price': 0 },
        { 'img': 'mahon', 'price': 0 },
        { 'img': 'orzech', 'price': 0 },
        { 'img': 'sosna', 'price': 0 },
        { 'img': 'winchester', 'price': 0 },
        { 'img': 'zlotydab', 'price': 0 },
        { 'img': 'zlotydab2', 'price': 0 }
    ],
    'color': [
        // Pętla niżej
    ],
    'pricePerQty': 2.50
};

for( var i=201; i<=218; i++){
    config.color.push({ 'img': 'P'+i+'.jpg', 'price': 0 });
}

let results = {};
fs.createReadStream('plisy.csv')
    .pipe(
        csv({ 
            skipLines: 1, 
            //mapValues: ({ header, index, value }) => parseFloat( value.replace(",", ".") ),
            //mapHeaders: ({ header, index }) => parseInt(header.replace(",", ""))*100
        })
    )
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
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
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
    const body = req.body;

    if( typeof body.width === 'undefined' ||
        typeof body.height === 'undefined' ||
        typeof body.installation === 'undefined' ||
        typeof body.material === 'undefined' || 
        typeof body.color === 'undefined' ) {
        return res.json( parseErrorPostMessage( 'Nieprawidłowe dane wejściowe.') );
    }

    let price = parseFloat( results[ body.height ][ body.width ].replace(',','.') );
    let qty = Math.ceil( price / config.pricePerQty );

    console.log( price, qty, config.pricePerQty );
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