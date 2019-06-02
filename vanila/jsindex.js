const bavach = document.querySelector('.bavach a');
var tab = document.querySelector('.tab');
var link = document.querySelectorAll('.tab a');
var nav = document.querySelector('nav');
var thanhbar = document.querySelector('.thanhbar');
var itemNav = document.querySelectorAll('.hemenu a');
var itemTo = document.getElementsByClassName('move');
var nutchon = document.querySelectorAll('.sanpham .choose a');
var change = document.getElementById('change');
var box = document.getElementsByClassName('box');
var chay = document.getElementsByClassName('chay');
var ngan = document.getElementsByClassName('ngan');
// nut ba vach
bavach.addEventListener('click', (e) => {
	e.preventDefault();
	e.target.classList.toggle('change');
	tab.classList.toggle('xuathien');
});

// tab click
nav.addEventListener('click', kickTab);
function kickTab(e) {
	e.preventDefault();
	if(e.target.classList.contains('menu')) {
		bavach.classList.remove('change');
		e.target.parentElement.classList.remove('xuathien');
	}
};
//cuonchuot

var mangIndex = [];
itemNav.forEach(function(item, idx) {
	mangIndex.push(itemTo[idx].offsetTop);
	item.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: itemTo[idx].offsetTop - thanhbar.offsetHeight,
			left: 0,
			behavior: 'smooth'
		})
		for (let j = 0; j < link.length; j++) {
 			link[j].classList.remove('hientai');
 		}
 		e.target.classList.add('hientai');
 		tab.classList.remove('xuathien');
		bavach.classList.remove('change');
	})
})
 // cuon chuot
 var trangthai = 1;
window.addEventListener('scroll', function() {
	if(window.pageYOffset >= 200) {
		if(trangthai == 1) {
			thanhbar.classList.add('biendang');
			trangthai = 2;
		}
	} else {
		if(trangthai == 2) {
			thanhbar.classList.remove('biendang');
			trangthai = 1;
		}
	}
	if (window.pageYOffset < mangIndex[1] - 100) {
		for (let i = 0; i < itemNav.length; i++) {
			itemNav[i].classList.remove('hientai');
		}
		itemNav[0].classList.add('hientai');
	}


	if (window.pageYOffset > itemTo[5].offsetTop - 100) {
			for (var i = 0; i < itemNav.length; i++) {
				itemNav[i].classList.remove('hientai');
			}
			itemNav[5].classList.add('hientai');
	}
	for (var i = 1; i < 5; i++) {
		if (window.pageYOffset > mangIndex[i] - 150 && window.pageYOffset < itemTo[i+1].offsetTop - 150){
				for (let j = 0; j < itemNav.length; j++) {
					itemNav[j].classList.remove('hientai');
				}
				itemNav[i].classList.add('hientai');
		}
	}
	

	
})
// lua chon danh sach
	var elem = document.querySelector('.grid');	
	var bonut = document.getElementById('bonut');

	var iso = new Isotope( elem, {
	  itemSelector: '.box',
	  layoutMode: 'fitRows'
	});
	var iso = new Isotope( '.grid', {});
	imagesLoaded( elem ).on( 'progress', function() {
	  iso.layout();
	});
	
	bonut.addEventListener('click', (e) => {
		e.preventDefault();
		if(!matchesSelector(e.target, 'a')) {
			return;
		}
		for (let i = 0; i < nutchon.length; i++) {
			nutchon[i].classList.remove('act');
		}
		e.target.classList.add('act');

		var x = e.target.textContent;
		change.textContent = x;

		var text = e.target.getAttribute('href');
	  	iso.arrange({ filter: text });

	})

// chay du lieu

   function gomlai(gioihan, chay, ngan) {
		var start = 0;
		var thoigian = setInterval(function() {
			if( start <= gioihan) {
				chay.textContent = `${start}%`;
				ngan.style.width = `${start}%`;
				start ++;

			} else {
				clearInterval(thoigian);
			}
		}, 50);
	};
	var a = [75, 75, 55, 70];
	for (var i = 0; i < a.length; i++) {
		gomlai(a[i], chay[i], ngan[i]);
	}
	