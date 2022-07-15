let tareas = {
    nombre: "limpiar",
    descripcion: "darle a la escoba",
    completada: false,

};

let listaTareas = [
    {
        nombre: "fregar",
        descripcion: "darle al estropajo",
        completada: true,

    },
    {
        nombre: "Secar",
        descripcion: "darle al paño",
        completada: true,

    }

]
function mostrarTarea(tareas) {
    return `[${tareas.completada ? "X" : " "}] ${tareas.nombre} (${tareas.descripcion})`;

};
function mostrarLista(lista) {
    for (let i = 0; i < lista.lenght; i++) {
        console.log(mostrarTarea(lista[i]))
    }
};
function añadirTarea(lista, tareas) {
    if (tareas.nombre !== undefined && tareas.descripcion !== undefined && tareas.completada !== undefined) { lista.push(tareas) }
}

añadirTarea(listaTareas, tareas)
mostrarLista(listaTareas);
añadirTarea(listaTareas, {
    nombre: "Esta es la tarea que hice sin variable",
    descripcion: "funciona igual que las demas",
    completada: false,

});

function completar(lista, nombreTarea) {
    for (let i = 0; i < lista.lenght; i++) {
        if (lista[i].nombre === nombreTarea) {
            lista[i].completada = true;
        }
    }
}

console.log(mostrarTarea(tareas));

console.log(añadirTarea(tareas));