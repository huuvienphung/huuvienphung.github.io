const form = document.querySelector('.form-control');
const text = document.querySelectorAll('.text');
const card_text = document.querySelectorAll('.card-text');
const nd = document.getElementById('nd');
const dungchung = document.getElementById('link');


// click vào nền đen
nd.addEventListener('mousedown', (e) => {

	if (e.target.classList.contains('xuathien')) {
		e.target.classList.remove('xuathien');
		document.body.style.overflow = 'auto';
	}
	if(e.target.classList.contains('abc')) {

		var vt = e.target.getAttribute('data-vt');

		const luachons = document.querySelectorAll('.abc');
		const thongtins = document.querySelectorAll('.chon');

		
		for (var i = 0; i < luachons.length; i++) {
			luachons[i].classList.remove('active');
		}
		e.target.classList.add('active')
		

		
		for (var i = 0; i < thongtins.length; i++) {
			thongtins[i].style.display = 'none';
		}
		thongtins[vt].style.display = 'block';
	}
	
})

// nhập form
dungchung.style.display = 'none';

form.addEventListener('keyup', e => {
	var text = e.target.value.toUpperCase();
	trs = data.querySelectorAll('tr');

	trs.forEach(function(tr) {
		var td = tr.firstElementChild.nextElementSibling;

		if(td.innerHTML.toUpperCase().indexOf(text) != -1) {
			tr.style.display = 'table-row'
		} else {
			tr.style.display = 'none'
		}
	})
	if (text === "ZZ") {
		dungchung.style.display = 'block';
	} else {
		dungchung.style.display = 'none';
	}
})


var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/link.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < data.length; i++) {
			output += `
				<a class="btn btn-dark" href="${data[i].link}">${data[i].name}</a> 
			`;
		}
		dungchung.innerHTML = output;

	}
}

xhr.send();

const link = document.createElement('link');
link.setAttribute('rel','shortcut icon');
link.setAttribute('href','css_js/icon.png');
link.setAttribute('type','image/x-icon');

document.head.appendChild(link);


	