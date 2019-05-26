$(function() {
	hieuungload=new TimelineMax({onComplete:noidungvaodi});

	hieuungload
	.from($('.anhload'),1,{opacity:0,ease: Power3.easeOut})
	.from($('.khoiload h1'),1,{x:-1000,opacity:0,ease: Power3.easeOut})
	.to($('.khoiload img'),1,{scale:1.6,ease: Elastic.easeOut.config(2.5, 0.3)},"+=0.2")
	.to($('.khoiload img'),1,{scale:0.5,ease: Elastic.easeOut.config(2.5, 0.3)},"+=0.2")
	.to($('.khoiload img'),1,{scale:7,opacity:0,ease: Power1.easeIn},"+=0.2")
	.to($('.khoiload h1'),0.2,{opacity:0,ease: Power1.easeIn},"+=0.2")
	.to($('.anhload'),1,{x:-1500,opacity:0,ease: Power3.easeOut})



	hieuungnoidung=new TimelineMax({paused:true});
	// hieuungnoidung=new TimelineMax();

	hieuungnoidung
	.from($('.container'),2,{x:-1500,opacity:0,ease: Bounce.easeOut})
	.from($('h1.tieude1'),1,{x:-300,opacity:0,ease: Bounce.easeOut},"+=0.1")
	.from($('p.noidung1'),1,{x:-300,opacity:0,ease: Bounce.easeOut},"+=0.1")

	function noidungvaodi()
	{
		hieuungnoidung.play();
	}

	$(window).scroll(function(event) {
		/* Act on the event */
		var vitri=$(window).scrollTop();
		if(vitri>=150){
			$('.fa-angle-up').addClass('addcuon');
			
		}
		else
		{
			$('.fa-angle-up').removeClass('addcuon');
		}
	});
	$('.fa-angle-up').click(function(event) {
		$('html,body').animate ({scrollTop: 0}, 900,"easeInOutQuint");
	});
	new WOW().init();
});
	
