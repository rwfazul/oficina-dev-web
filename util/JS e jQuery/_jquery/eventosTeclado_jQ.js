$(function() {

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

	var ex = $("#ex1");
	/* $(".key").keypress(function() { // 1 tecla de delay
		ex.text($(this).val());
	}); */

	/* $(".key").keydown(function() { // 1 tecla delay mas se aperta shift mostra
		ex.text($(this).val() + " (" + $(this).val().length + ")");
	}); */
	$(".key").keyup(function() {  // tempo real
		var tarea = $( this ).val();
		ex.text(tarea + " (" + tarea.length + ")");
	}).focusin(function() {
		var tarea = $( this ).val();
		if (tarea.length > 0)
			ex.text(tarea + " (" + tarea.length + ")");
	}).focusout(function() {
		ex.text("Aguardando ação")
	});	

});