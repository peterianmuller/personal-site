var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.get('/.well-known/acme-challenge/Na6vwinTMeIh-E20kQR0A2jinu2Qxbf3xeDkHhHFPtM', function(req, res) {
	res.sendFile(`${__dirname}/cert-file.txt`);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
