$(function() {

	var ex = $(".ex1");

	$(".ev1").click(function() {
		ex.hide("slow"); // slow, fast, (tempo) ou nada (apenas some)
	});

	$(".ev2").click(function() {
		ex.show("slow");
	});

	$(".ev3").click(function() {
		ex.toggle("slow");
	});

	$(".ev4").keyup(function(ev) { //keypress
		if (ev.which == "13" || ev.keyCode == "13") { // enter
			var $texto = $( this ).val().toLowerCase();
			switch($texto) {
				case "hide": ex.hide("slow"); 
					break;
				case "show": ex.show("slow");
					break;
				case "toggle": ex.toggle("slow");
					break;
				default: ex.text("Inválido!");
			}
		}
	});

});