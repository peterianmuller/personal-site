document.querySelector(`[type='submit']`).addEventListener('click', e => {
	console.log(e);
	let results = {
		q1: document.querySelector(`input`).value
	};
	console.log(results);
});
