$(function() {
	$('.sanpham .sp .box a').fancybox();
	//==================================
	$('.bavach a').click(function(event) {
		$(this).toggleClass('change');
		$('.tab').toggleClass('xuathien');
		return false;
	});
	$('.thanhbar .tab').click(function(event) {
		$('.bavach a').removeClass('change');
		$(this).removeClass('xuathien');
	});
	//=========================================
	var trangthai = 1;
	var vitri1 = $('.canhan').offset().top, vt1 = vitri1 -200;
	var vitri2 = $('.isay').offset().top, vt2 = vitri2 -300;
	var vitri3 = $('.skill').offset().top, vt3 = vitri3 -200;
	var vitri4 = $('.school').offset().top, vt4 = vitri4 -200;
	var vitri5 = $('.sanpham').offset().top, vt5 = vitri5 -200;
	var vitri6 = $('.lienlac').offset().top, vt6 = vitri6 -200;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=200){
			if (trangthai == 1) {
				$('.thanhbar').addClass('biendang');
				trangthai = 2;
			}
		}else{
			if (trangthai == 2) {
				$('.thanhbar').removeClass('biendang');
				trangthai = 1;
			}
		}
		if ($(window).scrollTop() < vt2) {
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(1) a').addClass('hientai');
		}
		else
		if(($(window).scrollTop() > vt2) && ($(window).scrollTop() < vt3) ){
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(2) a').addClass('hientai');
		}
		else
		if(($(window).scrollTop() > vt3) && ($(window).scrollTop() < vt4) ){
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(3) a').addClass('hientai');
		}
		else
		if(($(window).scrollTop() > vt4) && ($(window).scrollTop() < vt5) ){
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(4) a').addClass('hientai');
		}
		else
		if(($(window).scrollTop() > vt5) && ($(window).scrollTop() < vt6) ){
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(5) a').addClass('hientai');
		}
		else
		if($(window).scrollTop() > vt6){
			$('.tab a').removeClass('hientai');
			$('.tab ul li:nth-child(6) a').addClass('hientai');
		}
			
	});
	//==========================================
	
	$('.tab ul li:nth-child(1)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri1}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(2)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri2 - 100}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(3)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri3 - 100}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(4)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri4 - 100}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(5)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri5 - 100}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(6)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri6 - 100}, 900,"easeInOutQuint");
	});
	
	//=============================================
	$('.tab a').click(function(event) {
		$('.tab a').removeClass('hientai');
		$(this).addClass('hientai');
	});
	//==========================================
	$('.sanpham .choose a').click(function(event) {
		$('.sanpham .choose a').removeClass('act');
		$(this).addClass('act');
		var ten=$(this).text();
		$('.sanpham .change h3').text(ten);
		var danhmuc=$(this).data('chon');
		console.log(danhmuc);
		$('.sanpham .sp .box').each(function() {
			if($(this).hasClass(danhmuc))
			{
				$(this).addClass('xuathien');
				$(this).removeClass('bienmat');

			}
			else
			{
				$(this).addClass('bienmat');
				$(this).removeClass('xuathien');
			}
		});
		return false;
	});

});