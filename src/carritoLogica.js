
let carrito=[];

if(localStorage.getItem("carrito")==null){
    carrito = [];
}else{
    const carritoStorage=JSON.parse(localStorage.getItem("carrito"));
    carrito = carritoStorage;
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;
//  VER COMO SUMAR LA CANTIDAD TOTAL DE PRODUCTOS AL CARRITO, NO SOLO UNO POR PRODUCTO


const eliminarDelCarrito = (idProducto) => {

    // Buscando el producto a eliminar
        const productoEliminado = productos.find(producto => producto.id === idProducto);
       
    //  Actualizando el storage del carrito  
        var nuevoCarrito=carrito.filter((item) => item.id !== productoEliminado);
    
        localStorage.setItem("carrito", JSON.stringify(carrito));
    
    // Actualizando el html
        document.getElementById("cantidad-prod").innerHTML=carrito.length;
    
    
    // Actualizar stock
        productoEliminado.stock++;
    
        
        generarCarrito(nuevoCarrito);
    };

generarCarrito();
function generarCarrito(){
    const carrito=JSON.parse(localStorage.getItem("carrito")) || [ ];

    let acumuladorDeCarrito = ``;
    carrito.forEach((elemento) => {
        acumuladorDeCarrito += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${elemento.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elemento.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$${elemento.precio}</span>
                    $${elemento.preciodescuento}
                </div>              
            </div>
            <div class="cantidadDeItems">
            <input type="number" value="1" min="1" id="cantidad-${elemento.id}" placeholder="cantidad">
            </div>
           <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button onclick="eliminarDelCarrito(${elemento.id})" class="btn btn-outline-dark mt-auto" href="#">
                    Eliminar del carrito
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCarritoEnElHTML(acumuladorDeCarrito);

}

function mostrarCarritoEnElHTML(cards) {
    document.getElementById("listado-carrito").innerHTML = cards;
};



    
    