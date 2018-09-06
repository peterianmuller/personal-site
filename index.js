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
	console.log(player2);

	axios
		.get(`http://data.nba.net/data/10s/prod/v1/2017/players/${player1.playerId}_profile.json`)
		.catch(function(error) {
			console.log(`error is: ${error}`);
		})
		.then(response => {
			var player1Stats = response.data.league.standard;
			playersInfoAndStat.push({ [player1.downcaseName]: response.data.league.standard.stats });
			axios
				.get(`http://data.nba.net/data/10s/prod/v1/2017/players/${player2.playerId}_profile.json`)
				.catch(function(error) {
					console.log(`error is: ${error}`);
				})
				.then(response => {
					playersInfoAndStat.push({ [player2.downcaseName]: response.data.league.standard.stats });
					console.log(playersInfoAndStat);
					res.send(playersInfoAndStat);
				});
		});
});

app.listen(process.env.PORT || 3000, function() {
	console.log('peterianmuller.com is live!');
});
