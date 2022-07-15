let menda1 = {
    nombre: "Alicia",
    apellido: "Perez",
    direccion: "calle falsa, 124",
    edad: 32,
    vacuando: false,
};

let menda2 = {
    nombre: "Bernardo",
    apellido: "Carretero",
    direccion: "calle inventada, 423",
    edad: 52,
    vacunado: true,
};

function datomendab(menda){
    return `
    <div>
    <h2>${menda.nombre} ${menda.apellido}</h2>
    <div><span>Direccion: </span> ${menda.direccion}</div>
    <div><span>Edad: </span> ${menda.edad}</div>
    <div>${menda.vacunado ? "está vacunado" : "no está vacunado"}</div>
    `
}
let miDiv
console.log(datomendab(menda2));