const button = document.querySelector('.btn');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const output = document.getElementById('output');

button.addEventListener('click', btnClick);

function btnClick() {
	let lucLacs = [lucLac(6),lucLac(6)];
	console.log(lucLacs);
	let temp;
	if (lucLacs[0] == lucLacs[1]) {
		temp = 'Hòa nhau nhé';
	} else if(lucLacs[0] > lucLacs[1]) {
		temp = 'Người chơi 1 win';
	} else {
		temp = 'Người chơi 2 win';
	}
	output.innerHTML = temp;
	player1.innerHTML = lucLacs[0];
	player2.innerHTML = lucLacs[1];
}

function lucLac(number) {
	let num = Math.floor(Math.random() * number)+1;
	let n = 9855+num;
	let char = '&#'+n+';';
	return char;
}