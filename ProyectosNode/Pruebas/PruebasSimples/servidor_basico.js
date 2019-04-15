const http = require('http'); 
var atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Bienvenido/a");
    response.write("Tienes este navegador: " +
    request.headers['user-agent']);    
    response.end();
    
} 

http.createServer(atenderPeticion).listen(8080);

