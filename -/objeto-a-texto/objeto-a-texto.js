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

function datomenda(menda) {
    return menda.nombre + " "
        + menda.apellido + "vive en"
        + menda.direccion + " ,tiene"
        + menda.edad + " y "
        + (menda.vacunado ? "tiene vacuna" : "no tiene vacuna");

}
function datomendab(p) {
    return `${p.nombre} ${p.apellido} vive en ${p.direccion}, tiene ${p.edad} años y ${p.vacunado ? "tiene vacuna" : "no tiene vacuna"}`;
}



console.log(datomenda(menda1));
console.log(datomenda(menda2));

console.log(datomendab(menda1));
console.log(datomendab(menda2));

