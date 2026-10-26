    let notas = [];

agregarElemento = function() {

    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function recorrerArreglo(){
    let notaR;
    for (let indice = 0; indice <notas.length; indice++){
        notaR = notas[indice];
        console.log(notaR)
    }
}

function generarTabla(){
    let  contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>"+
                        "<tr><td>DOS</td></tr>"+
                        "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function mostrarNotas(){
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table><tr><td>NOTA</th></td>";
    let miNota;
    for (let i=0 ; i<notas.length; i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</td> </tr>"
        }
        contenidoTabla += "</table>"
        cmpTabla.innerHTML = contenidoTabla;
    
}

function probarAgregar(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota) {
    notas.push(nota);
    mostrarNotas()
}

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.random();
    let aleatorioMultiplicado = numeroAleatorio * 100;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let valorFinal = aleatorioEntero + 1;
    return valorFinal;
}

function generarAleatorios() {
    let aleatorios = [];
    let cantidad = recuperarInt("txtNota");
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Error: El número debe estar entre 5 y 20 incluidos.");
    return;
    }
    for (let i = 0; i < cantidad; i++) {
        console.log("Valor del índice iterando: " + i);
        let numeroGenerado = generarNumeroAleatorio();
        aleatorios.push(numeroGenerado);
        console.log("Arreglo aleatorios final:", aleatorios);
}
}