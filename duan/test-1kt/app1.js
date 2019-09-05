const box = document.querySelector('.box');

const buttonArray = ['dark', 'danger', 'primary', 'secondary', 'info', 'success', 'light', 'warning'];

const button = document.createElement('button');
let temp = document.createTextNode('no color');
button.appendChild(temp);

let span = document.createElement('h2');

const button1 = document.createElement('button');
button1.className = 'btn';
temp1 = document.createTextNode('Dừng lại');
button1.appendChild(temp1);


button.appendChild(span);

box.appendChild(button);
box.appendChild(button1);

button.addEventListener('click', function(e) {
	
	let x = buttonArray[random()];
	let lass = 'btn btn-'+x;

	this.innerHTML = x.toUpperCase();
	this.setAttribute('class', lass);

	this.appendChild(span);
})


function random() {
	return Math.floor(Math.random() * buttonArray.length);
}

function ranColor() {
	return '#'+Math.random().toString(16).substr(-6);
}

box.addEventListener('mouseover', function(e) {
		box.style.backgroundImage = `linear-gradient(90deg,${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()},${ranColor()})`;
})
box.addEventListener('mouseout', function(e) {
		box.style.backgroundImage = '';
})

function ranIcon(small, big) {
	let x = Math.floor(Math.random() * (big - small)) + small;
	return '&#'+x+';('+x+')';
}

auto();
var change;

function auto() {
	change = window.setInterval(function() {
		let y = ranIcon(8500, 9000);
		span.innerHTML = y;
	}, 1000);
}


button1.addEventListener('click', function() {
	this.style.backgroundColor = ranColor();
	this.style.color = ranColor();

	if (this.textContent == 'Dừng lại') {

		this.textContent = 'Tiếp tục';
		clearInterval(change);

	} else if(this.textContent == 'Tiếp tục') {

		this.textContent = 'Dừng lại';
		auto();
	}
})