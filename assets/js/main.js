//constructor del squad

function MiembroSquad(nombre,apellido,edad,id,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.id = id;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
	this.foto = "<img src='assets/imgs/avataressquad-0" + this.id + "_360.png'>";
	this.caja = "<input type='text' id='boton" + this.id + "'>"; //aca se ingresa el comentario
	this.boton = "<button id='" + this.id + "' onclick='" /*+ test()*/ + "'>Dejar Comentario</button>"; //boton dejar comentario
}

// <textarea name="comment" rows=5 cols=40></textarea>

function Comentario(id_miembro,comentario){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	var contador=0;
	this.likes = function sumar(){ 
		contador++;
		return contador;
	};
	this.botonLike = "<button onclick='" + this.likes() + "'></button>";
}

var lista = new Array(9);
lista[0] = new MiembroSquad("Camila","Sáez",24,"1","Ver pinterest","Viajar","Ser darks");
lista[1] = new MiembroSquad("Antonia","Cerda",23,"2","Diseñar","Ver series","Lettering");
lista[2] = new MiembroSquad("Carolina","Tapia",27,"3","Trekking","Leer","Tejer");
lista[3] = new MiembroSquad("María José","Rodriguez",32,"4","Ver series","Bailar","Leer");
lista[4] = new MiembroSquad("María José","Pozo",31,"5","Bailar","Comer","Dormir");
lista[5] = new MiembroSquad("Francisca","Ojeda",28,"6","Roller derby", "Lettering", "Juegos de mesa");
lista[6] = new MiembroSquad("Valentina","Saavedra",26,"7","Medicina autogestiva","Hacer magias","Hacerse tatuajes");
lista[7] = new MiembroSquad("Marion","Castillo",29,"8","Caminar","Hacer series","Pintar");
lista[8] = new MiembroSquad("Belén","Recabal",27,"9","Andar en bici","Ver series","Bullying");

lista.forEach(function(element){
	var miembros = document.getElementById("miembro" + lista.indexOf(element).toString());
	miembros.innerHTML = (element.foto +"<br><b>Nombre: </b>" + element.nombre + "<br><b>Apellido: </b>" + element.apellido + 
	"<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies: </b>" + "<ul>" + "<li>" + element.hobbie1 + "</li>" + 
	"<li>" + element.hobbie2 + "</li>" + "<li>" + element.hobbie3 + "</li>" + "</ul>" + element.caja +
	 "<br>" + element.boton + "<br>");
});

var nuevoComentario = new Comentario(miembro,"asdfghjk");
console.log(nuevoComentario.comentario)
var space = document.createElement("div");
var coment = document.createTextNode(nuevoComentario.comentario);
space.appendChild(coment);

var miembro = document.getElementById("miembro0");
miembro.appendChild(space);
