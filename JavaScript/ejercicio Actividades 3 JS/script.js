//Actividades 3 JavaScript
let num1, num2, bueno, correcto;
let veces = 0, aciertos = 0, fallos = 0;
let pregunta, lista,  respuesta, terminado = false;
let array = new Array();

function Juego(){
   pregunta = document.querySelector("#pregunta");
   lista = document.querySelectorAll("li>button");
   respuesta = document.querySelector("#respuesta");

   lista.forEach(function(elem){elem.style.backgroundColor='transparent'});

   num1 = Math.floor((Math.random()*10)+1);
   num2 = Math.floor((Math.random()*10)+1);
   pregunta.innerHTML ="¿Cuánto es "+num1+ " X "+num2+"?";  
   bueno = Math.floor((Math.random()*3)+1);

   correcto =  num1 * num2;
    console.log(bueno);

   for (let index = 0; index < lista.length; index++) {
            if(index==bueno){
                console.log(index);
                lista[index].innerHTML = correcto;
                console.log(correcto);
            } 
            else{
               lista[index].innerHTML = Math.floor((Math.random()*100)+1);  
            }
               
  }


}
function comprobar(){
    let elem = event.target;
    let e = elem.textContent;
    console.log(e);
    if(e  == correcto){
        aciertos++;
        alert("Correcto!");
    }else{
        fallos++;
        alert("Has fallado!");
    }
    veces++;
    if(veces==10 && terminado == false){
        alert("Fin del juego. Nº aciertos "+ aciertos + "y nº fallos " + fallos);
        terminado = true;
    }      
    else{
        Juego();
    }
       
}