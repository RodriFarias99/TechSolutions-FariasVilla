
class articulo{
    constructor(nombre, categoria, detail, precio, id, pic, stock){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.detail = detail;
        this.precio = precio;
        this.id = id;
        this.pic = pic;
        this.stock = stock;
    }
}


const productos=[
    {
        nombre: 'Gabinete Gamer Cromax Cm-8801',
        categoria: 'Gabinetes',
        detail: 'RGB Mid Tower S/fuente',
        precio: 6000,
        id: 1,
        pic: "../assets/img/prod14.jpg",
        stock: 3
    },
    {
        nombre: 'Gabinete Gamer Magnum Tech 235M Negro',
        categoria: 'Gabinetes',
        detail: 'Mid Tower, ATX/micro ATX/Mini-ATX, USB 2.0/3.0, sin Fuente, Negro',
        precio: 11175,
        id: 2,
        pic: "../assets/img/prod16.jpg",
        stock: 2
    },
    {
        nombre: 'Gabinete Gamer MAGNUM TECH 235GM Blanco',
        categoria: 'Gabinetes',
        detail: 'Mid Tower, ATX/micro ATX/Mini-ATX, USB 2.0/3.0, sin Fuente, Blanco',
        precio: 20000,
        id: 3,
        pic: "../assets/img/prod152.png",
        stock: 1
    },
    {
        nombre: 'Teclado Gamer',
        categoria: 'Teclados',
        detail: 'Razer Hunstman',
        precio: 24000,
        id: 4,
        pic: "../assets/img/prod2.jpg",
        stock: 5
    },
    {
        nombre: 'Teclado Gamer',
        categoria: 'Teclados',
        detail: 'Logitech g513',
        precio: 25600,
        id: 5,
        pic: "../assets/img/prod13.jpg",
        stock: 5
    },
    {
        nombre: 'Teclado Gamer',
        categoria: 'Teclados',
        detail: 'Redragon Kumara 522 Blanco',
        precio: 8900,
        id: 6,
        pic: "../assets/img/prod122.png",
        stock: 5
    },
    {
        nombre: 'Mouse Gamer',
        categoria: 'Mouses',
        detail: 'Logitech g305 Negro',
        precio: 6700,
        id: 7,
        pic: "../assets/img/prod17.jpg",
        stock: 5
    },
    {
        nombre: 'Mouse Gamer',
        categoria: 'Mouses',
        detail: 'Redragon M711 Cobra Blanco',
        precio: 3800,
        id: 8,
        pic: "../assets/img/prod182.png",
        stock: 5
    },
    {
        nombre: 'Mouse Gamer',
        categoria: 'Mouses',
        detail: 'Razer Mamba 2012',
        precio: 16500,
        id: 9,
        pic: "../assets/img/prod3.jpg",
        stock: 5
    },
    {
        nombre: 'Cargador Inalámbrico',
        categoria: 'Accesorios',
        detail: 'Cargador Inalámbrico para celulares por NFC',
        precio: 2200,
        id: 10,
        pic: "../assets/img/prod6.jpg",
        stock: 5
    },
    {
        nombre: 'Cargador Celular Carga Rápida',
        categoria: 'Accesorios',
        detail: 'Cargador Samsung Ultra Rapido Original 25w Cable Tipo C A C',
        precio: 7899,
        id: 11,
        pic: "../assets/img/prod7.jpg",
        stock: 5
    },
    {
        nombre: 'Cable USB tipo C',
        categoria: 'Accesorios',
        detail: 'Cable USB tipo C para Cargadores o Transferencia de Datos',
        precio: 2000,
        id: 12,
        pic: "../assets/img/prod8.jpg",
        stock: 5
    },
    {
        nombre: 'Smartwatch',
        categoria: 'Accesorios',
        detail: 'Reloj Smartwatch Llamadas Mensajes Whatsapp Cardio',
        precio: 6852,
        id: 13,
        pic: "../assets/img/prod9.jpg",
        stock: 5
    },
    {
        nombre: 'Auriculares Inalámbricos TWS',
        categoria: 'Accesorios',
        detail: 'Auriculares Xiaomi Redmi Airdots S',
        precio: 3200,
        id: 14,
        pic: "../assets/img/prod10.jpg",
        stock: 5
    }
];

const producto = document.getElementById("resultado");

const catalogo = () =>{
    for (let producto of productos){
        producto.innerHTML += `
            <div class="container-fluid  tarjeta row col-10 col-md-5 col-xl-3 m-3 p-1 d-flex justify-content-center ">
                <img src=${producto.pic} class="col-10 img-thumbnail m-2" alt="...">
                <div class="bodyTarjeta row container">
                    <h5 class="col-12">${producto.nombre}</h5>
                    <p class="col-12">${producto.detail}</p>
                    <p class="col-12">Valor: $${producto.precio}</p>
                    <button class="col-4 mx-1 my-3" id="">Comprar</button>
                    <button class="col-7 mx-1 my-3" id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `
    }
} 