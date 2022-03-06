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
        return true;
    }
    else{
       return false;
    }
}

function agregarAlCarrito(nombreProducto,precioProducto=0,stockProducto,cantidadPedida){
    const tieneStock=validarStock(stockProducto,cantidadPedida);

    if(tieneStock){
        console.log(`agregaste al carrito el ${nombreProducto} a $ ${precioProducto}`)
    }    
    else{
        console.log("No tenemos más producto");
    }

}

function valorTotal(valorProducto1, valorProducto2){
    let resultado = valorProducto1+valorProducto2;
    console.log(resultado)
}