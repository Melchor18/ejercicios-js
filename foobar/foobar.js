function esDivisible(numero, divisor){
    return numero % divisor === 0;
}

let lista = document.getElementById("resultado-foobar")


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        lista.innerHTML += `<li> FooBar </li>`;
    }

    else if (i % 3 === 0) {
        lista.innerHTML += `<li> Foo </li>`;

    }
    else if (i % 5 === 0) {
        lista.innerHTML += `<li> Bar </li>`;
    }
    else {
        lista.innerHTML += `<li> ${i} </li>`;
    }
}