const fs = require('fs');
const archivo = 'libros.json';

// ------------------
// let cargarLibros = () => {
//     try {
//         return JSON.parse(fs.readFileSync(archivo, 'utf8'));
//     } catch (e) {
//         return [];
//     }
// };
// con promise
let cargarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(fs.readFileSync(archivo, 'utf-8')));
        } catch (error) {
            reject([]);
        }
    })
}
// ----------------
let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
};
// ---------------
// let buscarLibroPorId = (id) => {
//     let libros = cargarLibros();
//     let resultado = libros.filter((libro) => libro.id == id);
//     if (resultado.length > 0)
//     return resultado[0];
// };
// con promise
let buscarLibroPorId = id => {
    return new Promise ((resolve, reject)=>{
        cargarLibros().then (libros => {
            let resultado = libros.filter(librito =>  librito.id  === id);
            if(resultado.length > 0){  
                resolve(resultado[0]);
            }else{
                reject("No existe el id"); 
            }
        })            
    })
}
// --------------------
let nuevoLibro = (id, titulo, autor, precio) => {
    if (!buscarLibroPorId(id)){ //solo entra si el libro no está
        let libros = cargarLibros();
        let nuevo = {
            id: id,
            titulo: titulo,
            autor: autor,
            precio: precio
        };
        libros.push(nuevo);
        guardarLibros(libros);
        return true;
    }
};
// -----------
let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados =  libros.filter((libro) => libro.id != id);
        if (librosFiltrados.length !== libros.length)
            guardarLibros(librosFiltrados);
            return librosFiltrados.length !== libros.length; //devuelve verdadero o falso
}

module.exports = {
    listarLibros: cargarLibros,
    nuevoLibro: nuevoLibro,
    borrarLibro: borrarLibro
};