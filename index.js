const logoUser = document.querySelector('#logoUser');
const userWelcome = document.querySelector('#userWelcome');
    


if(localStorage.getItem("usuarios")) {
    let cliente = JSON.parse(localStorage.getItem("usuarios"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < cliente.length; i++ ) {
        clientes.push(cliente[i]);
    }
}else{
    const admin = new usuario("admin", "", "", "admin@gmail.com","admin", "", "", "", "");
    clientes[0]=admin;
}
if(localStorage.getItem("UsuarioLoggeado")) {
    userLoggeado = JSON.parse(localStorage.getItem("UsuarioLoggeado"));
    acceso = 1;
}else{
    acceso = 0;
    userActual = userLoggeado;
}

function cerrarSesion(){
    acceso = 0;
    vaciarCarrito();
    localStorage.removeItem("UsuarioLoggeado");
}

if(acceso == 1){
    logoUser.className = 'd-flex align-items-center justify-content-center fa-xl fa-solid fa-right-from-bracket col-2';
    logoUser.href = "index.html";
    userWelcome.innerText = 'Bienvenido '+ (userLoggeado.nombre).toUpperCase() +'!';
}else if(acceso == 0){
    logoUser.className = "d-flex align-items-center justify-content-center fa-xl fa-regular fa-user col-2"; 
    logoUser.href = "./pages/login.html";
    userWelcome.innerText = 'Inicie Sesión'
}

logoUser.addEventListener("click", () => {
    (acceso==1) && cerrarSesion();
})

botonComprar.addEventListener("click", () => {
    if((articulosEnCarro.length > 0) && (acceso==1)){
        location.href ="./pages/buy.html";
    }else{
        (articulosEnCarro.length > 0) ? Swal.fire('Debe iniciar Sesión') : Swal.fire('El Carrito está Vacío');   
    }
})
