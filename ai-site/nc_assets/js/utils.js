let homeImg = document.querySelectorAll('article.img');
let captions = document.querySelectorAll('.captions');
let spinnerContainer = document.querySelector('.spinner-container');

homeImg.forEach((img, i) => {
	img.onmouseover = () => {
		captions[i].classList.add('show-caption');
	};
	img.onmouseout = () => {
		captions[i].classList.remove('show-caption');
	};
});

document.querySelector('.toggleNav').addEventListener('click', e => {
	e.preventDefault();
	let ul = document.querySelector('.flex-nav-header ul.right');
	if (ul.classList.contains('open')) {
		ul.classList.remove('open');
	} else {
		ul.classList.add('open');
	}
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	console.log(window.innerHeight);
	myFunction();
};

// Get the spinner

// Get the offset position of the navbar
var sticky = window.innerHeight;
var alreadyScrolled = false;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= window.innerHeight) {
		spinnerContainer.classList.add('hide');
		if (!alreadyScrolled) {
			window.scrollTo(0, 0);
			alreadyScrolled = true;
		}
	}
}
