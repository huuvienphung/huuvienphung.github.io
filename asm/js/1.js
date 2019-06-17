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
var header = document.getElementById('top');
var trangthai = 1;
var logo = document.getElementById('logo');
var src = logo.getAttribute('src');
window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 100) {
			if (trangthai == 1) {
				header.classList.add('cuon');
				trangthai = 2;
				var body = document.body.offsetWidth;
				if (body > 992) {
					// logo.setAttribute('src','image20/logo8.png');
					nav.classList.add('lentren');
				}
			}
		} else if(trangthai == 2) {
			header.classList.remove('cuon');
			trangthai = 1;
			logo.setAttribute('src', src)
			nav.classList.remove('lentren');
		}
});
// cuộn header
var items = document.querySelectorAll('.item1');

items.forEach(function(item, idx) {
	item.addEventListener('click', e => {
		e.preventDefault();
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
	})
})
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
	names.style.display = 'block';
	names.style.visibility = 'visible';
}
function filterName() {
	let filterValue = document.getElementById('filter').value.toUpperCase();

	let ul = document.getElementById('names');
	let li = ul.querySelectorAll('li.collection-item');

	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];

		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}
// phần search tìm kiếm form

var iconuser = document.querySelector('.cart .fa-user');
console.log(iconuser);
var user = document.getElementById('user');

iconuser.addEventListener('click', e => {
	e.preventDefault();	
	user.classList.toggle('uhien');
	nenden.classList.remove('change');
	nav.classList.remove('chayra');
	bavach.classList.remove('xoay');
	form.classList.remove('xuathien');
	search.style.display = 'block';
});
document.body.addEventListener('dblclick', e => {
	user.classList.remove('uhien');
});
// phần form user


