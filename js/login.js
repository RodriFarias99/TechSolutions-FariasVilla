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
let userActual = [];
let userVerificando;
let acceso;
if(localStorage.getItem("usuarios")) {
    let cliente = JSON.parse(localStorage.getItem("usuarios"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < cliente.length; i++ ) {
        clientes.push(cliente[i]);
    }
}

const registerForm = document.getElementById("registerForm");
const loginForm =document.getElementById("loginForm");
/*
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    crearUsuario();
})*/

function iniciarSesionForm(){
    const correo = document.getElementById("mailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    if(existeCorreo(correo)){
        let userloggeado =  existeCorreo(correo);
        (userLoggeado.contraseña === password) && (acceso = 1);
        userActual = userLoggeado;
        localStorage.setItem("UsuarioLoggeado", JSON.stringify(userActual));
    }else{
        alert("Ese E-mail No está Registrado");
    }
    
}
function existeCorreo(correo){

    (userVerificando = clientes.find(cliente => cliente.mail === correo)) ? userVerificando : null; 
}

function submitForm(){
    crearUsuario();
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
