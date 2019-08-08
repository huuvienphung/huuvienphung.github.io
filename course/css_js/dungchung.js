
const buttons = document.querySelectorAll('.nut');
const noidungs = document.querySelectorAll('.noidung');
const ul = document.querySelector('ul');
const form = document.querySelector('.form-control')

buttons.forEach(function(button) {
	button.addEventListener('click', (e) => {

		if(e.target.classList.contains('nut')) {
			e.target.parentElement.previousElementSibling.classList.add('xuathien');
		} else {
			e.target.parentElement.parentElement.previousElementSibling.classList.add('xuathien');
		}
		
		document.body.style.overflow = 'hidden';
		e.preventDefault();
	})
})
noidungs.forEach(function(noidung) {
	noidung.addEventListener('click', (e) => {
		if (e.target.classList.contains('noidung')) {
			e.target.classList.remove('xuathien');
			document.body.style.overflow = 'auto';
		}
	})
})

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
		
	