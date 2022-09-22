
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

const producto1 = new articulo('Gabinete Gamer Cromax Cm-8801', 'Gabinetes', 'RGB Mid Tower S/fuente', 6000, 1, "../assets/img/prod14.jpg", 3);
const producto2 = new articulo('Gabinete Gamer Magnum Tech 235M Negro', 'Gabinetes', 'Mid Tower, ATX/micro ATX/Mini-ATX, USB 2.0/3.0, sin Fuente, Negro', 11175, 2, "../assets/img/prod16.jpg", 2);
const producto3 = new articulo('Gabinete Gamer MAGNUM TECH 235GM Blanco', 'Gabinetes', 'Mid Tower, ATX/micro ATX/Mini-ATX, USB 2.0/3.0, sin Fuente, Blanco', 20000, 3, "../assets/img/prod152.png", 1);
const producto4 = new articulo('Teclado Gamer Razer', 'Teclados', 'Razer Hunstman', 24000, 4, "../assets/img/prod2.jpg", 5);
const producto5 = new articulo('Teclado Gamer Logitech', 'Teclados', 'Logitech g513', 25600, 5, "../assets/img/prod13.jpg", 5);
const producto6 = new articulo('Teclado Gamer Redragon', 'Teclados', 'Redragon Kumara 522 Blanco', 8900, 6, "../assets/img/prod122.png", 5);
const producto7 = new articulo('Mouse Gamer Logitech', 'Mouses', 'Logitech g305 Negro', 6700, 7, "../assets/img/prod17.jpg", 5);
const producto8 = new articulo('Mouse Gamer Redragon', 'Mouses', 'Redragon M711 Cobra Blanco', 3800, 8, "../assets/img/prod182.png", 5);
const producto9 = new articulo('Mouse Gamer Razer', 'Mouses', 'Razer Mamba 2012', 16500, 9, "../assets/img/prod3.jpg", 5);
const producto10 = new articulo('Cargador Inalámbrico', 'Accesorios', 'Cargador Inalámbrico para celulares por NFC', 2200, 10, "../assets/img/prod6.jpg", 5);
const producto11 = new articulo('Cargador Celular Carga Rápida', 'Accesorios', 'Cargador Samsung Ultra Rapido Original 25w Cable Tipo C A C', 7899, 11, "../assets/img/prod7.jpg", 5);
const producto12 = new articulo('Cable USB Tipo C', 'Accesorios', 'Cable USB tipo C para Cargadores o Transferencia de Datos', 2000, 12, "../assets/img/prod8.jpg", 5);
const producto13 = new articulo('Smartwatch', 'Accesorios', 'Reloj Smartwatch Llamadas Mensajes Whatsapp Cardio', 6852, 13, "../assets/img/prod9.jpg", 5);
const producto14 = new articulo('Auriculares Inalámbricos TWS', 'Accesorios', 'Auriculares Xiaomi Redmi Airdots S', 3200, 14, "../assets/img/prod10.jpg", 5);

const productos=[producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto12, producto13, producto14];

const producto = document.getElementById("resultado"); //CONTENEDOR DONDE MUESTRO LOS PRODUCTOS
/*
const catalogo = () =>{
    for (let producto of productos){
        const divProducto = document.createElement("div");
        
        //producto.innerHTML +=
        divProducto.innerHTML = `
            <div class="container-fluid  tarjeta row col-10 col-md-5 col-xl-3 m-3 p-1 d-flex justify-content-center ">
                <img src=${producto.pic} class="col-10 img-thumbnail m-2" alt="...">
                <div class="bodyTarjeta row container">
                    <h5 class="col-12">${producto.nombre}</h5>
                    <p class="col-12">${producto.detail}</p>
                    <p class="col-12">Valor: $${producto.precio}</p>
                    <button class="col-7 mx-1 my-3" id="boton${producto.id}">Agregar al CarritoSIPETE</button>
                </div>
            </div>
        `;
        resultado.appendChild(divProducto);
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    }   
    //Agregar un evento al boton de agregar al carrito: 
    
}
*/
