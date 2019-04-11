//verificar datos usuario entrante
const utilidades = require('./utilidades_os.js');

console.log();
if(utilidades.esUsuario("pepe") == true){
    console.log("Hola "+ utilidades.loginUsuario);
}else{
    console.log("Usuario incorrecto. Tú no eres "+ utilidades.loginUsuario); 
}
