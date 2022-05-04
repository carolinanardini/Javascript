const productoAVer = JSON.parse(localStorage.getItem("productoAVer"))
document.getElementById("cardContainer").innerHTML = `
<div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${productoAVer.imagen}" alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1">SKU: BST-498</div>
        <h1 class="display-5 fw-bolder">${productoAVer.titulo}</h1>
        <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">$${productoAVer.precio}</span>
            <span>${productoAVer.preciodescuento}</span>
        </div>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div class="d-flex">
            <input class="form-control text-center me-3" id="cantidad-${productoAVer.id}" type="num" value="1" style="max-width: 3rem" />
            <button onclick="agregarAlCarrito(${productoAVer.id})" class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Agregar al carrito
            </button>
        
        </div>
    </div>
</div>`
