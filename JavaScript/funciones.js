// Para mensajes de depuración
console.log(texto); 
console.error();


// Muestra ventana emergente con un botoón ok
alert(texto);

// Para  que el usuario escriba. Se asigna a una variable para que almacene ese texto introducido
prompt(texto,valor x por defecto);

// Escribe tal cual en la página
document.write();

// Mensaje de confirmacion
confirm(texto);


VARIABLES
typeof v1; //para saber de que tipo es

// Si declaro una variable sin contenido será undefined
// Null valor nulo o sin valor

// Variable global: accedemos a ella desde todo el código (Usamos 'VAR')
// variable local: solo funciona donde se ha ScopedCredentialInfo, dentro de una funcion especifica (usamos 'LET'. Hay que declararla al principio del códidgo poniendo 'use script')
// Ámbito; 
//const (nunca se podrá cammbiar el valor de esta variable)

MÉTODOS
Usamos return para devolver un valor.

FUNCIONES ANÓNIMAS
let nombrevariable = function (param1, param2){
    return param1 * param2;
}


BUCLES

if (condition) {
    
} else {
    
}


while (condition) {
    
}

do {
    
} while (condition);

switch (key) {
    case value:
        
        break;

    default:
        break;
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
LAMBDA O ARROW FUNCTIONS

PARAMETROS POR DEFECTO 
Ejemplo:
function nameFunction(nombre='Anonimo'){
    this.nombre=nombre;
}

Si colocamos un + delante de una variablee la trata de convertir a number (+variable)
o usar la funcion number(string)

string.length --> longitud del string
IndexOf - primera posicion donde encuentra lo que se busca en el array
lastIndexOf - ultima posicion donde encuentra lo que se busca en el array
charAt
tolowecase
touppercase
substr 

ARRAYS  
let a = new Array(); o let a = ["a","a","a"];
let b = new Array(2,5,9);
b[0] = 2
let c = new Array(12); //Array de 12 posiciones de 0 a 11
a.length=2; //se puede variar el length del array tb, lo que pasa que todos los elementos que pasen ese legnth se eliminara
