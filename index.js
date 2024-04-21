/*=========Imports====================*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


/*==========Setup ==============*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

/*=========PORT====================*/
app.listen(3000, () => {
    console.log('Server started on port 80');
})


/*=========Webpage Routings====================*/
//Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/templates/index.html');
})

//Cart Page
app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/public/templates/cart.html');
})

//Product Page
app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/public/templates/products.html');
})

//Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/templates/login.html');
})

//Register Page
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/templates/register.html');
})

