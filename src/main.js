let texto = prompt("Ingresa una palabra");
let acumulador="";

while(texto!="esc"){
    alert(texto);

    acumulador +=texto + " ";

    texto=prompt("Ingresa otra palabra");
}


alert(acumulador);
document.write(acumulador);