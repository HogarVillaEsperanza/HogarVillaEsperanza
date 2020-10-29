$(document).ready(function() {

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		}else{
			$('header').removeClass('header2');
		}
	});
});

$ (document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body,html').animate({
			scrollTop:'0px'
		});
	});
	$(window).scroll(function() {
		if($(this).scrollTop()>0){
			$('.ir-arriba').slideDown(500);
		}else{
			$('.ir-arriba').slideUp(500);
		}
	});

});

$ (document).ready(function(){
	$('.ir').click(function(){
		$('body,html').animate({
			scrollTop:'0px'
		});
	});
});