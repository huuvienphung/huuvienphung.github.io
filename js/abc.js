$(function() {
	var trangthai = 1;
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=200){
			if (trangthai == 1) {
				$('.nav').addClass('thugon');
				$('.nutlen').addClass('hiennao');
				trangthai = 2;
			}
		}else{
			if (trangthai == 2) {
				$('.nav').removeClass('thugon');
				$('.nutlen').removeClass('hiennao');
				trangthai = 1;
			}
		}
		
	});
	$('.bars a').click(function(event) {
		$('.bars a').toggleClass('show');
		$('.menu').toggleClass('quatrai');
		$('.anhden').toggleClass('quatrai');
	});
	$('.anhden').click(function(event) {
		$(this).removeClass('quatrai');
		$('.bars a').removeClass('show');
		$('.menu').removeClass('quatrai');
	});
	$('.hemenu > li a[href="#"]').click(function(event) {
		/* Act on the event */
		if($(this).attr('class')!='active'){   /*cái thẻ a lấy ra class nếu không phải là active*/
			var theparent=$(this).closest('ul');   /*gán theparent cho thành phần ul(themenu)cha gần nhất được chọn.*/ 			
			theparent.find('ul').slideUp(); /*tìm đến tất cả ul cháu của ul ông nội*/
			theparent.find('a').removeClass('active');/*tìm đến tất cả a là cháu của ul ông nội*/
			$(this).next().slideDown();  /*cái được click anh em kế bên sẽ slide mở ra*/
			$(this).toggleClass('active');	/*cái được click sẽ thay đổi giao diện 2 chiều với class active*/
		}/*else {
			$(this).next().slideUp();
			$(this).removeClass('active');
		}*/
		return false;
	});
	// ====================================================
	$('.banner-slider').slick({
		infinitive: true,
		dots:true,
		appendDots:$('.nav-dots'),
		prevArrow:$('.banner-box .prev-btn'),
		nextArrow:$('.banner-box .next-btn'),
		slidesToShow:1,
		slideToScroll:1,
		autoplay: true,
		autoplaySpeed: 3000,
	})
	// ==========================================================
	$('.four-nut li').click(function(event) {
		/* Act on the event */
		$('.four-nut li').removeClass('active')
		$(this).addClass('active')

		var x=$(this).index();
		x=x+1;
		console.log('day la phan tu so'+x); /*index la ham tinh thu tu phan tu*/

		$('.four-nd ul li').removeClass('hienlen')
		$('.four-nd ul li:nth-child('+x+')').addClass('hienlen');
		TweenMax.staggerFrom($('.four-nd ul li:nth-child('+x+') .khoi'),0.3,{left:200,opacity:0},0.1);
	});
	$('.bxh ._2bxh li').click(function(event) {
		/* Act on the event */
		$('.bxh ._2bxh li').removeClass('add')
		$(this).addClass('add');

		var y=$(this).index();
		y=y+1;
		$('._8bxh > ul > li').removeClass('addd');
		$('._8bxh > ul > li:nth-child('+y+')').addClass('addd');
	});
	// =============================================================================================
	
	$('.nutlen .fa-angle-up').click(function(event) {
		$('html,body').animate ({scrollTop: 0}, 900,"easeInOutQuint");
	});
	
});
	
