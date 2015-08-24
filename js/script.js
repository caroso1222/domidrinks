$(function(){
	$('.panel-terminar-pedido').click(function(){
		$('html,body').animate({
          scrollTop: 1000
        }, 1000);
	});
});

$(function(){
	$('.btn-empezar').click(function(){
		$('html,body').animate({
          scrollTop: 700
        }, 1000);
	});
});

function validarDatosEnvio(){
	var nadaVacio = true
	if (!$.trim($('#input-nombre').val())){
		nadaVacio = false;
	}
	if (!$.trim($('#input-celular').val())){
		nadaVacio = false;
	}
	if (!$.trim($('#input-direccion').val())){
		nadaVacio = false;
	}
	if(!$('#input-edad').is(":checked")){
		nadaVacio = false;
	}
	if(!nadaVacio){
		alert('Debe completar todos los campos');
	}
	return nadaVacio;
}