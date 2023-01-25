const stock = [
    {
        id: 1,
        nombre: "Campera Quantum",
        precio: 8000,
        img: "../assets/foto-productos/quantum.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Campera Ashley",
        precio: 12000,
        img: "../assets/foto-productos/ashley.jpg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Campera Rasmus",
        precio: 8000,
        img: "../assets/foto-productos/rasmus.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Campera Max",
        precio: 5000,
        img: "../assets/foto-productos/max.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Campera Garbi",
        precio: 6000,
        img: "../assets/foto-productos/garbi.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Campera Erin",
        precio: 8000,
        img: "../assets/foto-productos/erin.jpg",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "Campera Ivor",
        precio: 12000,
        img: "../assets/foto-productos/ivor.jpg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Campera Vayne",
        precio: 10000,
        img: "../assets/foto-productos/vayne.jpg",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "Campera Moror",
        precio: 14000,
        img: "../assets/foto-productos/moror.jpg",
        cantidad: 1
    },
    {
        id: 10,
        nombre: "Campera Crizzy",
        precio: 11000,
        img: "../assets/foto-productos/crizzy.jpg",
        cantidad: 1
    },
    {
        id: 11,
        nombre: "Campera Brianna",
        precio: 14000,
        img: "../assets/foto-productos/brianna.jpg",
        cantidad: 1
    },
    {
        id: 12,
        nombre: "Campera Rhoedia Neo",
        precio: 9000,
        img: "../assets/foto-productos/rhoedianeo.jpg",
        cantidad: 1
    },
    {
        id: 13,
        nombre: "Campera Crom",
        precio: 12000,
        img: "../assets/foto-productos/crom.jpg",
        cantidad: 1
    },
    {
        id: 14,
        nombre: "Campera Blair",
        precio: 12000,
        img: "../assets/foto-productos/blair.jpg",
        cantidad: 1
    },
]

let carrito =[]
const contenedor = document.getElementById("contenedor")
const carritoContenedor = document.getElementById("carritoContenedor")
const precioCarrito = document.querySelector("precioTotal")
const botonesAlert = document.getElementsByClassName("bton__producto")
const btonComprar = document.getElementById("procesarCompra")

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

stock.forEach( (prod) => {
    const {id, nombre, precio, img } = prod
    contenedor.innerHTML += `
    <div class="tarjeta col-12 col-sm-6 col-lg-4" >
        <a href=""><img src="${img}" class="shadow p-3 mb-3 bg-body rounded producto__imagen"></a>
        <p class="producto">${nombre}<br>${precio}</p>
        <div class="bton">
            <button onclick="agregarProducto(${id})" class="bton__producto" id="btonComprar">Agregar</button>
        </div>
    </div>
    `
})

function agregarProducto(id){

    const creada = carrito.some(prod => prod.id === id)

    if(creada){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad++

            }
            
        })
    } else {
        const producto =  stock.find((prod) => prod.id === id)
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

// Entrega final

fetch('./local.json')
    .then((response) => response.json())
    .then(data => console.log(data))