const os = require ('os');
let loginUsuario =os.userInfo().username;

module.exports={
    loginUsuario: loginUsuario,
    esUsuario: esUsuario    
};

function esUsuario (cadena){
    if(cadena ==loginUsuario){
        return true;      
    }else{ 
        return false;
    }
}