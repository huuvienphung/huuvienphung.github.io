const size1 = document.getElementById('size1');
const size2 = document.getElementById('size2');
const size3 = document.getElementById('size3');
const size4 = document.getElementById('size4');
const reset = document.getElementById('reset');
const xoa = document.getElementById('xoa');
const tim = document.getElementById('tim');
const ul = document.querySelector('ul');

size1.addEventListener('keyup', kichCoChu);
size2.addEventListener('keyup', kichCoKhung);
reset.addEventListener('click', resetClick);
xoa.addEventListener('click', xoaClick);
tim.addEventListener('click', timClick);

function kichCoChu(e) {
	let lis = document.querySelectorAll('.con');
	for (var i = 0; i < lis.length; i++) {
			lis[i].style.fontSize = e.target.value+'px';
	}
}
function kichCoKhung(e) {
	let lis = document.querySelectorAll('.con');

	for (var i = 0; i < lis.length; i++) {
		lis[i].parentElement.style.width = e.target.value+'%';
	}
}
function resetClick() {
	let lis = document.querySelectorAll('.con');
	for (var i = 0; i < lis.length; i++) {
			lis[i].style.fontSize = '';
			lis[i].parentElement.style.width = '';
	}
	size1.value = '';
	size2.value = '';
	size3.value = '';
	size4.value = '';
}
function timClick() {
	if (size3.value >= 0 && size4.value >= 0 && size4.value >= size3.value) {
		num1 = Number(size3.value);
		num2 = Number(size4.value);
		while(num1 <= num2){
			let li = document.createElement('li');
			let div = document.createElement('div');
			let char = '&#'+num1+';';
			div.className = 'con';
			div.innerHTML = char+'- '+num1;
			li.appendChild(div);
			ul.appendChild(li)
			num1++;
		}
	}
}
function xoaClick() {
	while(ul.children[0]) {
		ul.children[0].remove();
	}
}
const lenTren = document.getElementById('lentren');
lenTren.addEventListener('click', e => {
	e.preventDefault();
	window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
	})
})

var trangthai = 1;
lenTren.style.display = 'none';
window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 100) {
			if (trangthai == 1) {
				lenTren.style.display = 'block';
				trangthai = 2;
			}
		} else if(trangthai == 2) {
			lenTren.style.display = 'none';
			trangthai = 1;
		}
});