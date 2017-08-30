$(function() {
	/* The focusin event is sent to an element when it, or any element inside of it, gains focus. 
	This is distinct from the focus event, in that it supports detecting the focus event on parent
	elements (in other words, it supports event bubbling). */
	var ex = $("#ex1");
	$(".ev1").focus(function() {
		ex.text($( this ).attr("title"));
	}).keyup(function() {
		if ($( this ).val().search(".com") > -1)
			$(".ev2").focus();
	});

	// focusout para form
	/* $(".ev1").blur(function() {
		ex.text("Saida do campo: " + $(this).attr("name"));
	}); */

	// validou um campo (ex: so numeros), user vem de novo e modifica... change
	$(".ev1").change(function() {
		ex.text("Campo " + this.name + " modificado: " + $(this).val());
	});

	$(".selecionar").on("click", function() {
		var text = $(".ev3").select();
		$("form").submit(function() { // nao envia form ao clicar
			return false;
		});
		ex.text(text.val());
	});

	// placeholders
	$(".place").each(function() {
		var input = $( this );
		var place = $( this ).attr("title");
		input
			.val(place)
			.css("color", "#CCC")
			.focusin(function() {
				input.css("color", "#000");
				if (input.val() == place) {
					input.val("");
				}
			}).focusout(function() {
				if (input.val() == "") {
					input.css("color", "#CCC");
					input.val(place);
				}
			});
	});

});