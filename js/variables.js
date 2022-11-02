let articulosEnCarro = [];
let quant;
let productos=[];
let clientes = [];
let userLoggeado;
let userActual;
let userVerificando;
let acceso;
let total = 0;
let compras = [];
const apiStock = "../json/stock.json";


if((localStorage.getItem("articulosEnCarro"))) {
    let carrito = JSON.parse(localStorage.getItem("articulosEnCarro"));
    for(let i = 0; i < carrito.length; i++ ) {
        articulosEnCarro.push(carrito[i]);
    }
}

