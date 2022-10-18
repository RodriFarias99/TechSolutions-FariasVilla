const logoUser = document.querySelector('#logoUser');

if(acceso == 1){
    logoUser.className = 'd-flex align-items-center justify-content-center fa-xl fa-solid fa-right-from-bracket col-2';
    logoUser.href = "index.html";
}else if(acceso == 0){
    logoUser.className = "d-flex align-items-center justify-content-center fa-xl fa-regular fa-user col-2"; 
    logoUser.href = "./pages/login.html";
}

function verificarAcceso(){
    (acceso==1) && cerrarSesion();
}
