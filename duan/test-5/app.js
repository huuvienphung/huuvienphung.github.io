const mes = document.querySelector('.mes');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
	button.addEventListener('click', buttonClick);
})
const computerArray = ['búa', 'bao', 'kéo'];
const btnArray = ['dark', 'danger', 'info'];
let scoreArray = [0, 0, 0];

function buttonClick(e) {
	let player = e.target.innerText.toLowerCase();
	let x = Math.floor(Math.random()*computerArray.length);
	let computer = computerArray[x];
	let result = check(player, computer);

	if (result === 'Hòa') {
		scoreArray[0]++;
	} else if (result === 'Bạn thắng') {
		scoreArray[1]++;
	} else {
		scoreArray[2]++;
	}
	mes.innerHTML = `
		<h5>Kết quả: ${result} -Máy chọn: <button disabled class="btn btn-${btnArray[x]}">${computer}</button></h5>
		<h3>Điểm người chơi: ${scoreArray[1]}</h3>
		<h3>Điểm máy tính: ${scoreArray[2]}</h3>
		<h3>Hòa: ${scoreArray[0]}</h3>
	`;
}
function check(pl, co) {
	let bien = '';
	if (pl === co) {
		return 'Hòa';
	} else {
		if(pl === 'búa') {
			bien = luachon(co, 'kéo');
		} else if(pl === 'bao') {
			bien = luachon(co, 'búa');
		} else {
			bien = luachon(co, 'bao');
		}
		return bien;
	}
}
function luachon(co, chon) {
	if(co === chon) {
		return 'Bạn thắng';
	} else {
		return 'Bạn thua';
	}
}