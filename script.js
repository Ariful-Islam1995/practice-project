$(document).ready(function(){
	
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 20) {
				$('.menu-area').addClass('fixed-header');
			}
			else {
				$('.menu-area').removeClass('fixed-header');
			}
		});
})