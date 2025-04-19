/*
  ¿Qué es importante y qué debemos aprender?
    En JavaScript, los **tipos de datos primitivos** son los valores más simples y fundamentales. 
        Se llaman "primitivos" porque **no son objetos**, y **no tienen métodos, ni propiedades**.

            Tipos primitivos:
            - undefined
            - null
            - boolean
            - number
            - bigint
            - string
            - symbol

  Diferencia entre `undefined` y `null`:
  - `undefined`: la variable fue declarada pero **aún no tiene valor asignado**.
  - `null`: representa **la ausencia intencional de valor** (es como decir: “esto debería ser un objeto, pero no lo es”).
  - Aunque `null` es un tipo primitivo su tipo con `typeof null` da `"object"`.
*/

// undefined: variable declarada pero no asignada
let sinValor;
console.log(sinValor); // undefined

// null: ausencia intencional de valor
let usuario = null;
console.log(usuario); // null

// boolean: verdadero o falso
let esActivo = true;
console.log(esActivo); // true

// number: números (enteros o decimales)
let edad = 30;
console.log(edad); // 30

// bigint: números muy grandes
let numeroGrande = 12334563534563567890123456789012345678901234567890n;
console.log(numeroGrande);

// string: cadenas de texto
let nombre = "Carlos";
console.log(nombre); // "Carlos"

// symbol: valor único e inmutable
let id = Symbol("id");
console.log(id); // Symbol(id)