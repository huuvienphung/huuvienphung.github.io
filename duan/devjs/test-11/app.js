const game = document.querySelector('.game');
const button = document.querySelector('button');
const mes = document.querySelector('.mes');
let boo = false;
let score = 0;

button.addEventListener('click', function() {
	if (!boo) {
		boo = true;
		game.innerHTML = '';
		make();
		mes.innerHTML = 'Lựa chọn số đúng';
		this.innerHTML = "Kiểm tra số!";
	} else {
		let inputs = document.querySelectorAll('input');
		score++;
		mes.innerHTML = 'Số lần đoán: '+score;
		let winCondition = 0;
		for (var i = 0; i < inputs.length; i++) {

			let put = inputs[i];
			if (put.value == put.correct) {
				winCondition++;
				put.style.backgroundColor = 'green';
				put.style.color = 'white';
			} else {
				let color = (put.value < put.correct) ? 'blue' : 'red';
				put.style.backgroundColor = color;
				put.style.color = 'black';
			}
		}

		if (winCondition == inputs.length) {
			gameEnd();
		}
	}
})

function make() {
	for (var i = 0; i < 4; i++) {
		let input = document.createElement('input');
		input.setAttribute('type','number');
		input.classList.add('numb');
		input.max = 9;
		input.min = 0;
		input.size = 1;

		input.order = i;
		input.correct = Math.floor(Math.random() * 10);
		input.value = 0;

		console.log(input.correct);
		game.appendChild(input);
	}
	
}

function gameEnd() {
	boo = false;
	button.innerHTML = 'Chơi lại game!';
	mes.innerHTML = 'Bạn đã hoàn thành trong '+score+' lần đoán';
}