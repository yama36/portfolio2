jQuery(window).on('scroll', function() {
	if ( 1 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
		jQuery('.header-container').addClass('scroll');
		
	} else {
		jQuery('.header-container').removeClass('scroll');
	}
});
