const confirmarCompra = document.querySelector('#confirmarCompra');
userActual=JSON.parse(localStorage.getItem("UsuarioLoggeado"));

class datosCompra{
    constructor(dir, depto, cp, provincia, estadoCompra, articulosC){
        this.dir = dir;
        this.depto = depto;
        this.cp = cp;
        this.provincia = provincia;
        this.estadoCompra= estadoCompra,
        this.articulosC = articulosC;
    }
}

articulosEnCarro.forEach( articulo => {
    let subtotal = articulo.cantidad * articulo.precio;
    const div = document.createElement("div");
    div.innerHTML = `
                    <div>
                        <li class="d-flex justify-content-between" ><p>${articulo.cantidad} &nbsp; X &nbsp; $${articulo.precio} c/u &nbsp; - &nbsp;&nbsp; ${articulo.nombre} &emsp; &emsp;</p> <p> ----------> &emsp;&emsp; $${subtotal}</p></li>
                    </div>
                    `;
    listaDeCompra.appendChild(div);
})

total = 700;
articulosEnCarro.forEach( producto => {
    total += producto.precio * producto.cantidad;
});
totalCarrito.innerHTML = `$${total}`;


confirmarCompra.addEventListener("submit", (e) => {
    e.preventDefault();
    crearCompra();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias '+userActual.nombre+'!\nTu Compra Ha sido Confirmada!\nUna vez recibido el comprobante de Pago Se Despachara su Compra !',
        showConfirmButton: false,
        timer: 3000
    });
    setTimeout(()=> {
        location.href ="../index.html";
    }, 1500)
})


function crearCompra(){
    const estadoCompra = "Esperando Pago";
    const direccionCompra = document.getElementById("direccionEnvio").value;
    const deptoCompra = document.getElementById("deptoEnvio").value;
    const cpCompra = document.getElementById("cpEnvio").value;
    const provinciaCompra = document.getElementById("provinciaEnvio").value;
    const articulosComprados = JSON.stringify(articulosEnCarro);
    const nuevaCompra = new datosCompra(direccionCompra, deptoCompra, cpCompra, provinciaCompra, estadoCompra, articulosComprados);
    compras.push(nuevaCompra);
    localStorage.setItem("compras", JSON.stringify(compras));
    articulosEnCarro = [];
    localStorage.setItem("articulosEnCarro", JSON.stringify(articulosEnCarro));
    total=0;
    setTimeout(()=> {
        location.href ="../index.html";
    }, 7000)
}