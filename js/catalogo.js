class articulo{
    constructor(nombre, categoria, detail, precio, id, pic, stock){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.detail = detail;
        this.precio = precio;
        this.id = id;
        this.pic = pic;
        this.stock = stock;
    }
}

fetch(apiStock)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        datos.forEach(producto => {
            productos.push(producto);
        });
    })
    .catch(error => console.log(error))
    

const contenedorProductos = document.querySelector('#resultado'); //CONTENEDOR DONDE MUESTRO LOS PRODUCTOS

/*
const actualizarStock(){
    fetch(apiStock)
}
*/

const catalogo = () =>{
    for(let prod of productos){
        const divProducto = document.createElement("div");
        divProducto.classList.add("container-fluid", "tarjeta", "row","col-xl-3", "col-md-5", "col-10", "m-3", "p-1", "d-flex", "justify-content-center");
        divProducto.innerHTML = `
                
                        <img src=${prod.pic} class="col-10 img-thumbnail m-2" alt="...">
                        <div class="bodyTarjeta row container">
                            <h5 class="col-12">${prod.nombre}</h5>
                            <p class="col-12">${prod.detail}</p>
                            <p class="col-12">Valor: $${prod.precio}</p>
                            <button class="col-10 mx-1 my-3 d-flex justify-content-center align-content-center button" id="boton${prod.id}">Agregar al Carrito</button>
                        </div>
                
                `;
        contenedorProductos.appendChild(divProducto);
        const boton = document.getElementById(`boton${prod.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(prod.id);
        })
    }   
}


setTimeout(()=> {
    catalogo();
}, 400)