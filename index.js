var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.get(`/.well-known/acme-challenge/QVKUIxs2RvIpleykacTJqX4-kXgK81jCQLbKdr1E-8s`, (req, res) => {
	res.send(`${__dirname}/cert.txt`);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
