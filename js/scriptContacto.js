
// Formulario en "Contacto"

let nombreUsuario = document.getElementById("userName")
let apellidoUsuario = document.getElementById("userLastName")
let correoUsuario = document.getElementById("userMail")
let mensaje = document.getElementById("userMessage")
let form = document.getElementById("formulario")
let respuesta = document.querySelector(".respuesta")
let recordar = document.querySelector("almacenar")


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

            let usuarios= [{nombre: nombreUsuario.value, apellido: apellidoUsuario.value, correo: correoUsuario.value
        }]
        //LocalStorage
        if(document.getElementById("almacenar").checked ){
            localStorage.setItem("usuarioStorage", JSON.stringify(usuarios))
        }
        
    }
    )






