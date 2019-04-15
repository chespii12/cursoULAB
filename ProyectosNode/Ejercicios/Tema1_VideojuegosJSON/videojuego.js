const fs = require('fs');
const archivo = 'videojuegos.json';

let nuevoVideojuego = (id, titulo, fabricante, categoria, anyoLanzamiento) => {
    if (!buscarVideojuegoPorId(id)){ //solo entra si el libro no está
        let videojuegos = cargarVideojuegos();
        let nuevo = {
            id: id,
            titulo: titulo,
            fabricante: fabricante,
            categoria: categoria,
            anyoLanzamiento: anyoLanzamiento
        };
        videojuegos.push(nuevo);
        guardarVideojuegos(videojuegos);
        return true;
    }
};

let cargarVideojuegos = () => {
    try {
        return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        return [];
    }
};
let guardarVideojuegos = (videojuegos) => {
    fs.writeFileSync(archivo, JSON.stringify(videojuegos));
};
let buscarVideojuegoPorId = (id) => {
    let videojuegos = cargarVideojuegos();
    let resultado = videojuegos.filter((videojuego) => videojuego.id == id);
    if (resultado.length > 0)
    return resultado[0];
};
let borrarVideojuego = (id) => {
    let videojuegos = cargarVideojuegos();
    let videojuegosFiltrados =  videojuegos.filter((videojuego) => videojuego.id != id);
        if (videojuegosFiltrados.length !== videojuegos.length)
            guardarVideojuegos(videojuegosFiltrados);
            return videojuegosFiltrados.length !== videojuegos.length; //devuelve verdadero o falso
}

let listarVideojuegosDesdeAnyo = (anyoLanzamiento) => {
    let videojuegos = cargarVideojuegos();
    return (videojuegos.filter((videojuego) => videojuego.anyoLanzamiento >= anyoLanzamiento));
}

let listarVideojuegosPorCategoria = (pcategoria) => {
    let videojuegos = cargarVideojuegos();
    return (videojuegos.filter((categoria) => videojuego.categoria === pcategoria));
}

module.exports = {
    listarVideojuegos: cargarVideojuegos,
    guardarVideojuegos: guardarVideojuegos,
    nuevoVideojuego: nuevoVideojuego,
    borrarVideojuego: borrarVideojuego,
    listarVideojuegosDesdeAnyo: listarVideojuegosDesdeAnyo,
    listarVideojuegosPorCategoria: listarVideojuegosPorCategoria
};