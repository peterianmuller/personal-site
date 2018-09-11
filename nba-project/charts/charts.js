document.querySelector(`.player-selection`).addEventListener(`click`, e => {
	e.preventDefault();
	var player1Name = document.querySelector(`select.list-1`).value;
	var player2Name = document.querySelector(`select.list-2`).value;
	let stat = document.querySelector(`select:nth-of-type(3)`).value;
	console.log('click detected');
	console.log(`player1 is: ${player1Name}`);
	console.log(`player2 is: ${player2Name}`);
	$.ajax({
		method: `GET`,
		url: `/player-comparison`,
		data: {
			player1: player1Name,
			player2: player2Name,
			stat: stat
		},
		success: res => {
			console.log('res from api is:', res);
			createChart(res[0], res[1][player1Name], res[2][player2Name], res.slice(1));
		}
	});
});

const createChart = (stat, player1, player2, response) => {
	expandStat = stat => {
		return stat === 'ppg' ? 'points per game' : 'rebounds per game';
	};

	console.log(`response is:`, response);
	let data = response.reduce((memo, curr, i) => {
		console.log(`curr:`, curr);

		memo = memo.concat([
			{
				name: Object.keys(curr)[0],
				stat: curr[Object.keys(curr)[0]].latest[stat],
				statType: expandStat(stat)
			}
		]);

		return memo;
	}, []);

	console.log(data);

	var svg = d3
		.select('body')
		.append('svg')
		.attr('height', '300px')
		.attr('width', '300px')
		.style('border', '1px solid')
		.style('border-radius', '5px');

	svg
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('class', 'bar')
		.attr('height', function(d, i) {
			return d.stat * 10;
		})
		.attr('width', '85')
		.attr('x', function(d, i) {
			return i * 90 + 30;
		})
		.attr('y', function(d, i) {
			return 300 - d.stat * 8;
		});

	svg
		.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.text(function(d) {
			return `${d.name.split(' ')[0][0].toUpperCase()}${d.name.split(' ')[1][0].toUpperCase()}: ${d.stat}`;
		})
		.attr('class', 'text')
		.attr('x', function(d, i) {
			return i * 90 + 30;
		})
		.attr('y', function(d, i) {
			return 320 - d.stat * 8;
		});

	var myText = svg
		.data(data)
		.append('text')
		.attr('y', 25)
		.attr('x', function(d, i) {
			return 150;
		})
		.attr('text-anchor', 'middle')
		.attr('class', 'chart-label') //easy to style with CSS
		.text(function(d) {
			return `${d.statType}`;
		});

	svg
		.append('svg')
		.append('text')
		.text(function() {
			return `X`;
		})
		.attr('x', function(d, i) {
			return 265;
		})
		.attr('y', function(d, i) {
			return 25;
		})
		.on('click', function(e, i) {
			console.log(this);
			d3.select(this.parentNode.parentNode).remove();
		});
};
