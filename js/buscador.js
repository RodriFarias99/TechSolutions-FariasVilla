const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

const buscar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="container-fluid  tarjeta row col-10 col-md-5 col-xl-3 m-3 p-1 d-flex justify-content-center ">
                <img src=${producto.pic} class="col-10 img-thumbnail m-2" alt="...">
                <div class="bodyTarjeta row container">
                    <h5 class="col-12">${producto.nombre}</h5>
                    <p class="col-12">${producto.detail}</p>
                    <p class="col-12">Valor: $${producto.precio}</p>
                    <button class="col-4 mx-1 my-3">Comprar</button>
                    <button class="col-7 mx-1 my-3" id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
            `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}
formulario.addEventListener('keyup', buscar)
buscar();
