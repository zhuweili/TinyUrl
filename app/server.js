/**
 * Created by user on 8/8/16.
 */


var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');



mongoose.connect('mongodb://user:user@ds025802.mlab.com:25802/tinyurl');

var reload = require('./reload/warm_up');
reload.warm_cache("Relaod is done", function (message) {
    console.log(message);
});





app.use('/public', express.static(__dirname + '/public'));

app.use('/api/v1', restRouter);
app.use('/', indexRouter);
app.use('/:shortUrl', redirectRouter);

app.listen(3000);
