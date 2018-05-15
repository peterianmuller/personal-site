var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

// routes

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// port assignment

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
