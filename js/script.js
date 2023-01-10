
//  Botones de Comprar, para añadir el producto al carrito


// Cierre de Botones de Comprar 


// Formulario de Correo del index

// let correo = document.getElementById("userCorreo");





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