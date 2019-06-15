var bavach = document.getElementById('bavach');
bavach.addEventListener('click', e => {
	e.preventDefault();

	e.target.classList.toggle('xoay');
});
// phần nút 3 vạch
const search = document.getElementById('search').addEventListener('click', load);
const form = document.querySelector('.search');

function load(e) {
	e.preventDefault();

	form.classList.toggle('xuathien');
}
//phần form
var header = document.getElementById('top');
var trangthai = 1;
window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 200) {
			if (trangthai == 1) {
				header.classList.add('cuon');
				trangthai = 2;
			}
		} else if(trangthai == 2) {
			header.classList.remove('cuon');
			trangthai = 1;
		}
});


