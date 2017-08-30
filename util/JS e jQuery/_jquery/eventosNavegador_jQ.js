$(function() {
	  /* $("img").on("error", function(){ // nao funciona .error tb n
        $(this).attr('src', '_img/error.png');
    }); */

    function imgSize(element) {
      // $("img").width($(window).width() * 0.8).height($(window).height() * 0.4);
      $("img").width(element.width() * 0.8).height(element.height() * 0.4); 
    }

    imgSize( $(window) );
   	$(window).resize(function() {
    	imgSize( $(this) );
    }); 

    /*  function imgSize(element) { // sem usar o seletor no argumento
      // $("img").width(window.innerWidth * 0.8).height(window.innerHeight * 0.4);
      $("img").width(element.innerWidth * 0.8).height(element.innerHeight * 0.4); 
    }

    imgSize( window );
    $(window).resize(function() {
      imgSize( this );
    }); */

   	$("body").css("height", "5000px");
    
   	$(window).scroll(function() {
   		var topo = $(this).scrollTop(); // $(this) (inves de this) para chamar jquery functions
   		if (topo > 100)
   			$("#nav").fadeOut(1000);
   		else
   			$("#nav").fadeIn(1000);
   	});

});

function defaultImage(img) {
    img.onerror = "";
    img.src = '_img/error.png';
   	var imagem = img.src;
   	console.log("imagem " + imagem + " indisponivel");
}

