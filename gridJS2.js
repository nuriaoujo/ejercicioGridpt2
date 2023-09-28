function calcularGrid() {
    var numero = document.getElementById("numero").value;

    if(numero % 2 == 0) {
        var raizNumero = Math.sqrt(numero);

        var fila = Math.round(raizNumero);
        var columna = Math.ceil(raizNumero);

        var container = document.getElementById("marco");
        container.innerHTML = "";

        container.style.gridTemplateRows = `repeat(${fila}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${columna}, 1fr)`;

        for (let i = 0; i < numero; i++) {
            var nuevoDiv = document.createElement("div");
            nuevoDiv.style.border = "1px solid black";
            nuevoDiv.style.background = "paleturquoise"
            container.appendChild(nuevoDiv);
        }
    } else {
        alert("ERROR, el número no es par")
    }
}

function generarGrid() {
    var generarGrid = document.getElementById("main");
    generarGrid.style.visibility = "visible";
    var contador = 0;
    var identificadorIntervalo = setInterval(function() {
        contador++;

        var contadorText = document.getElementById("contador");
        contadorText.textContent = contador + "s";
    }, 1000);
}