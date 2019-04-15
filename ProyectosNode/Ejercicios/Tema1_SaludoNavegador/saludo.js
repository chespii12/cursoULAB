const http = require('http'); 
var atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Bienvenido/a");
    response.write("Tienes este navegador: " + request.headers['user-agent']);
    var head = request.headers['user-agent'];
    
    if (head.indexOf("Google Chrome")>0) {
        console.log("Usas Google Chrome");
    }else{
        console.log("Utilizas un navegador no reconocido");
    }
    
    response.end();
} 
http.createServer(atenderPeticion).listen(8080);

