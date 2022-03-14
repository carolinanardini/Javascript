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
