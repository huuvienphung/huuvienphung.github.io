// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/fours.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		var card = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < card.length; i++) {
			output += `
			<div class="card">
			<h5 class="card-header">${card[i].td}</h5>
			<div class="card-body">
			<p class="card-text">${card[i].nd}</p>
			</div>
			</div>
			`;
		}
		document.getElementById('fours').innerHTML = output;

	}
}
xhr.send();


const buttons = document.querySelectorAll('.nut');
const noidungs = document.querySelectorAll('.noidung');
const ul = document.querySelector('ul');
const form = document.querySelector('.form-control')

console.log(buttons);
console.log(noidungs);

// click vào hiện ra nội dung
buttons.forEach(function(button, index) {
	button.addEventListener('click', (e) => {

		noidungs[index].classList.add('xuathien');
		document.body.style.overflow = 'hidden';
		e.preventDefault();
	})
})
// click vào nền đen
noidungs.forEach(function(noidung) {
	noidung.addEventListener('click', (e) => {
		if (e.target.classList.contains('noidung')) {
			e.target.classList.remove('xuathien');
			document.body.style.overflow = 'auto';
		}
	})
})

// nhập form
lis = ul.querySelectorAll('li.con');

form.addEventListener('keyup', e => {
	var text = e.target.value.toUpperCase();

	lis.forEach(function(li) {
		var h5 = li.firstElementChild.firstElementChild;
		if(h5.innerHTML.toUpperCase().indexOf(text) != -1) {
			li.style.display = 'block';
		} else {
			li.style.display = 'none';
		}
	})
})


// tạo các nút chọn
const apps = document.querySelectorAll('.app');

apps.forEach(function(app) {
	const luachons = app.querySelectorAll('.choosen a');
	const chons = app.querySelectorAll('.appear .chon');
	
	for (var i = 1; i < chons.length; i++) {
		chons[i].style.display = 'none';
	}

	luachons.forEach(function(luachon, ind) {
		luachon.addEventListener('click', e => {
			for (var i = 0; i < chons.length; i++) {
				luachons[i].classList.remove('active');
			}
			e.target.classList.add('active');
			for (var i = 0; i < chons.length; i++) {
				chons[i].style.display = 'none';
			}
			chons[ind].style.display = 'block';
			e.preventDefault();
		})
	})
})





		
	