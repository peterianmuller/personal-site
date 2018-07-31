var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

// app.get(`/.well-known/acme-challenge/Zzam5hmy_4ckg6bzMfUCtPmEeg8s59k2GTWCdsfqXuE`, (req, res) => {
// 	res.send(`Zzam5hmy_4ckg6bzMfUCtPmEeg8s59k2GTWCdsfqXuE.5iP72yFceQ2O41wwpICeewxefMnleNW-FVoYnKGHl0Y`);
// });

// app.get(`/.well-known/acme-challenge/pLEqmhJ6Xy7ahp4uyqcV2phu7sTZGkictC9UbH6KnT0`, (req, res) => {
// 	res.send(`pLEqmhJ6Xy7ahp4uyqcV2phu7sTZGkictC9UbH6KnT0.5iP72yFceQ2O41wwpICeewxefMnleNW-FVoYnKGHl0Y`);
// });

// both root domain and www
app.get(`/.well-known/acme-challenge/Zzam5hmy_4ckg6bzMfUCtPmEeg8s59k2GTWCdsfqXuE`, (req, res) => {
	res.send(`Zzam5hmy_4ckg6bzMfUCtPmEeg8s59k2GTWCdsfqXuE.5iP72yFceQ2O41wwpICeewxefMnleNW-FVoYnKGHl0Y`);
});
// both root domain and www
app.get(`/.well-known/.well-known/acme-challenge/mk9rsBekWIQik5sbaXLumA53Q7txiulTG7xnWWRuxiM`, (req, res) => {
	res.send(`mk9rsBekWIQik5sbaXLumA53Q7txiulTG7xnWWRuxiM.5iP72yFceQ2O41wwpICeewxefMnleNW-FVoYnKGHl0Y`);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
