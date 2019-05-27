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
	var vitri2 = $('#vt2').offset().top, vt2 = vitri2 -200;
	var vitri3 = $('#vt3').offset().top, vt3 = vitri3 -200;
	var vitri4 = $('#vt4').offset().top, vt4 = vitri4 -200;
	var vitri5 = $('#vt5').offset().top, vt5 = vitri5 -200;
	var vitri6 = $('#vt6').offset().top, vt6 = vitri6 -300;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=200){
			if (trangthai == 1) {
				$('.thanhbar').addClass('biendang');
				trangthai = 2;
			}
		}
		else
		{
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
		$('body,html').animate({ scrollTop: vitri2}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(3)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri3}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(4)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri4}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(5)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri5}, 900,"easeInOutQuint");
	});
	$('.tab ul li:nth-child(6)').click(function(event) {
		$('body,html').animate({ scrollTop: vitri6}, 900,"easeInOutQuint");
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
				$(this).removeClass('bienmat');

			}
			else
			{
				$(this).addClass('bienmat');
			}
		});
		return false;
	});
	//===============================================
	var chay = 0;
	xoay = setInterval(function(){
		if(chay < 76){
			$('.kynang .chay1').text(chay +'%');
			$('.kynang .ngan1').css('width', chay +'%');
			$('.kynang .chay2').text(chay +'%');
			$('.kynang .ngan2').css('width', chay +'%');
			
			chay = chay + 1;
		}
		else{
			clearInterval(xoay);
		}
	},50);
	var chay2 = 0;
	xoay2 = setInterval(function(){
		if(chay2 < 61){
			$('.kynang .chay3').text(chay2 +'%');
			$('.kynang .ngan3').css('width', chay2 +'%');
			chay2++;
		}
		else{
			clearInterval(xoay2);
		}
	},40);
	var chay3 = 0;
	xoay3 = setInterval(function(){
		if(chay3 < 71){
			$('.kynang .chay4').text(chay3 +'%');
			$('.kynang .ngan4').css('width', chay3 +'%');
			chay3++;
		}
		else{
			clearInterval(xoay3);
		}
	},40);
	

});