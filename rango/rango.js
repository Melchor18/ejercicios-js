function rango(inicio, fin) {
    var resultado = [];
    for (let i = inicio; i <= fin; i++) {
        resultado.push(i);
    }
    return resultado;
};
console.log(rango(1, 100));
console.log(rango(6, 43));
console.log(rango(-10, 35))