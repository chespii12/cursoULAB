// PARTE 1
// const os = require('os');
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// var user = os.userInfo().username;

// var atenderPeticion = (request, response) => {

//     if (request.url == '/') {
//         console.log("Hola soy server, tu amigo");
//         response.writeHead(200, { "Content-Type": "text/html" });
//         var contenido = fs.readFileSync('./index.html', 'utf8');
//         response.write(contenido);
//     } else if (request.url == '/usuario') {
//         response.writeHead(200, { "Content-Type": "text/plain" });
//         response.write("Usuario  " +user);
//     }
//     else if(request.url.startsWith('/usuario')){

//         response.writeHead(200, { "Content-Type": "text/plain" });
//         var partes = request.url.split("/");
//         if(+partes[3]>=18)
//             response.write("Hola " + user + partes[2]+ " eres mayor de edad");
//         else
//         response.write("Hola " + user + partes[2]+ " eres menor de edad");

//     } else if (request.url == '/carpeta') {
//         response.writeHead(200, { "Content-Type": "text/plain" });
//         fs.readdirSync('.').forEach(fichero => {response.write(fichero + "\n")});

//     }else if(request.url == '/error.jpg'){
//         response.writeHead(200, { "Content-Type": "image/jpg" });
//         response.write('./error.jpg');
//     }
//     else{
//         response.writeHead(200, { "Content-Type": "text/html" });        
//         var contenido = fs.readFileSync('./imgError.html', 'utf8');
//         response.write(contenido);
//     }   

//     const url = require('url');
//     var parametros = url.parse(request.url, true).query;
//     var id = parametros.id; //Suponiendo que el campo se llame id.
//     response.end();
// }

// http.createServer(atenderPeticion).listen(8080);
// PARTE 2

const os = require('os');
const http = require('http');
const fs = require('fs');
const url = require('url');

var user = os.userInfo().username;

var atenderPeticion = (request, response) => {

    if (request.url == '/') {
        console.log("Hola soy server, tu amigo");
        response.writeHead(200, { "Content-Type": "text/html" });
        var contenido = fs.readFileSync('./index.html', 'utf8');
        response.write(contenido);
    } else if (request.url == '/usuario') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Usuario  " + user);
    }else if (request.url.startsWith('/usuario')) {

        response.writeHead(200, { "Content-Type": "text/plain" });
        var partes = request.url.split("/");
        if (+partes.length == 2){
            var parametros = url.parse(request.url, true).query;
            var nombre = parametros.nombre;
            var edad = parametros.edad;

        } else {

            if (+partes[3] >= 18){
                response.write("Hola " + nombre + partes[2] + " eres mayor de edad");
            }else{
                response.write("Hola " + nombre + partes[2] + " eres menor de edad");
            }

        } else if (request.url == '/carpeta') {
            response.writeHead(200, { "Content-Type": "text/plain" });
            fs.readdirSync('.').forEach(fichero => { response.write(fichero + "\n") });

        } else if (request.url == '/error.jpg') {
            response.writeHead(200, { "Content-Type": "image/jpg" });
            response.write('./error.jpg');
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });
            var contenido = fs.readFileSync('./imgError.html', 'utf8');
            response.write(contenido);
        }
        }

    const url = require('url');
    var parametros = url.parse(request.url, true).query;
    var id = parametros.id; //Suponiendo que el campo se llame id.
    response.end();
}

http.createServer(atenderPeticion).listen(8080);