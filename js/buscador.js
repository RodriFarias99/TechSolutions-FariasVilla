const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


const buscar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            const divProducto = document.createElement("div");
            divProducto.classList.add("container-fluid", "tarjeta", "row","col-xl-3", "col-md-5", "col-10", "m-3", "p-1", "d-flex", "justify-content-center");
        /*producto.innerHTML += */
            divProducto.innerHTML = `
                
                    <img src=${producto.pic} class="col-10 img-thumbnail m-2" alt="...">
                    <div class="bodyTarjeta row container">
                        <h5 class="col-12">${producto.nombre}</h5>
                        <p class="col-12">${producto.detail}</p>
                        <p class="col-12">Valor: $${producto.precio}</p>
                        <button class="col-10 mx-1 my-3 d-flex justify-content-center align-content-center" id="boton${producto.id}">Agregar al Carrito</button>
                    </div>
                
            `;
            resultado.appendChild(divProducto);
            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            })
        }
    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }
}
formulario.addEventListener('keyup', buscar)
buscar();
