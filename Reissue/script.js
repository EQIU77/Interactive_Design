$(document).ready(function(){
	$('body').delay(6000).animate({
		'scrollTop':$('.endingword').offset().top
	},5000);
	$('.back').hide().delay(10000).fadeIn('slow');
	});