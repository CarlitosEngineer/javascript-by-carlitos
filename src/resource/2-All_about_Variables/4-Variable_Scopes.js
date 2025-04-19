// - ¿Qué es importante y qué debemos aprender?

// - "SCOPE" se traduce como "ALCANCE", que debemos aprender de esto?
// (Que todas las varaibles tienen un (scope) alance, un limite de hasta donde pueden ser llamadas o usadas).

// Existen 3 tipos de alcances [ Block , Function , Global]

// el alcance por bloque se refeire a que la variable solo existe dentro de esto {}
// el alcance por funcion se refeire a que la variable solo existe dentro de func () {aqui}
// global, es que la variable alcance en todo lugar del codigo.

var variable3 = 2; // SCOPE; GLOBAL

function myFunction() {
    var variable1 = "epalongo"; // SCOPE; FUNCTION
    {
        var variable2 = 2; // SCOPE; 
    }
    console.log(variable1, variable2, variable3)
}

myFunction();