function mostrarConsola(){
    let entrada = document.getElementById("entrada");
    let valor = entrada.value;
    console.log(valor)
}
function mostrarValor(){
    let entrada = document.getElementById("rango");
    let valor = entrada.value;
    //console.log(valor)
    let indicador = document.getElementById("valor-rango");
    indicador.innerText = valor;
    console.log (indicador.innerText);

}
function actualizarPalabra(){
    let entrada = document.getElementById("palabra");
    let valor = entrada.value;
    let valorPalabra = document.getElementById("valor-palabra");
    valorPalabra.innerText = valor;
    console.log(valor);
    
}
mostrarValor();
