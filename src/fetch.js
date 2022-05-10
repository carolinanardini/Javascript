
const generarHTML=(arrayARecorrer)=>{
    let acumulador=``;
    arrayARecorrer.forEach(elemento => {
        acumulador+=`
        <div>
        <h4>${elemento.casa.nombre}</h4>
        <h5>"Compra: "${elemento.casa.compra}</h5>
        <h5>"Venta: "${elemento.casa.venta}</h5>
        
        <br>
        </div>`;
    })
    document.getElementById('contenido').innerHTML=acumulador;
}

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then( (response)=>response.json())
.then((data)=> generarHTML(data)) 

















// {
//     "productitos": [
//     {"id":1,"titulo":"Barra de cereal con frutos rojos", "categoria": "Barras de cereal", "precio":"200", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vYOc76x5zdUr40ug65HN9jN4b80Ztt0GXZzNrrf9Q9cVULcSA8TFTH6yOcfvYTniTjI&usqp=CAU", "stock": "1", "preciodescuento":"150", "cantidad":"0"},
//     {"id":2,"titulo":"Barra de cereal con chocolate", "categoria": "Barras de cereal", "precio":"200", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9xgaV1QL6-SF9JqsR9yYMMtJ75giGvgKcA&usqp=CAU", "stock":"3", "preciodescuento":"150", "cantidad":"0"},
//     {"id":3,"titulo":"Bolsa de granola con chocolate", "categoria": "Granola", "precio":"575", "imagen": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/01/granolachocolate.jpg", "stock":"0", "preciodescuento":"500", "cantidad":"0"},
//     {"id":4,"titulo":"Bolsa de granola con frutos rojos", "categoria": "Granola", "precio":"575", "imagen": "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-cranberry-granola.jpg", "stock":"10", "preciodescuento":"500", "cantidad":"0"},
//     {"id":5,"titulo":"Caja de barras de cereal con chocolate x12", "categoria": "Barras de cereal", "precio":"2000", "imagen": "https://i.pinimg.com/originals/17/2b/7a/172b7a668ab53cd5fbea48f60e6e151c.png", "stock":"5", "preciodescuento":"1750", "cantidad":"0"},
//     {"id":6,"titulo":"Caja de barras de cereal con frutos rojos x12", "categoria": "Barras de cereal", "precio":"2000", "imagen": "https://i.pinimg.com/originals/17/2b/7a/172b7a668ab53cd5fbea48f60e6e151c.png", "stock":"1", "preciodescuento":"1750", "cantidad":"0"}
// ]
// }