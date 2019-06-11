var nombre= document.querySelector("input#nombre");
var apllido =document.querySelector("input#apellido");
var tudirecion de correo electronico = document.querySelector("input#tudirecion de correo electronico");
var contrasena nueva =document.querySelector("input#contrasena nueva");
var div = document.querySelector("div#contenido");
var Regístrate = document.querySelector("button#Regístrate");

console.log(nombre);
console.log(apllido);
console.log(tudirecion de correo electronico);
console.log(contrasena nueva);



// Agragar el evento al boton
Regístrate.addEventListener("click", function(){
    div.textContent = `Gracias por regístrarte ${correo.value}`;
});