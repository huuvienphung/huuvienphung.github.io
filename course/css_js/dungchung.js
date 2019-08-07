
const buttons = document.querySelectorAll('.nut');
const noidungs = document.querySelectorAll('.noidung');
const ul = document.querySelector('ul');
const form = document.querySelector('.form-control')

buttons.forEach(function(button) {
	button.addEventListener('click', (e) => {
		e.target.parentElement.previousElementSibling.classList.add('xuathien');

		e.preventDefault();
	})
})
noidungs.forEach(function(noidung) {
	noidung.addEventListener('click', (e) => {
		if (e.target.classList.contains('noidung')) {
			e.target.classList.remove('xuathien');
		}
	})
})

lis = ul.querySelectorAll('li');

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
		
	