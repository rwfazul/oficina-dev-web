$(function(){

	var ex = $(".ex1");

	$(".ev1").click(function() {
		$(this).css("background", "#CCC");
		ex.text("Você clicou");
	});

	$(".ev2").dblclick(function() {
		$(this).css("background", "#CCC");
		ex.text("Você deu dois cliques");
	});

	$(".ev3").focusin(function() {
		$(this).css("background", "#CCC");
		ex.text("Você deu foco");		
	}).focusout(function() {
		$(this).css("background", "#000");
		ex.text("Você tirou o foco");		
	});

	// $(selector).hover(handlerIn, handlerOut) 
	// shorthand for: $(selector).mouseenter(handlerIn).mouseleave(handlerOut);
	$(".ev4").hover(function() {
		$(this).css("background", "#CCC");
		ex.text("Você passou o mouse");	
	}, function() {
		$(this).css("background", "#000");
		ex.text("Você tirou o mouse");		
	});

	$(".ev5").mousedown(function() {
		$(this).css("background", "#CCC");
		ex.text("Você apertou o botão do mouse");	
	}).mouseup(function() {
		$(this).css("background", "#000");
		ex.text("Você soltou o botão do mouse");		
	});

	// enter e out: evento do elemento, os filhos nao herdam. Problema: se tivesse um span dentro
	// do paragrafo, quando passasse o mouse por cima do span ia considerar 'saida do mouse', porem
	// para voltar a contar entrada teria que tirar o mouse do paragrafo (inteiro) e por de novo, 
	// nao bastaria apenas tirar do span e voltar pro paragrafo (so executada 1 vez)
	var a = 0;
	$(".ev6").mouseenter(function() { 
		$(this).css("background", "#CCC");
		ex.text("Entradas do mouse: " + (++a) );		
	}).mouseout(function() {
		$(this).css("background", "#000");
		ex.text("Saida do mouse");	
	});

	var b = 0;
	$(".ev7").mouseover(function() { 
		$(this).css("background", "#CCC");
		ex.text("Entradas do mouse: " + (++b) );		
	}).mouseleave(function() {
		$(this).css("background", "#000");
		ex.text("Mouse leave");	
	});

	$(".ev8").mousemove(function(move) {
		var localx = move.pageX;
		var localy = move.pageY;
		ex.text("Movimento X: " + localx + " - Movimento Y: " + localy);	
	});

});