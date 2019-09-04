const wording = ['Do you like JavaScript as much as i do?','Hope you are having fun this is a simple game you can make.','Source code is included so you can create your own version of this challenge.'];
const output = document.querySelector('.output');
const textPlay = document.querySelector('textarea');
const button = document.querySelector('button');
let startTime, endTime;
button.addEventListener('click', btnClick);

function btnClick(e) {

	if (e.target.innerText == 'Bắt đầu') {
		textPlay.disabled = false;
		textPlay.value = '';
		playGame();
	} else if (e.target.innerText == 'Dừng lại') {
		textPlay.disabled = true;
		button.innerText = 'Bắt đầu';
		endPlay();
	}
}

function playGame() {
	let num = ran();
	output.innerText = wording[num];
	let date = new Date();
	startTime = date.getTime();
	button.innerText = "Dừng lại";
}

function endPlay() {
	let date = new Date();
	endTime = date.getTime();
	let total = ((endTime - startTime)/1000);

	let str = textPlay.value;
	let wordCount = demTu(str);
	let speed = Math.round((wordCount/total)*60);

	let finalMes = "Bạn đánh được "+speed+" từ mỗi phút!"
	finalMes += '<br>'+compareWords(str, output.innerText);

	output.innerHTML = finalMes;
}
function compareWords(str1, str2) {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let cnt = 0;
	words1.forEach(function(item, index) {
		if (item == words2[index]) {
			cnt++;
		}
	})
	return 'đúng '+cnt+' trên '+words2.length+' từ';
}

function demTu(str) {
	let reponse = str.split(" ").length;
	return reponse;
}
function ran() {
	return Math.floor(Math.random() * wording.length);
}