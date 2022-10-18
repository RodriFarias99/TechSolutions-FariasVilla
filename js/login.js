class usuario{
    constructor(nombre, apellido, dni, mail, contraseña, provincia, cp, direccion, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.contraseña = contraseña;
        this.provincia = provincia;
        this.cp = cp;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

const clientes = [];
const admin = new usuario("admin", "", "", "admin@gmail.com","admin", "", "", "", "");
clientes[0]=admin;

let userLoggeado;
let userActual;
let userVerificando;
let acceso;

if(localStorage.getItem("usuarios")) {
    let cliente = JSON.parse(localStorage.getItem("usuarios"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < cliente.length; i++ ) {
        clientes.push(cliente[i]);
    }
}
if(localStorage.getItem("UsuarioLoggeado")) {
    let loggeado = JSON.parse(localStorage.getItem("UsuarioLoggeado"));
    console.log(loggeado);
    /* reservas.push(...reserva); */
    userLoggeado = loggeado;
    acceso = 1;
}else{
    acceso = 0;
    userActual = userLoggeado;
}

const registerForm = document.getElementById("registerForm");
const loginForm =document.getElementById("loginForm");
/*
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    crearUsuario();
})*/
function cerrarSesion(){
    acceso = 0;
    localStorage.removeItem("UsuarioLoggeado");
}

function iniciarSesionForm(){
    const correo = document.getElementById("mailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    console.log("-Ejecuta INICIAR SESION\nCorreo Ingresado="+correo);
    if(existeCorreo(correo)){
        userLoggeado =  existeCorreo(correo);
        if(userLoggeado.contraseña === password){
            acceso = 1;
            userActual = userLoggeado;
            localStorage.setItem("UsuarioLoggeado", JSON.stringify(userActual));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido '+userActual.nombre,
                showConfirmButton: false,
                timer: 3000
            });
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'La Contraseña ingresada es Incorrecta',
            footer: '<a href="#">Why do I have this issue?</a>'
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

function submitForm(){
    crearUsuario();
    Swal.fire(
        'Bien Hecho!',
        'Te Has Registrado en TECH SOLUTIONS!',
        'success'
      )
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
    const telefono = document.getElementById("telForm").value;
    const nuevoUsuario = new usuario(nombre, apellido, dni, mail, contraseña, provincia, cp, direccion, telefono);
    clientes.push(nuevoUsuario);
    userActual = nuevoUsuario;
    localStorage.setItem("usuarios", JSON.stringify(clientes));
    localStorage.setItem("UsuarioLoggeado", JSON.stringify(userActual));
    acceso = 1;
    registerForm.reset();
    clientes.length>0 && console.log(clientes);
    
}
