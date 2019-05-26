$(function() {
	$('.bavach a').click(function(event) {
		$(this).toggleClass('change');
		$('.tab').toggleClass('xuathien');
		return false;
	});
	$('.thanhbar .tab').click(function(event) {
		$('.bavach a').removeClass('change');
		$(this).removeClass('xuathien');
	});
	var trangthai = 1;
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
		
	});
	$('.tab a').click(function(event) {
		$('.tab a').removeClass('hientai');
		$(this).addClass('hientai');
	});
});