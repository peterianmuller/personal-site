document.querySelector('.select-first-of-type-body').addEventListener('click', e => {
	let x = document.querySelector('.first-of-type-content');
	let matched = x.querySelectorAll(' :first-of-type');
	if (!matched[0].classList.contains('body-first-of-type')) {
		matched.forEach(el => {
			el.classList.add('body-first-of-type');
		});
		e.target.textContent = 'Enough of "body: first-of-type"';
	} else {
		matched.forEach(el => {
			el.classList.remove('body-first-of-type');
		});
		e.target.textContent = 'checkout "body: first-of-type"';
	}
});


