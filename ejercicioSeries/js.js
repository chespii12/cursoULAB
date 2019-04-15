var arraySeries = [];
function guardar() {
    var nombre = document.getElementById("nombreSerie").value;
    var caps = parseInt(document.getElementById("numCapitulos").value);
    var nuevaSerie = new Serie(nombre, caps);
    console.log(nuevaSerie);
    nuevaSerie.grabar(nuevaSerie);
    //borrar formulario para meter mas datos
    document.getElementById("nombreSerie").value = "";
    document.getElementById("numCapitulos").value = "";
}
window.onload = function () {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", guardar);
};
var Serie = /** @class */ (function () {
    function Serie(nameSerie, numCapitulos) {
        this.nameSerie = nameSerie;
        this.numCapitulos = numCapitulos;
    }
    Serie.prototype.setSerie = function (nombre) {
        this.nameSerie = nombre;
    };
    Serie.prototype.setCapitulo = function (capitulos) {
        this.numCapitulos = capitulos;
    };
    Serie.prototype.getSeries = function () {
        return arraySeries;
    };
    Serie.prototype.getNombre = function () {
        return this.nameSerie;
    };
    Serie.prototype.getCapitulos = function () {
        return this.numCapitulos;
    };
    Serie.prototype.grabar = function (serie) {
        arraySeries.push(serie);
        this.mostrarSeries();
    };
    Serie.prototype.mostrarSeries = function () {
        var container = document.getElementById("container");
        if (document.getElementsByName("Modo")[0].value == "lista") {
            console.log("entra");
            var list = document.createElement("ul");
            for (var index = 0; index < arraySeries.length; index++) {
                var listElem = document.createElement("li");
                var listElementContent = document.createTextNode("Nombre serie: " + arraySeries[index].getNombre() + " Nº de capítulos: " + arraySeries[index].getCapitulos());
                listElem.appendChild(listElementContent);
                list.appendChild(listElem);
            }
            container.appendChild(list);
        }
        else {
            var table = document.createElement("table");
            for (var index = 0; index < arraySeries.length; index++) {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var td2 = document.createElement("td");
                var tdContent = document.createTextNode("Nombre serie: " + arraySeries[index].getNombre());
                var tdContent2 = document.createTextNode(" Nº de capítulos: " + arraySeries[index].getCapitulos());
                td.appendChild(tdContent);
                td2.appendChild(tdContent2);
                tr.appendChild(td);
                tr.appendChild(td2);
                table.appendChild(tr);
            }
            container.appendChild(table);
            table.setAttribute("border", "1");
        }
    };
    return Serie;
}());
