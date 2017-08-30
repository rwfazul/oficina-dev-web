$(function() {
	// nao volta se ja tiver aberto
	$(".titulo").on("click", function() {
		var conteudo = $( this ).parent().find(".conteudo");
		if ( !conteudo.hasClass("show") ) {
			$(".caixa").find(".show").slideUp("fast", function() {
				$( this ).addClass("hide").removeClass("show");
			});
			conteudo.slideDown("fast", function() {
				$( this ).addClass("show").removeClass("hide");
			});
		}	
	});

	$(".titulo2").on("click", function() {
		var conteudo = $( this ).parent().find(".conteudo2");
		if ( !conteudo.hasClass("show2") ) {
			$(".caixa2").find(".show2").slideUp("fast", function() {
				$( this ).addClass("hide2").removeClass("show2");
			});
			conteudo.slideDown("fast", function() {
				$( this ).addClass("show2").removeClass("hide2");
			});
		} else { 	// volta se ja tiver aberto
			conteudo.slideUp("fast", function() {
				$( this ).addClass("hide2").removeClass("show2");
			});
		}
	});

	$(".titulo3").on("click", function() {
		var conteudo = $( this ).parent().find(".conteudo3");
		if ( !conteudo.hasClass("show3") ) {
			$(".caixa3").find(".show3").slideUp("fast", function() {
				$( this ).addClass("hide3").removeClass("show3");
			});
			conteudo.slideDown("fast", function() {
				$( this ).addClass("show3").removeClass("hide3");
			});
		} else {
			conteudo.slideUp("fast", function() {
				$( this ).addClass("hide3").removeClass("show3");
			});
		}
	});

});
