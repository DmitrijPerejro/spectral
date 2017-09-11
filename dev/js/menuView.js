$( document ).ready(function() {
	$('.navigation__toggle').on('click', function () {
    	$('.navigation').addClass('navigation--show');
    	$('.page-wrapper').addClass('blur');
	});

	$('.navigation__toggle--close').on('click', function () {
		$('.navigation').removeClass('navigation--show');
		$('.page-wrapper').removeClass('blur');
	})
});