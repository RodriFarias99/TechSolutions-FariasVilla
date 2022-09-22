//Articulo en Carro Atributos
class articuloEnCarro{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

//Array de articulos en el Carrito
let articulosEnCarro=[];
let quant;

const contenedorCarrito = document.getElementById("contenedorCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const botonCarrito = document.getElementById("sidebarCollapse");
const botonVaciarCarrito = document.getElementById("vaciarCarrito");
const botonAgregarAlCarrito = document.getElementById("botonAgregarAlCarrito");
let total = 0;

/* 
if(localStorage.getItem("articulosEnCarro")){
    console.log("Hola, LLegue aqui")
    
    let cart = JSON.parse(localStorage.getItem("articulosEnCarro"));
    
    reservas.push(...reserva); 
    for(let i = 0; i < cart.length; i++ ) {
        articulosEnCarro.push(cart[i]);
    }
}*/

botonCarrito.onclick = () => {
    console.log(articulosEnCarro);
}

botonVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
})

const actualizarTotal = () => {
    let total = 0; 
    articulosEnCarro.forEach( producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCarrito.innerHTML = `$${total}`;
}

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const productoEnCarrito = articulosEnCarro.find(producto => producto.id === id);
    if(productoEnCarrito) {
        quant=parseInt(productoEnCarrito.cantidad++);
    }else {
        producto.cantidad = 1;
        articulosEnCarro.push(producto);
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