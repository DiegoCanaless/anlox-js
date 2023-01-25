// Formulario para Suscribirte a Anlox

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
        Swal.fire({
            title: 'Correo enviado',
            text: '¡¡ Gracias por suscribirte !!',
        })

        cartel.innerHTML=` 
        <div class="alert justify-content-center align-items-center alert-success d-flex  mt-4 alerta" role="alert">
            <div>
                !!!   Gracias por Suscribirte !!!
            </div>
        </div>
        `
    })
    