// - ¿Qué es importante y qué debemos aprender?

// Existen varias formas de escribir código, pero no podemos escribir como se nos dé la gana,
// porque otros deben leer nuestro código y viceversa.
// La idea es comunicarnos mejor entre nosotros, ya que programar es un trabajo en equipo.

// Un ejemplo de esto es el nombrado de variables. Aquí te dejo algunas convenciones comunes:

let camelCaseExample;        // ✅ camelCase → común en variables y funciones (JavaScript)
let PascalCaseExample;       // ✅ PascalCase → común en clases y constructores
let snake_case_example;      // ✅ snake_case → común en otros lenguajes (Python, bases de datos)
const SCREAMING_SNAKE_CASE = "CONSTANTE"; // ✅ Constantes globales (por convención)

// ❌ Ejemplos no recomendados (aunque válidos en JS, no son buenas prácticas):

let MiVariable;              // Mezcla de estilos (poco legible)
let Esto_Es_Lo_Mismo;        // Mezcla innecesaria
let esUna_variable_Mala;     // Mezcla de snake y camel
let CONSTANTE_no_constante;  // Nombre engañoso

/*
    NOTA Y RECOMENDACIÓN: No te preocupes. Aunque entiendo que puede ser agobiante y confuso tener que aprender esto,
    existen herramientas (como linters) que detectan y avisan sobre el mal uso del nombrado de variables.
    Así que no es obligatorio dominarlo al 100% desde el principio, pero sí es muy recomendable conocer cómo funciona,
    ya que te dará mejores bases y evitarás errores difíciles de detectar en el futuro.
*/
