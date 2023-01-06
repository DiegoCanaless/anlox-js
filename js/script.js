//                             // PREENTREGA N1

// //Inicializo la variable con la informacion del cliente (Comentario)

// let numeroDePrendas = parseInt(prompt("Ingrese el numero de prendas que desea comprar"));

// //Hago una condicion usando el numero de prendas que comprara el cliente y dandoles un descuento segun las unidades (Comentario)

// if(numeroDePrendas<10) {
//     alert("Bienvenida/o a nuestra pagina");
// } else if(numeroDePrendas>=10 && numeroDePrendas<20){
//     alert("Bienvenida/o tienes un descuento de 5% en tus compras");
// } else if(numeroDePrendas>=20 && numeroDePrendas<30){
//     alert("Bienvenida/o tienes un descuento de 10% en tus compras");
// } else {
//     alert("Bienvenida/o tienes un descuento del 25% en tus compras");
// }

// // Creo con la funcion evaluarIva una calculadora de iva segun el precio del producto con un ciclo While (Comentario)

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


//                                 // PREENTREGA N2
// // Esto es una simulacion de como el administrador ingresaria nuevas prendas al inventario (Comentario)

// class Inventario {
//     constructor(nombre, precio, id){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.id = id
//     }

//     asignacion(array){
//         this.id = array.length;
//     }
// }

// const Camperas= [
//     new Inventario("Campera Quatum", 8000, 1),
//     new Inventario("Campera Ashley", 12000, 2),
//     new Inventario("Campera Rasmus", 8000, 3),
//     new Inventario("Campera Max", 5000, 4),
//     new Inventario("Campera Garbi", 6000, 5),
//     new Inventario("Campera Erin", 8000, 6),
//     new Inventario("Campera Ivor", 12000, 7),
//     new Inventario("Campera Vayne", 10000, 8),
//     new Inventario("Campera Moror", 14000, 9),
//     new Inventario("Campera Crizzy", 11000, 10),
//     new Inventario("Campera Brianna", 14000, 11),
//     new Inventario("Campera Rhoedia Neo", 9000, 12),
//     new Inventario("Campera Crom", 12000, 13),
//     new Inventario("Campera Blair", 12000, 14),

// ]

// let seguir = true;
// while(seguir){
//     let nuevaPrenda = prompt('Ingrese el nombre del producto y el precio del mismo separado con un guion (-) o coloque X si desea salir');

//     if(nuevaPrenda.toUpperCase()=="X"){
//         seguir = false
//         break;
// }

// let informacion = nuevaPrenda.split('-');

// const producto = new Inventario(informacion[0], parseInt(informacion[1]));

// Camperas.push(producto);
// producto.asignacion(Camperas)

// }

// // Ordenamos los array segun sus precios (Comentario)

// let ordenados = prompt("Elegi la opcion que desees : \n1 - Precio(Mayor a Menor) \n2 - Precio(Menor a Mayor)");

// function ordenar(ordenados, array){
//     let arrayOrdenado = array.slice(0);

//     switch (ordenados){
//         case '1':
//             return arrayOrdenado.sort((a,b)=>b.precio-a.precio);
//         case '2':
//             return arrayOrdenado.sort((a,b)=>a.precio-b.precio);
//     default:
//         alert("Opcion Invalida");
//         break;
//     }
// }

// // Mostramos el array (Comentario)

// function StringOrdenado(array){
//     let datos='';

// array.forEach(elemento => {
//     datos+= 'Titulo: ' +elemento.nombre+'\nPrecio: '+ elemento.precio+'\n\n'
    
// })


// return datos;

// }


// alert(StringOrdenado(ordenar(ordenados, Camperas)));

//  Botones de Comprar, para añadir el producto al carrito

let newProducto = document.getElementById("btonComprar");

//  Pedido del correo al usuario para publicidad

let correo = document.getElementById("userCorreo")


// Formulario para contactarnos

let nombreUsuario = document.getElementById("userName")

let apellidoUsuario = document.getElementById("userLastName")

let correoUsuario = document.getElementById("userMail")

let message = document.getElementById(userMessage)