$(function() {

	var $nav = $(".menu");
	var nav_pos_y = $nav.position().top;

	$(window).scroll(function() {
		// if ( $(this).scrollTop() > 173 ) 
		if ( $( this ).scrollTop() > nav_pos_y)
			$nav.addClass("menu-fixo");
		else
			$nav.removeClass("menu-fixo");
	});

});