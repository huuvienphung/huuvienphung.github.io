var hamburger = document.querySelector('.hamburger a');
hamburger.addEventListener('click', e => {
	e.preventDefault();

	e.target.classList.toggle('xoay');
});

const search = document.getElementById('search').addEventListener('click', load);
const form = document.querySelector('.search');

function load(e) {
	e.preventDefault();

	form.classList.toggle('xuathien');
}
