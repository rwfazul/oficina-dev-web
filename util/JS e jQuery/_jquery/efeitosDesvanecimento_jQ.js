$(function() {

	var $ex1 = $(".ex1");
	var $ex2 = $(".ex2");
	var $button = $(":button"); // : -> pelo type

	/* $button.click(function() {
		$ex1.fadeOut("slow");
	}).dblclick(function() {
		$ex1.fadeIn("slow");
	}); */

	/* $button.click(function() {
		$ex1.toggle("slow");
	}); */

	/* $button.click(function() {
		$ex1.fadeTo("slow", 0.5); // 50% de visibilidade
	}); */

	/* $button.click(function() {
		$ex1.fadeToggle("slow"); // 50% de visibilidade
	}); */

	// ex. uso: modais, onde primeiro se abre o fundo dps a janela, etc
	$button.click(function() {
		$ex1.fadeTo("slow", 0.4, function() { // callback
			$ex2.fadeTo("slow", 0.1); // so dps que a primeira ja estivar desvanecida
		});
	});

});