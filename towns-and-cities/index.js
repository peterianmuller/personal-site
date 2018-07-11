document.querySelector(`[type='submit']`).addEventListener('click', e => {
	console.log(e);
	let results = {
		q1: document.querySelector(`input`).value
	};
	console.log(results);
});

const audio = new Audio('I-do.mp3');

document.querySelector('.play').addEventListener('click', () => {
	audio.play();
});

document.querySelector('.pause').addEventListener('click', () => {
	audio.pause();
});
