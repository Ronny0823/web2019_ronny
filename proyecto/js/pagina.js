var nombre= document.querySelector("input#nombre");
var apllido =document.querySelector("input#apellido");
var  correo  = document.querySelector("input# correo");
var contrasena  =document.querySelector("input#contrasena nueva");
var div = document.querySelector("div#contenido");
var Regístrate = document.querySelector("button#Regístrate");


console.log(nombre);
console.log(apllido);
console.log( correo );
console.log(contrasena );



// Agragar el evento al boton
Regístrate.addEventListener("click", function(){
    div.textContent = `Gracias por regístrarte ${correo.value}`;
});

