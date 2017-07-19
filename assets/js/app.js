var api ={
	url:'http://laboratoria.cuadra.co:9339/api/v1/students/'
}

var cargarPagina= function(){
  mostrarAlumnas();
}

var mostrarAlumnas = function(data){
	$.getJSON(api.url,function(response){
		response.forEach();
		console.log(response);
		});
	}









$(document).ready(cargarPagina);