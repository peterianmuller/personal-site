document.querySelector('.select-first-of-type-section').addEventListener('click', e => {
	let x = document.querySelector('.first-and-last-of-type-content');
	let matched = x.querySelectorAll(' :first-of-type');
	if (!matched[0].classList.contains('section-first-of-type')) {
		matched.forEach(el => {
			el.classList.add('section-first-of-type');
		});
		e.target.textContent = 'Enough of "section: first-of-type"';
	} else {
		matched.forEach(el => {
			el.classList.remove('section-first-of-type');
		});
		e.target.textContent = 'checkout "section: first-of-type"';
	}
});

document.querySelector('.select-last-of-type-section').addEventListener('click', e => {
	let x = document.querySelector('.first-and-last-of-type-content');
	let matched = x.querySelectorAll(' :last-of-type');
	if (!matched[0].classList.contains('section-last-of-type')) {
		matched.forEach(el => {
			el.classList.add('section-last-of-type');
		});
		e.target.textContent = 'Enough of "section: last-of-type"';
	} else {
		matched.forEach(el => {
			el.classList.remove('section-last-of-type');
		});
		e.target.textContent = 'checkout "section: last-of-type"';
	}
});

let firstOrLastChildButtons = document.querySelectorAll(`button[class*='child']`);
firstOrLastChildButtons.forEach(e => {
	e.addEventListener('click', e => {
		let firstOrLast = e.target.textContent.indexOf('first') > -1 ? 'first' : 'last';
		let content = document.querySelector('.first-and-last-child-content');
		let children = content.querySelectorAll(` :${firstOrLast}-child`);
		children.forEach(el => {
			if (el.classList.contains(`section-${firstOrLast}-child`)) {
				el.classList.remove(`section-${firstOrLast}-child`);
			} else {
				el.classList.add(`section-${firstOrLast}-child`);
			}
		});
		e.target.textContent =
			e.target.textContent.indexOf('Enough') > -1 ? `Check out ${firstOrLast}-child` : `Enough of ${firstOrLast}-child`;
	});
});
