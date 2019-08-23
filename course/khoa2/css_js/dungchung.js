const form = document.querySelector('.form-control');
const text = document.querySelectorAll('.text');
const card_text = document.querySelectorAll('.card-text');
const nd = document.getElementById('nd');



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
})





		
	