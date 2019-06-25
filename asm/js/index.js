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
// phần giỏ hàng
var elem = document.querySelector('.main-carousel');
// var elem2 = document.querySelector('.main-carousel2');
var flkty = new Flickity( elem, {
  // optio
  cellAlign: 'left',
  // contain: true,
  wrapAround: true,
  autoPlay: true
});
// var flkty = new Flickity( '.main-carousel', {});
// phan sp

var clickcarts = document.querySelectorAll('.cartpro');
var changenumber = document.querySelector('.cart small');

var pluss = document.querySelectorAll('.fa-plus');
var minuss = document.querySelectorAll('.fa-minus')

clickcarts.forEach(function(clickcart, idx) {
	clickcart.addEventListener('click', e => {
		e.preventDefault();

		changenumber.textContent++;
	})
})
// phần tăng giảm số lượng

pluss.forEach(function(plus) {
	plus.addEventListener('click', e => {
		e.preventDefault();
		// console.log(e.target);

		// e.target.previousElementSibling.value;
		e.target.parentElement.previousElementSibling.value++;
	})
})
minuss.forEach(function(minus) {
	minus.addEventListener('click', e => {
		e.preventDefault();
		// console.log(e.target);

		// e.target.previousElementSibling.value;
		if (e.target.parentElement.nextElementSibling.value != 0) {
			e.target.parentElement.nextElementSibling.value--;
		}
	})
})

// phần tăng giảm số lượng của ô sp


