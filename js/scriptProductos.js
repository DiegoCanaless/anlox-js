const carritoContenedor = document.getElementById("carritoContenedor")
const precioCarrito = document.querySelector("precioTotal")
const botonesAlert = document.getElementsByClassName("bton__producto")
const btonComprar = document.getElementById("procesarCompra")


// Visualizacion del carrito

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    mostrarCarrito();
})

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body")
    
    modalBody.innerHTML = ""
    carrito.forEach( (prod) => {
        const {id, nombre, img, precio, cantidad} = prod
        modalBody.innerHTML +=  `
        <div class="modal-contenedor">
            <div>
                <img class="img-fluid  img-carrito" src="${img}"/>
            </div>
            <div>
                <p class=modal-texto>Producto: ${nombre}</p>
                <p class=modal-texto>Cantidad: ${cantidad}</p>
                <p class=modal-texto>Precio: $${precio}</p>
                <button onclick="eliminarProducto(${id})" class="modal-eliminar">Eliminar producto</button>
            </div>
        </div>
        <hr>
        `
    })
        if(carrito.length === 0){
            modalBody.innerHTML = `
            <h5 class="text-center"> Aun no hay productos en el carrito</h5>
            `
    }

    carritoContenedor.textContent = carrito.length

    guardarLocalStorage()
}


// Opciones de agregar y eliminar productos del carrito con sus alertas. Guardado del localstorage


function agregarProducto(id){

    const creada = carrito.some(prod => prod.id === id)

    if(creada){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad++

            }
            
        })
    } else {
        const producto =  productos.find((prod) => prod.id === id)
        carrito.push(producto)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
            width: 300,
        })
    }

    mostrarCarrito()

}

function eliminarProducto(id){
    const productoEliminado = id
    carrito = carrito.filter ((juego) => juego.id !== productoEliminado)

    mostrarCarrito()
}

function guardarLocalStorage(){ 
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


// Botones con SweetAlert2

btonComprar.addEventListener("click", ( ) =>{
    if(carrito.length !== 0) {
        Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: 'Se ha realizado la compra exitosamente!',
        })
    }else {
        Swal.fire({
            icon: 'error',
            text: 'No hay productos en el carrito!',
        })
}}
)

// Feths - Creacion y Publicacion de las Cards de los productos

const productos = []

class Producto{
    constructor(id, nombre, precio, img, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.cantidad = cantidad
    }
    publicarProducto(){
        const card = `
        <div class="tarjeta col-12 col-sm-6 col-lg-4" >
            <a href=""><img src="${this.img}" class="shadow p-3 mb-3 bg-body rounded producto__imagen"></a>
            <p class="producto">${this.nombre}<br>$${this.precio}</p>
            <div class="bton">
                <button onclick="agregarProducto(${this.id})" class="bton__producto" id="btonComprar">Agregar</button>
            </div>
        </div>
        `
        const contenedor = document.getElementById("contenedor") 
        contenedor.innerHTML += card
        
    }
}

fetch("../local.json")
    .then((response) => response.json())
    .then(data => {
        data.forEach( prod => {
            let nuevoProducto = new Producto (prod.id, prod.nombre, prod.precio, prod.img, prod.cantidad)
            productos.push(nuevoProducto)
        })
        productos.forEach( e =>{
            e.publicarProducto()
        })
    })
    
    
