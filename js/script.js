console.log("Página cargada");

function click_editar(){
    alert("Editando perfil");
}

var doble_click = 0;
function dobleclick_avatar() {
    doble_click++;
    console.log("Ha hecho doble click: "+doble_click+" veces");
}

function over(){
    console.log("El mouse está sobre Elena");
}

function out() {
    console.log("El mouse está fuera de Elena");
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
}

function elimine(elemento_p){ //Recibimos el párrafo en variable elemento_p
    elemento_p.remove(); //Elimina el elemento al que estamos haciendo doble click
}