'use strict';

var http = require('http');

var app = require('./lib/app');

http.createServer(app).listen(8000);
