//Inicializo la variable con la informacion del cliente
let numeroDePrendas = parseInt(prompt("Ingrese el numero de prendas que desea comprar"));

//Hago una condicion usando el numero de prendas que comprara el cliente y dandoles un descuento segun las unidades

if(numeroDePrendas<10) {
    alert("Bienvenida/o a nuestra pagina");
} else if(numeroDePrendas>=10 && numeroDePrendas<20){
    alert("Bienvenida/o tienes un descuento de 5% en tus compras");
} else if(numeroDePrendas>=20 && numeroDePrendas<30){
    alert("Bienvenida/o tienes un descuento de 10% en tus compras");
} else {
    alert("Bienvenida/o tienes un descuento del 25% en tus compras");
}

// Creo con la funcion evaluarIva una calculadora de iva segun el precio del producto con un ciclo While
let precioProducto = parseInt(prompt("Ingrese el valor del producto para evaluar el iva"));
const iva = 0.21;

function evaluarIva(){
    while ( precioProducto != 0){
        let precioProductoConIva = precioProducto + precioProducto * iva;
        alert("El valor del producto con iva es de: " + precioProductoConIva + "$ , Coloque 0 acontinuacion si desea salir");
        precioProducto = parseInt(prompt("Ingrese el valor del producto para evaluar el iva"));
    }
}

evaluarIva()
