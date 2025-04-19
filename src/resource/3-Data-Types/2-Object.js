/*
  ¿Qué es importante y qué debemos aprender?

  Un objeto se puede declrar con un bloque {}, y se forma por clave: "valor"
  Un objeto, es un tipo de contenedor que puede tener varias variables y de varios tipos.

obj["property"]

bun add -D eslint

bunx eslint --init

*/



let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

// practicando objetos 1

var carros = {};

const Os = (carros = {
  nombre: "chevrolet",
  costo: 5000,
  año: 2000,
  venta: true,
  saludar: function () {
    console.log(carros);
  },
});

// imprimiendo

// console.log(carros);
carros.saludar();
