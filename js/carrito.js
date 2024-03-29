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

const contenedorCarrito = document.getElementById("contenedorCarrito");
const listaDeCompra = document.getElementById("listaDeCompra");
const totalCarrito = document.getElementById("totalCarrito");
const botonCarrito = document.getElementById("sidebarCollapse");
const botonVaciarCarrito = document.getElementById("vaciarCarrito");
const botonComprar = document.getElementById("botonComprar");
const botonAgregarAlCarrito = document.getElementById("botonAgregarAlCarrito");

const actualizarTotal = () => {
    total = 0; 
    articulosEnCarro.forEach( producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCarrito.innerHTML = `$${total}`;
}
botonCarrito.onclick = () => {
    console.log(articulosEnCarro);
}

botonVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
})
actualizarCarrito();

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const indexCatalogo = productos.findIndex(producto => producto.id === id);
    const indexSelected = articulosEnCarro.findIndex(el=> el.id == id);
    const productoEnCarrito = articulosEnCarro.find(producto => producto.id === id);
    controlarStock(indexCatalogo);
    if(productoEnCarrito) {
        articulosEnCarro[indexSelected].cantidad++;
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

function controlarStock(id){
    productos[id].stock--;
    if(productos[id].stock < 1){
        buscar();
    }
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    articulosEnCarro = [];
    total=0;
    // Renderizamos los cambios
    actualizarCarrito();
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";

    articulosEnCarro.forEach( articulo => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <li>${articulo.cantidad} X ${articulo.nombre} - $${articulo.precio}</li>
                            <button onClick = "eliminarDelCarrito(${articulo.id})" class="btn botonEliminar">[ Eliminar ]</button>
                        </div>
                        `;
        contenedorCarrito.appendChild(div);
        const boton = document.getElementById(`${articulo.id}`);
        
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
    const indexSelected = productos.findIndex(el=> el.id == id);
    const indOfCarrito = articulosEnCarro.findIndex(producto => producto.id === id);
    productos[indexSelected].stock++;
    if(articulosEnCarro[indOfCarrito]?.cantidad>1){
        articulosEnCarro[indOfCarrito].cantidad--;
    }else{
        articulosEnCarro.splice(articulosEnCarro.indexOf(producto),1);
    }
    buscar();
    actualizarCarrito();
}
