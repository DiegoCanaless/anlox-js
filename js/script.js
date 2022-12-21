                            // PREENTREGA N1

//Inicializo la variable con la informacion del cliente

// let numeroDePrendas = parseInt(prompt("Ingrese el numero de prendas que desea comprar"));

//Hago una condicion usando el numero de prendas que comprara el cliente y dandoles un descuento segun las unidades

// if(numeroDePrendas<10) {
//     alert("Bienvenida/o a nuestra pagina");
// } else if(numeroDePrendas>=10 && numeroDePrendas<20){
//     alert("Bienvenida/o tienes un descuento de 5% en tus compras");
// } else if(numeroDePrendas>=20 && numeroDePrendas<30){
//     alert("Bienvenida/o tienes un descuento de 10% en tus compras");
// } else {
//     alert("Bienvenida/o tienes un descuento del 25% en tus compras");
// }

// Creo con la funcion evaluarIva una calculadora de iva segun el precio del producto con un ciclo While

// let precioProducto = parseInt(prompt("Ingrese el valor del producto para evaluar el iva"));
// const iva = 0.21;

// function evaluarIva(){
//     while ( precioProducto != 0){
//         let precioProductoConIva = precioProducto + precioProducto * iva;
//         alert("El valor del producto con iva es de: " + precioProductoConIva + "$ , Coloque 0 acontinuacion si desea salir");
//         precioProducto = parseInt(prompt("Ingrese el valor del producto para evaluar el iva"));
//     }
// }

// evaluarIva()


                                // PREENTREGA N2
// Esto es una simulacion de como el administrador ingresaria nuevas prendas al inventario

class Inventario {
    constructor(nombre, precio, id){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id
    }

    asignacion(array){
        this.id = array.length;
    }
}

const Camperas= [
    new Inventario("Campera Quatum", 8000, 1),
    new Inventario("Campera Ashley", 12000, 2),
    new Inventario("Campera Rasmus", 8000, 3),
]

let seguir = true;
while(seguir){
    let nuevaPrenda = prompt('Ingrese el nombre del producto y el precio del mismo separado con un guion (-) o coloque X si desea salir');

    if(nuevaPrenda.toUpperCase()=="X"){
        seguir = false
        break;
}

let informacion = nuevaPrenda.split('-');

const producto = new Inventario(informacion[0], informacion[1]);

Camperas.push(producto);
producto.asignacion(Camperas)

}



