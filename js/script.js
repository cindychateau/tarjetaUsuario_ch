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