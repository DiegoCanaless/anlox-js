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

        cartel.innerHTML=` 
        <div class="alert alert-success d-flex align-items-center mt-4 alerta" role="alert">
            <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                !!!   Gracias por Suscribirte !!!
            </div>
        </div>
        `
    })