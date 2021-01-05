const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors'),
      port = 3080;

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

// place holder for the data
let config = { 
    'dim': {
        'width': {
            'min': 50,
            'max': 2000
        },
        'height': {
            'min': 50,
            'max': 2000
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
    ]
};

for( var i=201; i<=218; i++){
    config.color.push({ 'img': 'P'+i+'.jpg', 'price': 0 });
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/public')));

app.use('/api', createProxyMiddleware({ 
    target: 'http://rolety.sztosit.eu/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));


app.get('/api/start', (req, res) => {
    res.json(config);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});