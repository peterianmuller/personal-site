var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

// routes

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

app.get('/music', function(req, res) {
	res.sendFile('/music/index.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(`${__dirname}/blog/blogroll.html`);
});

app.get('/spanish', function(req, res) {
	res.sendFile(`spanish/index.html`);
});

app.get('/reddit', function(req, res) {
	console.log('hello');
	res.sendFile(`${__dirname}/reddit-api/index.html`);
});

app.get('/jm-photo', function(req, res) {
	res.sendFile('jm-photo/index.html');
});

app.get('/big-noah', function(req, res) {
	res.sendFile('big-bass/index.html');
});

// port assignment

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
