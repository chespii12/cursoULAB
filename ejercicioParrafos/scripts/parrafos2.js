function addParrafo() {
    var numNewP = +(document.getElementsByName("numero")[0].value) + 1;
    var divRespuesta = document.getElementById("respuesta");
    var newP = document.createElement("p");
    var newPContent = document.createTextNode("Párrafo " + numNewP);
    var newBtn = document.getElementById("boton");
    newP.appendChild(newPContent);
    divRespuesta.insertBefore(newP, newBtn);
    newP.addEventListener("click", eliminar);
}
function eliminar() {
    var divRespuesta = document.getElementById("respuesta");
    var pDelete = divRespuesta.removeChild(this);
    var h1 = document.querySelector("h1");
    var newBtn = document.getElementById("boton");
    if ((document.getElementById("respuesta").children.length) == 2) {
        divRespuesta.removeChild(h1);
        divRespuesta.removeChild(newBtn);
        miFormulario.btn_lanzar.style.display = "";
    }
}
function lanzar() {
    miFormulario.btn_lanzar.style.display = "none";
    var divRespuesta = document.getElementById("respuesta");
    var title = document.getElementsByName("titulo")[0].value;
    var numP = document.getElementsByName("numero")[0].value;
    //titulo
    var h1 = document.createElement("h1");
    var h1Content = document.createTextNode(title);
    h1.appendChild(h1Content);
    divRespuesta.appendChild(h1);
    console.log(numP);
    for (var i = 1; i <= numP; i++) {
        var p = document.createElement("p");
        var pContent = document.createTextNode("Párrafo " + i);
        p.appendChild(pContent);
        divRespuesta.appendChild(p);
        p.addEventListener("click", eliminar);
    }
    var numNewP = +numP + 1;
    var newBtn = document.createElement("input");
    newBtn.setAttribute("type", "button");
    newBtn.value = "Añadir párrafo";
    newBtn.setAttribute("id", "boton");
    divRespuesta.appendChild(newBtn);
    newBtn.addEventListener("click", addParrafo);
}
function validar() {
    //
    var titulo = miFormulario.titulo.value;
    var numero = miFormulario.numero.value;
    //que el numero no este vacío
    //que si toda la cadena se basa en espacios en blanco
    if (/^\s+$/.test(numero) || numero == "" || numero.length == 0) {
        miFormulario.numero.style.backgroundColor = "red";
        return false;
    }
    if (!/^[A-Z]{5,20}$/.test(titulo)) {
        miFormulario.titulo.style.backgroundColor = "red";
        alert("El título deber ser letra A a Z y de 5 a 20 caracteres");
        return false;
    }
    if (!/^([1-9]|10)$/.test(numero)) {
        miFormulario.numero.style.backgroundColor = "red";
        alert("El numero debe estar entre 1 y 10");
        return false;
    }
    miFormulario.btn_lanzar.style.display = "";
    miFormulario.titulo.disabled = true;
    miFormulario.numero.disabled = true;
    miFormulario.titulo.style.backgroundColor = "white";
    miFormulario.titulo.style.backgroundColor = "white";
    miFormulario.btn_lanzar.onclick = lanzar;
}
window.onload = function () {
    var title = miFormulario.title;
    var numero = miFormulario.numero;
    title.onblur = validar;
    numero.onblur = validar;
};
