// selecionar nuestra carpeta
var titulo1 = document.querySelector("h1")

console.log(titulo1)

//Registrar el evento al elemento
titulo1.addEventListener("click",function(){
    open("https://www.google.com")
})

/*seleccionar el elementos */
var parrafoMostrar =document.querySelector("#mostrar")
var divContenido =document.querySelector("#contenido")

// Registrar el evento al elemento
parrafoMostrar.addEventListener("click", function(){
    //  divContenido.style.display = "none";
    alert("hola");

var nombre=prompt("digitre su nombre");
// document.write(`<p>${nombre}</p>`);
divContenido.textContent = nombre;

})