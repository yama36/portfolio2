jQuery(window).on('scroll', function() {
	if ( 1 < jQuery( this ).scrollTop() ) {
		jQuery('.header-container').addClass('scroll');

	} else {
		jQuery('.header-container').removeClass('scroll');
	}
});
