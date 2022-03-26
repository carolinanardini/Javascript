// DESAFIO 1
// let texto = prompt("Ingresa una palabra");
// let acumulador="";

// while(texto!="esc"){
//     alert(texto);

//     acumulador +=texto + " ";

//     texto=prompt("Ingresa otra palabra");
// }


// alert(acumulador);
// document.write(acumulador);



function validarStock(stockProducto,cantidadPedida){
    if(stockProducto>cantidadPedida){
        console.log("Hay stock");
    }
    else{
       console.log("No hay stock");
    }
}


function valorTotal(valorProducto1, valorProducto2){
    let resultado = valorProducto1+valorProducto2;
    console.log(resultado)
}


const carrito=[];


const producto= new product("botas", 700,"zapatos");
const producto2= new product("vestido", 500,"ropa");
const producto3= new product("remera", 200,"ropa");


function product (titulo,precio,categoria){
    this.titulo=titulo;
    this.precio=precio;
    this.categoria=categoria;
}

function agregarAlCarrito(elemento){
    const textoAMostrar = "Agregas al carrito " + elemento.titulo + " a $ " + elemento.precio;
    carrito.push(elemento);
    console.log(textoAMostrar);
    console.log(carrito);
}

function eliminarDelCarrito(elemento){
    const textoAMostrar2 = "Eliminaste del carrito " + elemento.titulo ;
    const indice= carrito.indexOf(elemento);
    carrito.splice(indice,1);
    console.log(textoAMostrar2);
    console.log(carrito);
}




const productos=[
    {id:1,titulo:"Barra de cereal con chocolate", categoria: "Barras de cereal", precio:200},
    {id:2,titulo:"Barra de cereal con frutos rojos", categoria: "Barras de cereal", precio:200},
    {id:3,titulo:"Bolsa de granola con chocolate", categoria: "Granola", precio:575},
    {id:4,titulo:"Bolsa de granola con frutos rojos", categoria: "Granola", precio:575},
    {id:5,titulo:"Caja de barras de cereal con chocolate x12", categoria: "Barras de cereal", precio:2000},
    {id:6,titulo:"Caja de barras de cereal con frutos rojos x12", categoria: "Barras de cereal", precio:2000},
]


// PARA FILTRAR
let valorFiltrado = prompt("Filtrar productos con precio mayor a (Ingresar numero)")
const productosDeMayorPrecio = productos.filter((producto) => producto.precio>valorFiltrado);
console.log(productosDeMayorPrecio);


// PARA USAR COMO BUSCADOR
const valorDelBuscador ="Barra de cereal con chocolate"
const productoEncontrado = productos.find(
(producto) => producto.titulo.toUpperCase().trim() === valorDelBuscador.toUpperCase().trim());
console.log(productoEncontrado);
   

// Acceder a los nodos
let listadoProductos = document.getElementsByClassName("listadoProductos");

for (const prod of listadoProductos){
    console.log (prod.innerHTML);
}


// Creando elementos desde objetos
for (const item of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`<h3>  Producto: ${item.titulo}</h3>
    <p>  ID: ${item.id}  </p>
    <b>  Precio: $ ${item.precio}</b>`

    document.body.appendChild(contenedor);
}
