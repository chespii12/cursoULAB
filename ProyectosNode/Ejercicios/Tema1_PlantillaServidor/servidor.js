const http = require('http');
const fs = require('fs');
var atenderPeticion = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    var contenido = fs.readFileSync('./saludo.html', 'utf8');
    var navegador = request.headers['user-agent'];

    if (navegador.indexOf("Chrome") > 0) {
        contenido = contenido.replace('{saludo}', "Utilizas Google Chrome");
    } else {
        contenido = contenido.replace('{saludo}', "Usas un navegador no reconocido");
    }
    response.write(contenido);



    if (request.url == '/') {
        response.write("Página principal");
    } else if (request.url == '/bienvenida') {
        response.write("Bienvenido/a");
    } else if (request.url == '/despedida') {
        response.write("Hasta pronto");
    }
    response.end();
}

http.createServer(atenderPeticion).listen(8080);