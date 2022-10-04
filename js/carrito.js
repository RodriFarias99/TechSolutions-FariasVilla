//Articulo en Carro Atributos
class articuloEnCarro{
    constructor(nombre, detail, precio, cantidad, id){
        this.nombre = nombre.toUpperCase();
        this.detail = detail;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
    }
}

//Array de articulos en el Carrito
let articulosEnCarro = [];
let quant;


const contenedorCarrito = document.getElementById("contenedorCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const botonCarrito = document.getElementById("sidebarCollapse");
const botonVaciarCarrito = document.getElementById("vaciarCarrito");
const botonAgregarAlCarrito = document.getElementById("botonAgregarAlCarrito");
let total = 0;


const actualizarTotal = () => {
    let total = 0; 
    articulosEnCarro.forEach( producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCarrito.innerHTML = `$${total}`;
    
}


if((localStorage.getItem("articulosEnCarro"))) {
    let carrito = JSON.parse(localStorage.getItem("articulosEnCarro"));
    console.log(carrito);
    /* reservas.push(...reserva); */
    for(let i = 0; i < carrito.length; i++ ) {
        articulosEnCarro.push(carrito[i]);
    }
    actualizarCarrito();
}

botonCarrito.onclick = () => {
    console.log(articulosEnCarro);
}

botonVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
})


const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const productoEnCarrito = articulosEnCarro.find(producto => producto.id === id);
    if(productoEnCarrito) {
        quant=parseInt(productoEnCarrito.cantidad++);
    }else {
        let cantP = 1;
        let nombreP = producto.nombre;
        let detailP = producto.detail;
        let precioP = producto.precio;
        let idP = producto.id;
        const productoAgregado = new articuloEnCarro(nombreP, detailP, precioP, cantP, idP);
        articulosEnCarro.push(productoAgregado);
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";

    articulosEnCarro.forEach( articulo => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <li>${articulo.cantidad} X ${articulo.nombre} - $${articulo.precio}</li>
                            <button onClick = "eliminarDelCarrito(${producto.id})" class="btn botonEliminar">[ Eliminar ]</button>
                        </div>
                        `;
        contenedorCarrito.appendChild(div);
        const boton = document.getElementById(`${producto.id}`);
        
   })
   actualizarTotal();
   localStorage.setItem("articulosEnCarro", JSON.stringify(articulosEnCarro));
      
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    articulosEnCarro = [];
    total=0;
    // Renderizamos los cambios
    actualizarCarrito();
}
const eliminarDelCarrito = (id) => {
    const producto = articulosEnCarro.find(producto => producto.id === id);
    articulosEnCarro.splice(articulosEnCarro.indexOf(producto),1);
    actualizarCarrito();
}