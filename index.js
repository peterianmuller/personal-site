var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
const nba = require('nba.js');
const NBA = require('nba');

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
app.get(`/.well-known/acme-challenge/pzAtfwTSQwaCGvMEYwX-HsNQTw1hNAt_BpgcAODnKas`, (req, res) => {
	res.send(`pzAtfwTSQwaCGvMEYwX-HsNQTw1hNAt_BpgcAODnKas.5iP72yFceQ2O41wwpICeewxefMnleNW-FVoYnKGHl0Y`);
});

// nba stuff
var players = [];

app.get('/nba', (req, res) => {
	console.log('right route here?');
	axios
		.get('http://data.nba.net/data/10s/prod/v1/2017/players.json')
		.catch(function(error) {
			console.log(`error is: ${error}`);
		})
		.then(response => {
			players = players.length ? players : response.data.league.standard;
			console.log(players.length);
			res.send(response.data.league.standard);
		});
});

// get players data to compare
app.get('/player-comparison', (req, res) => {
	console.log('hello');
	let playersInfoAndStat = [req.query.stat];
	let player1 = NBA.findPlayer(req.query.player1);
	let player2 = NBA.findPlayer(req.query.player2);

	console.log(NBA.findPlayer);
	console.log(player1);
	console.log(player2);
	NBA.stats.playerInfo({ PlayerID: player1.playerId }).then(response => {
		console.log(response);
		playersInfoAndStat.push(response);
		NBA.stats.playerInfo({ PlayerID: player2.playerId }).then(response => {
			console.log(response);
			playersInfoAndStat.push(response);
			console.log(playersInfoAndStat);
			res.send(playersInfoAndStat);
		});
	});
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
