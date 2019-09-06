const gameArea = document.querySelector('.game');
const button = document.querySelector('button');

let gamePlay = false;

button.addEventListener('click', function() {
	if (!gamePlay) {
		gamePlay = true;
		button.innerHTML = 'Check combo';
	} else {
		gamePlay = false;
		button.innerHTML = 'Start';
	}
})