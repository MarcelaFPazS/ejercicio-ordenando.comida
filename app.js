var contador = 0

alert("BIENVENIDO A RATATOUILLE ");

// Función para saber nombre y alerta
do {
   var name = prompt("¿Cuál es tu nombre?");
} while (name.length == 0 );
  document.write( " Hola " +name)


// Condicionantes comienzo juego
var availabletrivia = [
"SI" ,
"NO",
];
var trivia = prompt("¿DESEAS VER NUESTRO MENÚ?/Recuerda que todas las preguntas deben ser respondidas en mayúscula");
if(availabletrivia.indexOf(trivia) >0){
  document.write(" Hasta la próxima")

} else {
alert("Ceviche", "Tacaos al pastor ","Empanada Chilena", "hamburguesa")
}



//Pregunta 1
var questionOne = prompt("¿Desea ceviche?");

if (questionOne == "SI") {
  alert("Lo sentimos, éste plato ya está ocupado");
  contador++;
}
else {
  alert("Aún nos quedan otros, platos!");
}
//Pregunta 2
var questionTwo = prompt("Desea Tacos al pastor?");

if (questionTwo == "SI") {
  alert("Plato agotadao, aun nos queda empanadas(1) y hamburguesas(10)");
  contador++;
}
else {
  alert("Nos quedan 2 menus mas");
}

//Pregunta 3
var questionThree = prompt("¿Desea empanada Chilena?");

if (questionThree == "SI") {
  alert("Aacabamos de vender la última, pero tenemos disponible hamburguesas");
    contador++;
}
else {
  alert("Nos quedan HAMBURGUESAS (10)");
}

//Pregunta 4
var questionFour = prompt("¿Deseas HAMBURGUESAS");

if (questionFour == "SI") {
  alert(" MUY BIEN, TU PEDIDO QUEDO AGENDADO, VEN A RETIRARLO DENTRO DE 20 MIN; Avenida Siempreviva 742");
    contador++;
}
else {
  alert("Hasta la próxima");
}


