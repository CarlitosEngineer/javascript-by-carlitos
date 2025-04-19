# 📌 **JavaScript Cheat Sheet**

## 2. All about Variables (Todo sobre las variables)

### Variable Declarations (Declaración de variables) [ `var` , `let` , `const` ]

```JavaScript
const variable3 = 'javasito'; // Single quotes
var variable2 = "epale"; // Double quotes
let variable1 = `carlitos ${str}`; // Backtick
```

### Hoisting (Elevación)

- `var`: declaracion
- `funciones`: Completas {Incluyendo todo lo que esta dentro de la funcion}
- Funciones como expreciones o arrow funcions
- `let` , `const`

- Variable Scope (Ámbito de variables):
  - Block (Bloque)
  - Function (Función)
  - Global (Global)

```JavaScript
var variable3 = 2; // SCOPE; GLOBAL
function myFunction() {
    var variable1 = "epalongo"; // SCOPE; FUNCTION
    {
        var variable2 = 2; // SCOPE; 
    }
    console.log(variable1, variable2, variable3)
}
myFunction();
```

---

### Variable Naming Rules (Reglas de nombres de variables)

Recomiendo usar estos Linters para la mejora del codigo

- Biome (Primary)
- ESlint (Alternative)

---

### 3. Data Types (Tipos de datos)

Primitive Types (Tipos primitivos):
`String`
`Undefined`
`Number`
`BigInt`
`Boolean`
`Null`
`Symbol`
Objects (Objetos)
Built-in Objects (Objetos incorporados)
Prototypal Inheritance (Herencia prototipal)
Object Prototypes (Prototipos de objetos)
`typeof` Operator (Operador `typeof`)