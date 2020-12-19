'use strict'
const bodyParser = require('body-parser');

const express = require('express');

const app = express();


const user_routes = require('./routes/user');


app.use(bodyParser.urlencoded( { useNewUrlParser: false }));
app.use(bodyParser.json());

//http headers
app.use((req, res, next) =>{
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Request-Method');
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
next();
});

app.use('/api', user_routes);


module.exports = app;


