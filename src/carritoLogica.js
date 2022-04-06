
let carrito=[];

if(localStorage.getItem("carrito")==null){
    carrito = [];
}else{
    const carritoStorage=JSON.parse(localStorage.getItem("carrito"));
    carrito = carritoStorage;
}