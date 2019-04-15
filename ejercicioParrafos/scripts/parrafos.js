			
function addParrafo()
{
	let numNewP = +(document.getElementsByName("numero")[0].value)+1;
	let  divRespuesta = document.getElementById("respuesta");
	let  newP = document.createElement("p");
	let newPContent = document.createTextNode("Párrafo " + numNewP);
	let newBtn = document.getElementById("boton");
	newP.appendChild(newPContent);
	divRespuesta.insertBefore(newP, newBtn);
	newP.addEventListener("click",  eliminar);	
}

function eliminar()
{
	let  divRespuesta = document.getElementById("respuesta");
	let pDelete =  divRespuesta.removeChild(this);
	let h1 = document.querySelector("h1");
	let newBtn = document.getElementById("boton");

	if ((document.getElementById("respuesta").children.length)==2) {
		divRespuesta.removeChild(h1);
		divRespuesta.removeChild(newBtn);
		miFormulario.btn_lanzar.style.display = "";
	}
}

function lanzar()
{	
	

	miFormulario.btn_lanzar.style.display = "none";
	let  divRespuesta = document.getElementById("respuesta");
	let title = document.getElementsByName("titulo")[0].value;
	let numP = document.getElementsByName("numero")[0].value;
	
	//titulo
	let h1 = document.createElement("h1");
	let h1Content = document.createTextNode(title);
	h1.appendChild(h1Content);
	divRespuesta.appendChild(h1);
	console.log(numP);

	for (let i = 1; i<=numP; i++) {		
		let p = document.createElement("p");
		let pContent = document.createTextNode("Párrafo " + i);
		p.appendChild(pContent);
		divRespuesta.appendChild(p);
		p.addEventListener("click",  eliminar);		
	}
	let numNewP = +numP+1;
	let newBtn = document.createElement("input");
	newBtn.setAttribute("type", "button");
	newBtn.value = "Añadir párrafo";
	newBtn.setAttribute("id", "boton");
	divRespuesta.appendChild(newBtn);
	newBtn.addEventListener("click",  addParrafo);		
}


function validar()
{
//
	let titulo = miFormulario.titulo.value;
	let numero = miFormulario.numero.value;
	//que el numero no este vacío
	//que si toda la cadena se basa en espacios en blanco
	if(/^\s+$/.test(numero) || numero == "" || numero.length==0){
		miFormulario.numero.style.backgroundColor = "red";
		return false;
	}
	if(!/^[A-Z]{5,20}$/.test(titulo)){
		
		miFormulario.titulo.style.backgroundColor = "red";
		alert("El título deber ser letra A a Z y de 5 a 20 caracteres");
		return false;
	}
	if(!/^([1-9]|10)$/.test(numero)){
		
		miFormulario.numero.style.backgroundColor = "red";
		alert("El numero debe estar entre 1 y 10");
		return false;
	}
	
	miFormulario.btn_lanzar.style.display = "";
	miFormulario.titulo.disabled=true;
	miFormulario.numero.disabled=true;
	miFormulario.titulo.style.backgroundColor = "white";
	miFormulario.titulo.style.backgroundColor = "white";
	miFormulario.btn_lanzar.onclick=lanzar;
}


window.onload = function() {
	let title = miFormulario.title;
	let numero = miFormulario.numero;
	title.onblur = validar;
	numero.onblur = validar;
	
};			