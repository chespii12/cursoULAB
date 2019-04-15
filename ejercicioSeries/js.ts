var arraySeries:Serie[] = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombreSerie")).value;
    var caps:number = parseInt((<HTMLInputElement>document.getElementById("numCapitulos")).value);
    var nuevaSerie = new Serie(nombre, caps);
    console.log(nuevaSerie);
    nuevaSerie.grabar(nuevaSerie);
    //borrar formulario para meter mas datos
    (<HTMLInputElement>document.getElementById("nombreSerie")).value  = "";
    (<HTMLInputElement>document.getElementById("numCapitulos")).value  = "";
}
window.onload = function(){
    var boton = <HTMLInputElement>document.getElementById("boton");
    boton.addEventListener("click", guardar);
}
class Serie{

    private nameSerie:String;
    private numCapitulos:number;
    

    constructor(nameSerie:String, numCapitulos:number){
        this.nameSerie = nameSerie;
        this.numCapitulos = numCapitulos;
    }

    setSerie(nombre:string){       
       this.nameSerie=nombre;
    }
    
    setCapitulo(capitulos:number){       
        this.numCapitulos=capitulos;
     }
    getSeries():Serie[]{
        return arraySeries;
    }
    getNombre(){
        return this.nameSerie;
    }
    getCapitulos(){
        return this.numCapitulos;
    }
    grabar(serie:Serie){
        arraySeries.push(serie);
        this.mostrarSeries();
    }

    mostrarSeries(){
        let container = <HTMLDivElement>document.getElementById("container");
        if((<HTMLOptionElement>document.getElementsByName("Modo")[0]).value == "lista"){
            console.log("entra");
            let list = <HTMLUListElement>document.createElement("ul");      
            for (let index = 0; index < arraySeries.length; index++) {
                var listElem = <HTMLElement>document.createElement("li"); 
                var listElementContent = document.createTextNode("Nombre serie: "+ arraySeries[index].getNombre() + " Nº de capítulos: " +arraySeries[index].getCapitulos());
                listElem.appendChild(listElementContent); 
                list.appendChild(listElem);
                             
            }
            container.appendChild(list);  
        }else{
            let table = <HTMLTableElement>document.createElement("table");

            for (let index = 0; index < arraySeries.length; index++) {
                var tr = <HTMLTableRowElement> document.createElement("tr"); 
                var td = <HTMLElement>document.createElement("td"); 
                var td2 = <HTMLElement>document.createElement("td"); 

                var tdContent = document.createTextNode("Nombre serie: "+ arraySeries[index].getNombre());
                var tdContent2 = document.createTextNode(" Nº de capítulos: " +arraySeries[index].getCapitulos());

                td.appendChild(tdContent);
                td2.appendChild(tdContent2);

                tr.appendChild(td);
                tr.appendChild(td2);
                
                table.appendChild(tr);                
            }
            container.appendChild(table);
            table.setAttribute("border","1");
        }
    }
}

