// - ¿Qué es importante y qué debemos aprender?

/*
  EXPLICACIÓN: "HOISTING" se traduce como "ELEVACIÓN", y hace referencia a una cosa.
  - ¡A QUE EXISTEN COSAS! ¡QUE SE EJECUTAN! ¡PRIMERO QUE OTRAS! (¿qué implica esto?) Que debemos tener cuidado y saber qué es lo primero.
*/

// EJEMPLO 1: Declaramos x, la función la llama, pero no imprime nada porque cuando la función llama a la variable, esta fue declarada pero no se le ha asignado NADA aún.
var x;
console.log(x); // undefined
x = 5;

// EJEMPLO 2: Declaramos la función, declaramos la variable, y ocurre el mismo proceso del EJEMPLO 1.
// PRIMERO se eleva la declaración de y, luego se llama la función (regresa vacío), y luego se asigna y.
console.log(y); // undefined
var y = 10;

// EJEMPLO 3: Aquí sí imprime el valor "15" porque se declara y se asigna antes de que la función llame a la variable.
var z = 15;
console.log(z);

/*
- Sabiendo y entendiendo el concepto de lo que es hoisting, voy a dejarte una lista con las cosas que se elevan primero que otras, en orden de prioridad de elevación

- var: declaracion
- funciones: Completas {Incluyendo todo lo que esta dentro de la funcion}
- Funciones como expreciones o arrow funcions
- let , const

NOTA Y RECOMENDACIÓN: No te preocupes. Aunque entiendo que puede ser agobiante y confuso tener que aprender esto, existen herramientas (como linters) que detectan y avisan sobre el mal uso del hoisting. Así que no es obligatorio dominarlo al 100% desde el principio, pero sí es muy recomendable conocer cómo funciona, ya que te dará mejores bases y evitarás errores difíciles de detectar en el futuro.
*/