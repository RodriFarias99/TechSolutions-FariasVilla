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
    comprar(product, quantity){
            console.log("Compró $'quantity' $'product'");
    }
}
const clientes = [];

const formularioLogin = document.getElementById("registerForm");
/*
formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    crearUsuario();
})*/

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
    formularioLogin.reset();
    console.log(clientes);
}

