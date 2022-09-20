//Articulo en Carro Atributos
class articuloEnCarro{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

//Array de articulos en el Carrito
let articulosEnCarro=[
    {
        nombre: 'Cargador Inalámbrico',
        precio: 2200,
        cantidad: 2

    },
    {
        nombre: 'Auriculares Inalámbricos TWS',
        precio: 3200,
        cantidad: 1
    }
];


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
    mostrarCarrito();
    console.log(articulosEnCarro);
}

botonVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
})

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    
    articulosEnCarro.forEach( articulo => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <li>${articulo.cantidad} X ${articulo.nombre} - $${articulo.precio}</li>
                        </div>
                        `;
        /*
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        */
        
        contenedorCarrito.appendChild(div);
   })
   actualizarTotal();
      
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    articulosEnCarro = [];
    total=0;
    // Renderizamos los cambios
    mostrarCarrito();
}
function actualizarTotal(){
    total = 0;
    for (let i = 0; i < articulosEnCarro.length; i++) {
        total += parseInt(articulosEnCarro[i].precio);
    }
    totalCarrito.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
                    <div>
                        <p>$${total}</p>
                    </div>
                    `;
    totalCarrito.appendChild(div);
}

const articulo1 = document.getElementById("1");
const articulo2 = document.getElementById("2");
const articulo3 = document.getElementById("3");
const articulo4 = document.getElementById("4");
const articulo5 = document.getElementById("5");
const articulo6 = document.getElementById("6");
const articulo7 = document.getElementById("7");
const articulo8 = document.getElementById("8");
const articulo9 = document.getElementById("9");
const articulo10 = document.getElementById("10");
const articulo11 = document.getElementById("11");
const articulo12 = document.getElementById("12");
const articulo13 = document.getElementById("13");
const articulo14 = document.getElementById("14");


function agregarAlCarrito(articulo){
    const nombre = articulo.nombre;
    const precio = articulo.precio;
    const cantidad = articulo.cantidad;
    const agregarArticulo = new articuloEnCarro(nombre, precio, cantidad)
    articulosEnCarro.push(agregarArticulo);
    localStorage.setItem("articulosEnCarro", JSON.stringify(articuloEnCarro));
    console.log(articulosEnCarro);
    
}

articulo1.addEventListener("click", () => {
    const articulo = productos[1];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo2.addEventListener("click", () => {
    const articulo = productos[1];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo3.addEventListener("click", () => {
    const articulo = productos[2];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo4.addEventListener("click", () => {
    const articulo = productos[3];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo5.addEventListener("click", () => {
    const articulo = productos[4];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo6.addEventListener("click", () => {
    const articulo = productos[5];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo7.addEventListener("click", () => {
    const articulo = productos[6];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo8.addEventListener("click", () => {
    const articulo = productos[7];
    console.log(articulo);
    agregarAlCarrito(articulo);
})
articulo9.addEventListener("click", () => {
    const articulo = productos[8];
    agregarAlCarrito(articulo);
})
articulo10.addEventListener("click", () => {
    const articulo = productos[9];
    agregarAlCarrito(articulo);
})
articulo11.addEventListener("click", () => {
    const articulo = productos[10];
    agregarAlCarrito(articulo);
})
articulo12.addEventListener("click", () => {
    const articulo = productos[11];
    agregarAlCarrito(articulo);
})
articulo13.addEventListener("click", () => {
    const articulo = productos[12];
    agregarAlCarrito(articulo);
})
articulo14.addEventListener("click", () => {
    const articulo = productos[13];
    agregarAlCarrito(articulo);
})

