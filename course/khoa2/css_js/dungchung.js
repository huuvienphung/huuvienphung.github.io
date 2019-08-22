

const noidungs = document.querySelectorAll('.noidung');
const form = document.querySelector('.form-control');
const data = document.getElementById('data');
const text = document.querySelectorAll('.text');
const card_text = document.querySelectorAll('.card-text');


data.addEventListener('mousedown', e => {
	const buttons = document.querySelectorAll('.nut');

		// click vào hiện ra nội dung
		buttons.forEach(function(button, index) {
			button.addEventListener('click', e => {

				noidungs[index].classList.add('xuathien');
				document.body.style.overflow = 'hidden';

				
				e.preventDefault();
			});
		});
	});

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




		
	