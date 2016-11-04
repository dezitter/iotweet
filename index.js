var dotenv = require('dotenv');

dotenv.config();

var debug = require('debug')('iotweet:http');
var express = require('express');
var router = require('./server/router');

var APP_PORT = process.env.APP_PORT;
var app = express();

app.use(router);

app.listen(APP_PORT, function() {
    debug('Listening on port %d', APP_PORT);
});
