const modelo = require('./Tema1_VideojuegosJSON');
let videojuegos1 = modelo.videojuegos.listarVideojuegos();

modelo.videojuegos.nuevoVideojuego(1, "The Last of Us", "Naughty Dog", "Survival Horror",  2013 );
modelo.videojuegos.nuevoVideojuego(2, "Fortnite", "Epic Games","Battle Royale", 2017);
modelo.videojuegos.nuevoVideojuego(3, "Fifa 19", "EA","Deportes", 2018);
modelo.videojuegos.nuevoVideojuego(4, "Horizon Zero Dawn", "Guerrilla Games","Aventura", 2017);

// let videojuegos2 = modelo.videojuegos.listarVideojuegos();
// console.log(videojuegos2);

// modelo.videojuegos.borrarVideojuego(3);
// let videojuegos3 = modelo.videojuegos.listarVideojuegos();
console.log(modelo.videojuegos.listarVideojuegosPorCategoria("Survival Horror"));
console.log(modelo.videojuegos.listarVideojuegosDesdeAnyo(2018));
