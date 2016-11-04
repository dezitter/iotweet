var dotenv = require('dotenv');

dotenv.config();

var express = require('express');
var path = require('path');
var router = require('./server/router');

var APP_PORT = process.env.APP_PORT;
var app = express();

app.use(express.static( path.join(__dirname, 'client') ));
app.use(express.static( path.join(__dirname, 'dist') ));
app.use(router);

app.listen(APP_PORT, function() {
    console.log('Server listening on port %d', APP_PORT);
});
