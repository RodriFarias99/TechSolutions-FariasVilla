const loginForm= document.querySelector('#loginForm');
const registerForm= document.querySelector('#registerForm');

class usuario{
    constructor(nombre, apellido, dni, mail, contraseña, provincia, cp, direccion, depto, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.contraseña = contraseña;
        this.provincia = provincia;
        this.cp = cp;
        this.direccion = direccion;
        this.depto = depto;
        this.telefono = telefono;
    }
}

if((localStorage.getItem("usuarios"))) {
    let cliente = JSON.parse(localStorage.getItem("usuarios"));
    for(let i = 0; i < cliente.length; i++ ) {
        clientes.push(cliente[i]);
    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    iniciarSesionForm();
})

registerForm.addEventListener("submit", (f) => {
    f.preventDefault();
    crearUsuario();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bien Hecho! Te Has Registrado en TECH SOLUTIONS!\n\nBienvenid@ '+userActual.nombre+'!',
        showConfirmButton: false,
        timer: 3000
    });
    setTimeout(()=> {
        location.href ="../index.html";
    }, 1500)
})



function iniciarSesionForm(){
    const correo = document.getElementById("mailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    if(existeCorreo(correo)){
        userLoggeado =  existeCorreo(correo);
        if(userLoggeado.contraseña === password){
            acceso = 1;
            userActual = userLoggeado;
            localStorage.setItem("UsuarioLoggeado", JSON.stringify(userActual));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenid@ '+userActual.nombre,
                showConfirmButton: false,
                timer: 3000
            });
            setTimeout(()=> {
                location.href ="../index.html";
            }, 1500)
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'La Contraseña ingresada es Incorrecta'
            });
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'El Correo Ingresado no está Registrado en el Sitio!',
            timer: 3000
        });
        
    }
}
function existeCorreo(correo){
    let userVerificando = clientes.find(cliente => cliente.mail === correo);
    if(userVerificando){
        return(userVerificando);
    }else{
        return(false);
    }
}

function crearUsuario(){
    const nombre = document.getElementById("nameForm").value;
    const apellido = document.getElementById("lastnameForm").value;
    const dni = document.getElementById("dniForm").value;
    const mail = document.getElementById("mailForm").value;
    const contraseña = document.getElementById("passwordForm").value;
    const provincia = document.getElementById("provinciaForm").value;
    const cp = document.getElementById("cpForm").value;
    const direccion = document.getElementById("addressForm").value;
    const depto = document.getElementById("deptoForm").value;
    const telefono = document.getElementById("telForm").value;
    const nuevoUsuario = new usuario(nombre, apellido, dni, mail, contraseña, provincia, cp, direccion, depto, telefono);
    clientes.push(nuevoUsuario);
    userActual = nuevoUsuario;
    localStorage.setItem("usuarios", JSON.stringify(clientes));
    localStorage.setItem("UsuarioLoggeado", JSON.stringify(userActual));
    acceso = 1;
    (clientes.length>0) && console.log(clientes);
    
}
