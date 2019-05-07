const express = require('express');
const conexion = require('./bdconfig.js');

//let Libro = require('../models/libro.js');
let router = express.Router();


/*
const fs = require('fs');

const archivo = 'libros.json';


let cargarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(fs.readFileSync(archivo, 'utf8')));
        } catch (e) {
            //console.log(e);
            reject([]);
        }
    });
}*/

let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
};

let buscarLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        //let libros = cargarLibros();
        cargarLibros().then(libros => {
            let resultado = libros.filter(libro => libro.id == id);
            if (resultado.length > 0)
                resolve(resultado[0]);
            else
                reject("El libro ya existe, no se puede insertar");
        });
    });
}

let nuevoLibro = (id, titulo, autor, precio, img, url) => {
	return new Promise((resolve, reject) => {
		buscarLibroPorId(id).then(libros => {
			reject("El libro a inserta ya existe");
		}).catch(error => {
			cargarLibros().then(resultado => {
				let nuevo = {
					id: id,
					titulo: titulo,
					autor: autor,
                    precio: precio,
                    img: img, // Fernando: url de archivo de imagen de la portada
                    url: url // Fernando: url de detalles del libro
				};
				resultado.push(nuevo);
                guardarLibros(resultado);
                resolve(nuevo);				
			});
        });
    });
}

/*
let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados = libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
}

let modificarLibro = (id, titulo, autor, precio) => {
    let libro = buscarLibroPorId(id);
    if (libro)
    {
        borrarLibro(id);
        nuevoLibro(id, titulo, autor, precio);
        return true;
    } else {
        return false;
    }
};
*/

//borrarLibro y modificarLibro

let borrarLibro = (id) =>{
    return new Promise((resolve, reject) => {
        buscarLibroPorId(id).then(libroBorrar => {
            cargarLibros().then(libros => {
                let librosFiltrados = libros.filter((libro) => libro.id != id);
                if (librosFiltrados.length !== libros.length)
                    guardarLibros(librosFiltrados);
                    resolve(libroBorrar);
                })
            }).catch(error => {
                reject("El libro no existe" + error);
        })
        
    })
};

let modificarLibro = (id, titulo, autor, precio, img, url) => {
    return new Promise((resolve, reject) => {
		buscarLibroPorId(id).then(libroBorrar => {
            borrarLibro(id).then(libros => {
                nuevoLibro(id, titulo, autor, precio,img,url).then(resultado);
                    resolve(resultado);  	
            }).catch(error => {
                reject("Error en el proceso de modificación");			
                });
            });
        }).catch(error => {
			reject("Error en el proceso de modificación");			
	});
};


router.get('/', (req, res) => {
    cargarLibros().then(resultado => {
        //console.log("ENTRA2");
        res.send(resultado);
    }).catch(error => {
        //console.log("ENTRA3");
        res.send(error);
    });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if (resultado)
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no encontrado"});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error buscando libro "+error});
    });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if (resultado)
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no encontrado"});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error buscando libro "+error});
    });
});

router.post('/', (req, res) => {
    // Fernando: nuevos campos de 'img' y 'url'
    nuevoLibro(req.body.id, req.body.titulo,req.body.autor, req.body.precio, req.body.img, req.body.url).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error añadiendo libro"});
    });
});

router.delete('/:id', (req, res) => {
    // Fernando: nuevos campos de 'img' y 'url'
    borrarLibro(req.body.id).then(resultado => {
        if (resultado)
        //lo que devuelves a angular
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no borrado"});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error borrando libro"});
    });
});

router.put('/', (req, res) => {
    // Fernando: nuevos campos de 'img' y 'url'
    modificarLibro(req.body.id, req.body.titulo,req.body.autor, req.body.precio, req.body.img, req.body.url).then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error: true, mensajeError:"Error modificando libro"});
    });
});

module.exports = class Libro {
    constructor(libroJSON) {
    this.cod = libroJSON.cod;
    this.isbn = libroJSON.isbn;
    this.titulo = libroJSON.titulo;
    this.precio = libroJSON.precio;
    this.imagen = libroJSON.imagen;
    this.url = libroJSON.url;
    this.cod_Ac = libroJSON.cod_Ac;
    }
    static cargarLibros() {
        return new Promise( (resolve, reject) => {
            conexion.query("SELECT * FROM libros", (error, resultado, campos)=> {
            if (error)
                return reject(error);
            else
                resolve(resultado.map(cJSON => new Libro(cJSON)));
            });
        });
    }
    crearLibro() {
        return new Promise( (resolve, reject) => {
            let datos = {cod: this.cod, isbn: this.isbn, titulo: this.titulo, precio: this.precio, imagen: this.imagen, url:this.url, cod_Ac: this.cod_Ac};
            conexion.query("INSERT INTO libros SET ?", datos, (error, resultado, campos) => {
            if (error)
                return reject(error);
            else
                resolve(resultado);
            });
        });
    }
}
module.exports = router;