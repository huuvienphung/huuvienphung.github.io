
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
			behavior: 'smooth'
	})
})
// nút lên trên

// phần giỏ hàng
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  
     cellAlign: 'left',
  // contain: true,
    wrapAround: true,
    autoPlay: true
	// freeScroll: true
});

// var flkty = new Flickity( '.main-carousel', {});

const demNguoc = document.querySelector('.demnguoc');

const ngayHet = new Date('Jul 20, 2019 12:00:00').getTime();

const time = setInterval(() => {

	const bayGio = new Date().getTime();

	const timeRun = ngayHet - bayGio;

	const days = Math.floor(timeRun / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeRun % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((timeRun % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRun % (1000 * 60)) / 1000);

	demNguoc.innerHTML = `
		<ul>
			<li class="vuong"><span>${days}</span><p> ngày</p></li>
			<li class="vuong"><span>${hours}</span><p> giờ</p></li>
			<li class="vuong"><span>${mins}</span><p> phút</p></li>
			<li class="vuong"><span>${seconds}</span><p> giây</p></li>
		</ul>
	`;
	
	if (timeRun < 0) {
		clearInterval(time);

		countdown.style.color = '#17a2b8';
		countdown.innerHTML = 'Sự kiện kết thúc!';
	};


})





