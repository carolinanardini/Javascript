
let carrito=[];

if(localStorage.getItem("carrito")==null){
    carrito = [];
}else{
    const carritoStorage=JSON.parse(localStorage.getItem("carrito"));
    carrito = carritoStorage;
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;
//  VER COMO SUMAR LA CANTIDAD TOTAL DE PRODUCTOS AL CARRITO, NO SOLO UNO POR PRODUCTO