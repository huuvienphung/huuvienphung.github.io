// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'css_js/ng2data.json', true);
xhr.onload = function() {
	if(this.status == 200) {
		
		var data = JSON.parse(this.responseText);

		var output = '';

		for (var i = 0; i < data.length; i++) {
			output += `
			<li class="con">
				<div class="card">
					<h5 class="card-header">${data[i].header}</h5>
					<div class="card-body">
						<h5 class="card-title">${data[i].title}</h5>
						<p class="card-text">${data[i].text}</p>
					</div>
					<div class="card-footer text-muted">
						<a href="#" class="btn btn-dark nut"><i class="far fa-folder-open"></i> Chi tiết</a>
					</div>
				</div>
			</li>
			`;
		}
		document.getElementById('data').innerHTML = output;

	}
}
xhr.send();

const noidungs = document.querySelectorAll('.noidung');
const ul = document.querySelector('ul');
const form = document.querySelector('.form-control');
const data = document.getElementById('data');


data.addEventListener('mousedown', e => {
	const buttons = document.querySelectorAll('.nut');

		// click vào hiện ra nội dung
		buttons.forEach(function(button, index) {
			button.addEventListener('click', (e) => {

				noidungs[index].classList.add('xuathien');
				document.body.style.overflow = 'hidden';
				e.preventDefault();
			})
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


form.addEventListener('keyup', e => {
	var text = e.target.value.toUpperCase();
	lis = ul.querySelectorAll('li.con');
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
	
	showData(luachons, chons);
})

function showData(luachons, chons) {
	for (var i = 1; i < chons.length; i++) {
		chons[0].style.display = 'block';
	}
	
	luachons.forEach(function (luachon, ind) {
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
}



		
	