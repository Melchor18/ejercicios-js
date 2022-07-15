let datos = [{
    "name": "Lemur, brown",
    "color": "Goldenrod",
    "size": "mediano",
    "vacunado": true
  }, {
    "name": "Herring gull",
    "color": "Green",
    "size": "grande",
    "vacunado": false
  }, {
    "name": "Shrike, common boubou",
    "color": "Purple",
    "size": "grande",
    "vacunado": false
  }, {
    "name": "Common zebra",
    "color": "Turquoise",
    "size": "pequeño",
    "vacunado": true
  }, {
    "name": "Eastern quoll",
    "color": "Red",
    "size": "grande",
    "vacunado": true
  }, {
    "name": "Cat, ringtail",
    "color": "Maroon",
    "size": "mediano",
    "vacunado": true
  }, {
    "name": "Horned lark",
    "color": "Yellow",
    "size": "grande",
    "vacunado": true
  }, {
    "name": "Squirrel, thirteen-lined",
    "color": "Mauv",
    "size": "mediano",
    "vacunado": true
  }, {
    "name": "Bear, sloth",
    "color": "Orange",
    "size": "pequeño",
    "vacunado": false
  }, {
    "name": "Leopard, indian",
    "color": "Yellow",
    "size": "mediano",
    "vacunado": false
  }, {
    "name": "Striped hyena",
    "color": "Khaki",
    "size": "pequeño",
    "vacunado": true
  }, {
    "name": "Weaver, chestnut",
    "color": "Khaki",
    "size": "grande",
    "vacunado": false
  }, {
    "name": "Shelduck, common",
    "color": "Pink",
    "size": "grande",
    "vacunado": false
  }, {
    "name": "Swallow-tail gull",
    "color": "Red",
    "size": "mediano",
    "vacunado": false
  }, {
    "name": "Bird, pied butcher",
    "color": "Goldenrod",
    "size": "pequeño",
    "vacunado": false
  }, {
    "name": "Ringtail cat",
    "color": "Green",
    "size": "pequeño",
    "vacunado": false
  }, {
    "name": "Dragon, komodo",
    "color": "Violet",
    "size": "pequeño",
    "vacunado": false
  }, {
    "name": "Komodo dragon",
    "color": "Indigo",
    "size": "mediano",
    "vacunado": true
  }, {
    "name": "Cobra, egyptian",
    "color": "Orange",
    "size": "pequeño",
    "vacunado": false
  }, {
    "name": "Turkey vulture",
    "color": "Indigo",
    "size": "grande",
    "vacunado": false
  }];


  function perroObjeto2string(perro){
    return `
    <div class = "ficha-perro">
    <h2>${perro.name}</h2>
        <ul>
            <li><span>Color:</span>${perro.color}</li>
            <li><span>Tamaño:</span>${perro.size}</li>
            <li><span>Vacunado:</span>${perro.vacunado ? "si" : "no"}</li>
        </ul>
    </div>`
  }
  let codigo = "";
  for (let i = 0; i < datos.length; i++){
    codigo += perroObjeto2string(datos[i])
  }

  console.log(perroObjeto2string(datos[3]));
  document.getElementById("contenedor").innerHTML = codigo;



  