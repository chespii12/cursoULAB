const modelo = require('./modelo');
let libros1 = modelo.libros.listarLibros();
console.log(libros1);

modelo.libros.nuevoLibro(1, "El Señor de los Anillos", "J.R.R. Tolkien", 19.95);
modelo.libros.nuevoLibro(2, "El juego de Ender", "Orson Scott Card", 9.90);

let libros2 = modelo.libros.listarLibros();
console.log(libros2);

modelo.libros.borrarLibro(1);
let libros3 = modelo.libros.listarLibros();
console.log(libros3);
