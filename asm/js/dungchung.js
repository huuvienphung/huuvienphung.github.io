
var bavach = document.getElementById('bavach');
var nav = document.querySelector('.nav');
bavach.addEventListener('click', e => {
	e.preventDefault();

	e.target.classList.toggle('xoay');
	nav.classList.toggle('chayra');

	nenden.classList.remove('change');
	search.firstElementChild.style.display = 'block';
	form.classList.remove('xuathien');
	user.classList.remove('uhien');
});
nav.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.classList.contains('nav')) {	
		nav.classList.remove('chayra');
		bavach.classList.remove('xoay');
	}
})
// phần nút 3 vạch và nav
var search = document.getElementById('search');
const form = document.querySelector('.search');
const nenden = document.getElementById('nenden');

search.addEventListener('click', load);
function load(e) {
	e.preventDefault();

	form.classList.add('xuathien');
	e.target.style.display = 'none';
	nenden.classList.add('change');
	nav.classList.remove('chayra');
	bavach.classList.remove('xoay');
	user.classList.remove('uhien');
}

nenden.addEventListener('click', e => {
	e.preventDefault();

	e.target.classList.remove('change');
	form.classList.remove('xuathien');
	search.firstElementChild.style.display = 'block';
	nav.classList.remove('chayra');
	bavach.classList.remove('xoay');
})
//phần form
var nutlentren = document.querySelector('.nutlentren a');
var header = document.getElementById('top');
var trangthai = 1;
var body = document.body.offsetWidth;
var logo = document.getElementById('logo');
var src = logo.getAttribute('src');
window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 100) {
			if (trangthai == 1) {
				nutlentren.style.display = 'block';
				header.classList.add('cuon');
				trangthai = 2;
				if (body > 992) {
					// logo.setAttribute('src','image20/logo8.png');
					nav.classList.add('lentren');
				}
			}
		} else if(trangthai == 2) {
			nutlentren.style.display = 'none';
			header.classList.remove('cuon');
			trangthai = 1;
			// logo.setAttribute('src', src)
			nav.classList.remove('lentren');
		}
});
// cuộn header
nutlentren.addEventListener('click', e => {
	e.preventDefault();

	window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
	})
})
// nút lên trên
var items = document.querySelectorAll('.item1');

items.forEach(function(item, idx) {
	item.addEventListener('click', e => {
		var href = item.getAttribute('href');
		if (href == '#' || (href == 'sanpham.html' && body < 768)) {
			for (var i = 0; i < items.length; i++) {
				items[i].classList.remove('active');
			}
			e.target.classList.add('active');
			var itemu = document.querySelectorAll('.abc');
			for (var i = 0; i < itemu.length; i++) {
				itemu[i].style.display = 'none';
			}

			if (e.target.nextElementSibling != null) {
				e.target.nextElementSibling.style.display = 'block';
			}
		} else {
				window.open(href, '_parent');
		}	
	})
})
var itemu2 = document.querySelectorAll('.item2');

// console.log(itemu2);
itemu2.forEach(function(itemu, idx) {
	itemu.addEventListener('click', e => {
		e.preventDefault();
		
		var top3 = document.querySelectorAll('.top3');
		for (var i = 0; i < top3.length; i++) {
			top3[i].style.display = 'none';
		}
		if (e.target.nextElementSibling != null) {
			e.target.nextElementSibling.style.display = 'block';
		}
	})
});
// phần itemlet 
var filter = document.getElementById('filter');
var names = document.getElementById('names');

names.style.display = 'none';
names.style.visibility = 'hidden';

filter.addEventListener('keyup', filterName);
filter.addEventListener('focus', filterAppear);
filter.addEventListener('blur', filterHidden);

function filterHidden() {
	names.style.display = 'none';
	names.style.visibility = 'hidden';
}
function filterAppear() {
	names.style.display = 'none';
	names.style.visibility = 'visible';
}
function filterName() {
	let filterValue = document.getElementById('filter').value.toUpperCase();

	let ul = document.getElementById('names');
	let li = ul.querySelectorAll('li.collection-item');

	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];

		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			names.style.display = 'block';
			li[i].style.display = 'block';
		} else {
			li[i].style.display = 'none';
		}
	}
}
// phần search tìm kiếm form

var iconuser = document.querySelector('.cart .fa-user');
var user = document.getElementById('user');
var dangnhap = document.getElementById('dangnhap');

iconuser.addEventListener('click', e => {
	e.preventDefault();
	nenden.classList.remove('change');
	nav.classList.remove('chayra');
	bavach.classList.remove('xoay');
	form.classList.remove('xuathien');
	search.style.display = 'block';
	dangnhap.style.display = 'block';
});
document.body.addEventListener('dblclick', e => {
	dangnhap.style.display = 'none';
});
document.getElementById('delete').addEventListener('click', e => {
	e.preventDefault();
	dangnhap.style.display = 'none';
})
// phần form user

var cart = document.querySelector('.fa-cart-plus');
var giohang = document.getElementById('giohang');

cart.addEventListener('click', e => {
	e.preventDefault();

	nenden.classList.remove('change');
	nav.classList.remove('chayra');
	bavach.classList.remove('xoay');
	form.classList.remove('xuathien');
	search.style.display = 'block';
	giohang.style.display = 'block';
});
var delete2 = document.getElementById('delete2');

delete2.addEventListener('click', e => {
	e.preventDefault();
	giohang.style.display = 'none';

})


