'use strict';

var path = require('path');

var express = require('express');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(require('body-parser').json());
app.use(express.static('public'));

app.locals.title = "LiTech Ventures";

app.get('/', function(req, res, next) {
  res.render('index', {
    name: 'Limian'
  });
});

app.post('/login', function(req, res, next) {
  res.status(200).send("hello");
});

module.exports = app;
