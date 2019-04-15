const os = require('os');
const http = require('http');
const fs = require('fs');

var user = os.userInfo().username;
var dir = os.userInfo().homedir;

var atenderPeticion = (request, response) => {
    
    if (request.url == '/') {
        console.log("Hola soy server, tu amigo");
        response.writeHead(200, { "Content-Type": "text/html" });
        var contenido = fs.readFileSync('./index.html', 'utf8');
        response.write(contenido);
    } else if (request.url == '/usuario') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Usuario  " +user);
    } else if (request.url == '/carpeta') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        fs.readdirSync('.').forEach(fichero => {response.write(fichero + "\n")});
    }else if(request.url == '/error.jpg'){
        response.writeHead(200, { "Content-Type": "image/jpg" });
        response.write('./error.jpg');
    }
    else{
        response.writeHead(200, { "Content-Type": "text/html" });        
        var contenido = fs.readFileSync('./imgError.html', 'utf8');
        response.write(contenido);
    }    
    response.end();
}

http.createServer(atenderPeticion).listen(8080);