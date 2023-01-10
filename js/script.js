
//  Botones de Comprar, para añadir el producto al carrito


// Cierre de Botones de Comprar 


// Formulario de Correo del index

// let correo = document.getElementById("userCorreo");

let correo = document.getElementById("userCorreo");
let confirmacion = document.getElementById("novedades");
let formPublicidad = document.getElementById("formPublicidad")
let cartel = document.querySelector(".envioCorreo")

correo.addEventListener("input", function(){
    if (correo.value == ""){
        alert("El correo es obligatorio")
    } else {

    } 
})

const envioCorreo = formPublicidad.addEventListener("submit",
    function (e) {
        e.preventDefault();

        cartel.innerHTML=` 
        <div class="alert alert-success d-flex align-items-center mt-4 alerta" role="alert">
            <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                !!!   Gracias por Suscribirte !!!
            </div>
        </div>
        `
    })

// Cierre del Formulario del index 



// Formulario en "Contacto"

let nombreUsuario = document.getElementById("userName")
let apellidoUsuario = document.getElementById("userLastName")
let correoUsuario = document.getElementById("userMail")
let mensaje = document.getElementById("userMessage")
let form = document.getElementById("formulario")
let respuesta = document.querySelector(".respuesta")

correoUsuario.addEventListener("input", function(){
    if (correoUsuario.value == ""){
        alert("El correo es obligatorio")
    }
})

const divRespuesta = form.addEventListener("submit", 
    function (e) {
        e.preventDefault();

        respuesta.innerHTML=`
        <div class="alert alert-light " role="alert"  > 
                !!!!   Se ha enviado el mensaje correctamente   !!!!
        </div> `
    }
    )