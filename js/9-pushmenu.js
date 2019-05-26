$(function() {
	//================xem ảnh theo hiệu ứng fancybox==================
	$('.slide a').fancybox();
	$('.image a').fancybox();
	// ================ phần menu trái==================
	$('.menu').click(function(event) {
		/* Act on the event */
		$('.menutrai').toggleClass('them');
		$('.opacityblack').toggleClass('themnua');
		$('.khoi1, .khoi2, .khoi3').toggleClass('cheo');
	});
	$('.opacityblack').click(function(event) {
		/* Act on the event */
		$('.menutrai').removeClass('them');
		$('.opacityblack').removeClass('themnua');
		$('.khoi1, .khoi2, .khoi3').removeClass('cheo');
	});
	// =================phần bảng đăng nhập==============
	$('.login').click(function(event) {
		/* Act on the event */
		$('.tablelogin').addClass('bangdangnhap');
		$('.opacityblacksmall').addClass('smallblack');
	});
	$('.close, .opacityblacksmall').click(function(event) {
		/* Act on the event */
		$('.tablelogin').removeClass('bangdangnhap');
		$('.tablemarket').removeClass('bangtui');
		$('.tablebuy').removeClass('bangmua');
		$('.opacityblacksmall').removeClass('smallblack');
	});
	//=============phần thông báo giỏ hàng==============
	$('.market').click(function(event) {
		/* Act on the event */
		$('.tablemarket').addClass('bangtui');
		$('.opacityblacksmall').addClass('smallblack');
	});
	//=============phần thông báo buy==============
	$('.buy').click(function(event) {
		/* Act on the event */
		$('.tablebuy').addClass('bangmua');
		$('.opacityblacksmall').addClass('smallblack');
	});
	// =================phần thông báo logo================
	$('.logo2').addClass('xuathien');
	$('.opacityblackbig').addClass('addlogo');
	$('.thanhloadtop').addClass('chay');
	$('.opacityblackbig').click(function(event) {
		/* Act on the event */
		$('.logo2').removeClass('xuathien');
		$('.opacityblackbig').removeClass('addlogo');
		$('.thanhloadtop').removeClass('chay');
	});
	modau=setInterval(function(){
		$('.logo2').removeClass('xuathien');
		$('.opacityblackbig').removeClass('addlogo');
		$('.thanhloadtop').removeClass('chay');
		clearInterval(modau);
	},3000)

	//=============phần chạy slide backgroud==============
	thoigian=setInterval(function(){

		var vitri=$('.xanh').index()+1;
		$('.nutslide ul li').removeClass('xanh');
		if(vitri==$('.nutslide ul li').length)
		{
			vitri=0;
		}
		$('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');

		var sau=$('.action').next();

		if(sau.length==0){
			$('.action').addClass('hidden-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-left').removeClass('hidden-left');
			});
			$('.anhslide .slide:nth-child(1)').addClass('appear-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-right').addClass('action').removeClass('appear-right');
			});
		}
		else{
			$('.action').addClass('hidden-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-left').removeClass('hidden-left');
			});
			sau.addClass('appear-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-right').addClass('action').removeClass('appear-right');
			});

		}
	},2500);

	$('.next').click(function(event) {
		/* Act on the event */
		var vitri=$('.xanh').index()+1;
		$('.nutslide ul li').removeClass('xanh');
		if(vitri==$('.nutslide ul li').length)
		{
			vitri=0;
		}
		$('.nutslide ul li:nth-child('+(vitri+1)+')').addClass('xanh');

		clearInterval(thoigian);

		var sau=$('.action').next();

		if(sau.length==0){
			$('.action').addClass('hidden-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-left').removeClass('hidden-left');
			});
			$('.anhslide .slide:nth-child(1)').addClass('appear-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-right').addClass('action').removeClass('appear-right');
			});
		}
		else{
			$('.action').addClass('hidden-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-left').removeClass('hidden-left');
			});
			sau.addClass('appear-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-right').addClass('action').removeClass('appear-right');
			});

		}
	});

		$('.prev').click(function(event) {
		/* Act on the event */
		var vitri=$('.xanh').index()+1;
		$('.nutslide ul li').removeClass('xanh');
		if(vitri==1)
		{
			vitri=$('.nutslide ul li').length+1;
		}
		$('.nutslide ul li:nth-child('+(vitri-1)+')').addClass('xanh');

		clearInterval(thoigian);

		var truoc=$('.action').prev();

		if(truoc.length==0){
			$('.action').addClass('hidden-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-right').removeClass('hidden-right');
			});
			$('.anhslide .slide:last-child').addClass('appear-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-left').addClass('action').removeClass('appear-left');
			});
		}
		else{

			$('.action').addClass('hidden-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.hidden-right').removeClass('hidden-right');
			});
			truoc.addClass('appear-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
				$('.action').removeClass('action');
				$('.appear-left').addClass('action').removeClass('appear-left');
			});

		}

	});
	$('.nutslide ul li').click(function(event) {
		/* Act on the event */
		clearInterval(thoigian);
		$('.nutslide ul li').removeClass('xanh');
		$(this).addClass('xanh');
		$('.action').addClass('hidden-left').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.hidden-left').removeClass('hidden-left');
		});
		$('.anhslide .slide:nth-child('+($(this).index()+1)+')').addClass('appear-right').one('webkitAnimationEnd', function(event) {
			/* Act on the event */
			$('.action').removeClass('action');
			$('.appear-right').addClass('action').removeClass('appear-right');
		});
	});
	// hàm chuyển động của 4 nút

	TweenMax.staggerFrom($('.nutto1, .nutto3'),0.7,{left:200,opacity:0},0.7);
	TweenMax.staggerFrom($('.nutto2, .nutto4'),0.7,{left:200,opacity:0},0.7);

	xoay=setInterval(function(){
		$('.chuto, .gradient').addClass('xoay').one('webkitAnimationEnd', function(event) {
			$('.chuto, .gradient').removeClass('xoay');
			/* Act on the event */
		});
	},3000);

	//============đây là nút mở phần nội dung- cùng với hàm chuyển động============
	$('.ndmotkhoi1').slideUp();
	$('.ndmotkhoi2').slideUp();
	$('.ndmotkhoi3').slideUp();
	$('.ndmotkhoi4').slideUp();
	$('.tdmotkhoi1, .nutto1').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi1').slideToggle(200);
		$('.load').slideUp(200);
		$('.ndmotkhoi1').removeClass('dai');
		TweenMax.staggerFrom($('.ndmotkhoi1 .khoi'),0.4,{left:200,opacity:0},0.1);
		$('body,html').animate({ scrollTop: $('.tdmotkhoi1').offset().top-75}, 900,"easeInOutQuint");
	});
	$('.tdmotkhoi2, .nutto2').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi2').slideToggle(200);
		TweenMax.staggerFrom($('.ndmotkhoi2 .khoi'),0.4,{left:200,opacity:0},0.1);
		$('body,html').animate({ scrollTop: $('.tdmotkhoi2').offset().top-75}, 900,"easeInOutQuint");
	});
	$('.tdmotkhoi3, .nutto3').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi3').slideToggle(200);
		TweenMax.staggerFrom($('.ndmotkhoi3 .khoi'),0.4,{left:200,opacity:0},0.1);
		$('body,html').animate({ scrollTop: $('.tdmotkhoi3').offset().top-75}, 900,"easeInOutQuint");
	});
	$('.tdmotkhoi4, .nutto4').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi4').slideToggle(200);
		TweenMax.staggerFrom($('.ndmotkhoi4 .khoi'),0.4,{left:200,opacity:0},0.1);
		$('body,html').animate({ scrollTop: $('.tdmotkhoi4').offset().top-75}, 900,"easeInOutQuint");
	});
	//load thêm
	$('.load').slideUp();
	$('.nutload').click(function(event) {
		/* Act on the event */
		$('.ndmotkhoi1').toggleClass('dai');
		$('.load').slideToggle(200);
		$('body,html').animate({ scrollTop: $('.load').offset().top-75}, 900,"easeInOutQuint");
		TweenMax.staggerFrom($('.load .khoi'),0.4,{left:200,opacity:0},0.1);
	});
	//===============phần làm chuyển động lên top=========================
	$('.dilen').click(function(event) {
		/* Act on the event */
		$('body,html').animate({scrollTop:0}, 900,"easeInOutQuint");
	});
	
	
});
