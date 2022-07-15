/*let ejemplo = ["a" ,"b", "c", "d", "e"];

console.log(ejemplo.join("\n"));

console.log(ejemplo.reverse());
console.log(ejemplo.reverse().join("\n"));

console.log(ejemplo.indexOf("7"));

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

console.log(dias)
dias.splice(1, 1, "hola", "adios");
console.log(dias);


console.log(dias.slice(2,4))



let textoDias = "lunes martes miercoles jueves viernes sabado domingo"
let dias = textoDias.split(" ");

console.log(dias);

reverse()
split()
join()


let frase ="Me gusta mucho el javascript"

let frase2 = frase.split(" ");
console.log(frase2);

console.log (frase2.reverse());
console.log(frase2.join(" "))


let a = "hola"

console.log(a.repeat(5));

let x = "    hola    "
console.log(x.trim());
*/

let frase = "HOLA A TODOS Y A TODAS"
function mayusculaDeTitulo(frase){
    let fraseEnMinusculas = frase.toLowerCase();
    let listaPalabras = fraseEnMinusculas.split(" ");
    let ListaProcesadas = []
    for (let i = 0; i < listaPalabras.length; i++){
        let palabra = listaPalabras[i];
        let primeraLetra = palabra[0].toUpperCase();
        let resto = palabra.substring(1);
        let palabraProcesada = primeraLetra + resto;
        ListaProcesadas.push(palabraProcesada);

    }
    return ListaProcesadas.join(" ")


}


console.log(mayusculaDeTitulo(frase));



