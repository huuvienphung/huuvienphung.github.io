
const buttons = document.querySelectorAll('.nut');
const noidungs = document.querySelectorAll('.noidung');
const ul = document.querySelector('ul');
const form = document.querySelector('.form-control');

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

const image = document.querySelectorAll('.appear .chon');
for (var i = 0; i < image.length; i++) {
	image[i].style.display = 'none';
}

// tạo các nút chọn
const apps = document.querySelectorAll('.app');

apps.forEach(function(app) {
	const luachons = app.querySelectorAll('.choosen a');
	const chons = app.querySelectorAll('.appear .chon');
	
	for (let i = 0; i < chons.length; i++) {
		chons[0].style.display = 'block';
	}
	
	
		luachons.forEach(function (luachon, ind) {
			luachon.addEventListener('click', e => {
				console.log(luachon);
				
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





		
	