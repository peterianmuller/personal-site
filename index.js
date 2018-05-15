var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
