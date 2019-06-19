
//phần form
var nutlentren = document.querySelector('.nutlentren a');
var trangthai = 1;
var logo = document.getElementById('logo');
window.addEventListener('scroll', function() {
		if(window.pageYOffset >= 100) {
			if (trangthai == 1) {
				nutlentren.style.display = 'block';
				trangthai = 2;
			}
		} else if(trangthai == 2) {
			nutlentren.style.display = 'none';
			trangthai = 1;
		}
});
// cuộn header
nutlentren.addEventListener('click', e => {
	e.preventDefault();

	window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
			"freeScroll": true
	})
})
// nút lên trên

// phần giỏ hàng
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // optio
  cellAlign: 'left',
  // contain: true,
  wrapAround: true,
  autoPlay: true
});

// var flkty = new Flickity( '.main-carousel', {});


