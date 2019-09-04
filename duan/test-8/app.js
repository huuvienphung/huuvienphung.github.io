const output = document.querySelector('.output');
const button = document.querySelector('.btn');
const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

button.addEventListener('click', btnClick);

function btnClick(e) {
	let rollArray = [lucLac(6),lucLac(6)];
	let temp;
	if (rollArray[0] == rollArray[1]) {
		temp = 'hòa nhau nhé';
	} else if (rollArray[0] > rollArray[1]) {
		temp = 'player1 win';
	} else {
		temp = 'player2 win';
	}
	output.innerHTML = temp;
	outputSystem(player1, builder(rollArray[0]));
	outputSystem(player2, builder(rollArray[1]));
}
function outputSystem(el, div) {
	if (el.children[0]) {
		el.children[0].remove();
	}
	el.appendChild(div);
}
function builder(num) {
	let div = document.createElement('div');
	let dieArray = dice[num - 1];
	for (var i = 1; i < 10; i++) {
		let span = document.createElement('div');
		span.setAttribute('class','dot');
		if (dieArray.includes(i)) {
			span.classList.add('black');
		}
		div.appendChild(span);
	}
	div.className = 'con';
	return div;
}

function lucLac(num) {
	let char = Math.floor(Math.random() * num) + 1;
	return char;
}