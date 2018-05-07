let firstOrLastOfTypeButtons = document.querySelectorAll(`button[class*='type']`);

console.log(firstOrLastOfTypeButtons);

updateFirstOrLastOfType = e => {
	let firstOrLast = e.target.textContent.indexOf('first') > 1 ? 'first' : 'last';
	let children = document.querySelector('.first-and-last-of-type-content').querySelectorAll(` :${firstOrLast}-of-type`);
	children.forEach(el => {
		el.classList.contains(`section-${firstOrLast}-of-type`)
			? el.classList.remove(`section-${firstOrLast}-of-type`)
			: el.classList.add(`section-${firstOrLast}-of-type`);
	});
	e.target.textContent =
		e.target.textContent.indexOf('Enough') > -1
			? `Checkout "section :${firstOrLast}-of-type"`
			: `Enough of "section :${firstOrLast}-of-type"`;
};

firstOrLastOfTypeButtons.forEach(el => {
	el.addEventListener('click', updateFirstOrLastOfType);
});

let firstOrLastChildButtons = document.querySelectorAll(`button[class*='child']`);

updateFirstOrLastChild = e => {
	let firstOrLast = e.target.textContent.indexOf('first') > -1 ? 'first' : 'last';
	let children = document.querySelector('.first-and-last-child-content').querySelectorAll(` :${firstOrLast}-child`);
	children.forEach(el => {
		if (el.classList.contains(`section-${firstOrLast}-child`)) {
			el.classList.remove(`section-${firstOrLast}-child`);
		} else {
			el.classList.add(`section-${firstOrLast}-child`);
		}
	});
	e.target.textContent =
		e.target.textContent.indexOf('Enough') > -1
			? `Check out section :${firstOrLast}-child`
			: `Enough of section :${firstOrLast}-child`;
};

firstOrLastChildButtons.forEach(el => {
	el.addEventListener('click', updateFirstOrLastChild);
});
