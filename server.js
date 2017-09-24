var express = reqire('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use('/static', express.static(__dirname+'/static'));
app.use('/', express.static(__dirname+'/pages'));
app.use('/api/v1', require(__dirname+'/routes/api/v1.js'));
