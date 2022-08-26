console.log("Página cargada");

function click_editar(){
    alert("Editando perfil");
    //Seleccionar un elemento en específico para cambiarlo
    var elemento_p = document.querySelector('#descripcion'); //Seleccionado aquel elemento que tiene ID descripcion
    console.log(elemento_p);
    elemento_p.innerText = "Desarrolladora, empoderada, creativa y muy divertida";

    //Quiero modificar la imagen de perfil
    var imagen_perfil = document.querySelector('.card-header img'); //.imagen-usuario
    imagen_perfil.src = 'images/cynthia.jpg'; //Nueva ruta de imagen

    //Quiero agregar una clase a mi h1 (Elena de Troya)
    var nombre = document.querySelector('h1'); //Seleccionamos la etiqueta h1
    nombre.classList.add('purple');
}

var doble_click = 0;
function dobleclick_avatar() {
    doble_click++;
    console.log("Ha hecho doble click: "+doble_click+" veces");
}

function over(){
    console.log("El mouse está sobre Elena");
    var nombre = document.querySelector('h1'); //Seleccionamos la etiqueta h1
    nombre.style.backgroundColor = "red";//background-color: red;
}

function out() {
    console.log("El mouse está fuera de Elena");
    var nombre = document.querySelector('h1'); //Seleccionamos la etiqueta h1
    nombre.style.backgroundColor = "white";
}

function cambieNombre(elemento_h1) { //Recibimos el elemento_h1 = this
    console.log(elemento_h1); //La etiqueta la tratamos como objeto

    if(elemento_h1.innerText === "Elena de Troya") {
        elemento_h1.innerText = "Juana de Arco";
    } else {
        elemento_h1.innerText = "Elena de Troya"
    }

    //elemento_h1.innerText = "Juana de Arco"; //objeto tiene una propiedad innerText
} 

function cambiaImagen(elemento_img) {
    //elemento_img.src = "images/gear.png";
    console.log(elemento_img.src); //Nos da la ruta completa
    if(elemento_img.src.includes('images/map-marker.png')) {
        elemento_img.src = "images/gear.png";
    } else {
        elemento_img.src = "images/map-marker.png";
    }

    var locacion = document.querySelector('h3');
    locacion.style.textDecoration = "underline";//text-decoration: underline;

}

function elimine(elemento_p){ //Recibimos el párrafo en variable elemento_p
    elemento_p.remove(); //Elimina el elemento al que estamos haciendo doble click
}

function cambioInput() {
    console.log("Hubo un cambio");
    var input = document.querySelector('#nombre'); //Seleccionando el elemento que tiene como id nombre
    console.log(input.value); //Es el valor que el usuario ingresó

    var elemento_h1 = document.querySelector('h1'); //Seleccionando la etiqueta h1
    elemento_h1.innerText = input.value;
}