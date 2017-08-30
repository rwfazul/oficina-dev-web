$(function() {

	$("#slide img:eq(0)").addClass("active").show(); // primeiro filho
	var texto = $(".active").attr("alt");
	$("#slide").prepend("<p>" + texto + "</p>"); // add conteudo ao primeiro filho
	setInterval(slide, 5000); // chama funcao a cada 5seg

	function slide() {
		if ( $(".active").next().length ) { // existe outra
			$(".active")
				.fadeOut("slow")
				.removeClass("active")
				.next() // prox
					.fadeIn("slow")
					.addClass("active");
		} else {
			$(".active").fadeOut("slow").removeClass("active");
			$("#slide img:eq(0)").fadeIn("slow").addClass("active");
		}

		var texto = $(".active").attr("alt");
		$("#slide p").hide().html(texto).delay(500).show("slow"); // ou fadeIn
	}

});