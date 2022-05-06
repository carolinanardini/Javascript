const generarHTML=(arrayARecorrer)=>{
    let acumulador=``;
    arrayARecorrer.forEach(elemento => {
        acumulador+=`
        <div>
        <h2>${elemento.titulo}</h2>
        <button>Ver más</button>
        </div>`;
    })
    document.getElementById(`contenido`).innerHTML=acumulador;
}

fetch("/data.json")
.then( (response)=>response.json())
.then((data)=> generarHTML(data.productitos))  