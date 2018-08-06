document.querySelector(`.player-selection`).addEventListener(`click`, e => {
	e.preventDefault();
	let player1 = document.querySelector(`select.list-1`).value;
	let player2 = document.querySelector(`select.list-2`).value;
	let stat = document.querySelector(`select:nth-of-type(3)`).value;
	console.log('click detected');
	console.log(player1);
	console.log(player2);
	$.ajax({
		method: `GET`,
		url: `/player-comparison`,
		data: {
			player1: player1,
			player2: player2,
			stat: stat
		},
		success: res => {
			console.log('res from api is:', res);
		}
	});
});

const createChart = (stat, player1, player2, response) => {
	console.log('working?');
	expandStat = stat => {
		return stat === 'pts' ? 'points per game' : 'rebounds per game';
	};

	console.log(`stat: ${stat}`);
	let data = response.reduce((memo, curr) => {
		memo = memo.concat([
			{
				stat: curr.playerHeadlineStats[0][stat],
				name: curr.commonPlayerInfo[0].displayFirstLast,
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
		.attr('class', 'col-1-3')
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
		.attr('width', '65')
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
			return `${d.name.split(' ')[0][0]}${d.name.split(' ')[1][0]}: ${d.stat}`;
		})
		.attr('class', 'text')
		.attr('x', function(d, i) {
			return i * 90 + 28;
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
			return `close`;
		})
		.attr('x', function(d, i) {
			return 270;
		})
		.attr('y', function(d, i) {
			return 25;
		})
		.on('click', function(e, i) {
			console.log(this);
			d3.select(this.parentNode.parentNode).remove();
		});
};
