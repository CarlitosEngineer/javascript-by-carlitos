# JavaScript Cheat Sheet (hoja de trucos para JavaScript)

## 2. All about Variables (Todo sobre las variables)

```JavaScript
var variable1 = "epale"; // Double quotes
let variable2 = `carlitos ${str}`; // Backtick
const variable3 = 'javasito'; // Single quotes
```
## 7. Loops and Iterations (Bucles e iteraciones)

| Comando       | Descripción                                                                                 |
|---------------|----------------------------------------------------------------------------------------------|
| `while`       | Ejecuta el bloque **mientras la condición sea verdadera**.                                  |
| `do...while`  | Ejecuta el bloque **una vez y luego repite si la condición es verdadera**.                  |
| `for`         | Bucle con **inicio, condición y actualización** integrados en una sola línea.              |
| `break`       | Termina el bucle **de inmediato**, incluso si la condición aún se cumple.                   |
| `continue`    | Omite la **iteración actual** del bucle y continúa con la siguiente.                        |
| `for...in`    | Itera sobre **las propiedades enumerables** de un objeto.                                   |
| `for...of`    | Itera sobre los **valores de una colección iterable** (arrays, strings, etc.).|

```JavaScript
// ----- // ----- // ----- // ----- // `while`
while (condición) {
  // bloque de código
}
// ----- // ----- // ----- // ----- // `do...while`
do {
// bloque de código
} while (condición);
// ----- // ----- // ----- // ----- // `for`
for (inicialización; condición; actualización) {
  // bloque de código
}
// ----- // ----- // ----- // ----- // `break` / `continue`
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // omite esta iteración (no imprime 3)
  }
  if (i === 7) {
    break; // termina el bucle cuando i llega a 7
  }
  console.log(i);
}
```

### 3. Data Types (Tipos de datos)

- Primitive Types (Tipos primitivos) [ `String` , `Undefined` , `Number` , `BigInt` , `Boolean` , `Null` , `Symbol` ]
- Objects (Objetos)
  - Built-in Objects (Objetos incorporados)
  - Prototypal Inheritance (Herencia prototipal)
  - Object Prototypes (Prototipos de objetos)
- `typeof` Operator (Operador `typeof`)

### 4. Type Casting (Conversión de tipos)

- Type Conversion vs Coercion (Conversión de tipos vs Coerción)
- Implicit Type Casting (Conversión implícita de tipos)
- Explicit Type Casting (Conversión explícita de tipos)

### 5. Data Structures (Estructuras de datos)

- Indexed Collections (Colecciones indexadas):
  - Arrays (Arreglos)
  - Typed Arrays (Arreglos tipados)
- Keyed Collections (Colecciones con clave):
  - `Map`
  - `WeakMap`
  - `Set`
  - `WeakSet`
- Structured Data (Datos estructurados):
  - JSON

### 6. Equality Comparisons (Comparaciones de igualdad)

- Value Comparison Operators (Operadores de comparación de valores):
  - `==`
  - `===`
  - `Object.is`
- Equality Algorithms (Algoritmos de igualdad):
  - `IsLooselyEqual`
  - `IsStrictlyEqual`
  - `SameValueZero`
  - `SameValue`



### 8. Control Flow (Flujo de control)

- Conditional Statements (Sentencias condicionales):
  - `if...else`
  - `switch`
- Exception Handling (Manejo de excepciones):
  - `throw` statement (Sentencia `throw`)
  - `try, catch, finally`
  - Error Objects (Objetos de error)

### 9. Expressions and Operators (Expresiones y operadores)

- Conditional Operators (Operadores condicionales)
- Comma Operators (Operadores de coma)
- Unary Operators (Operadores unarios)
- Assignment Operators (Operadores de asignación)
- Comparison Operators (Operadores de comparación)
- Arithmetic Operators (Operadores aritméticos)
- Bitwise Operators (Operadores bit a bit)
- Logical Operators (Operadores lógicos)
- BigInt Operators (Operadores de `BigInt`)
- String Operators (Operadores de cadena)

### 10. Functions (Funciones)

- Function Parameters (Parámetros de función):
  - Default Params (Valores por defecto)
  - Rest Parameters (Parámetros rest)
- Arrow Functions (Funciones flecha)
- IIFEs (Funciones inmediatamente invocadas)
- `arguments` Object (Objeto `arguments`)
- Scope & Function Stack (Ámbito y pila de funciones):
  - Recursion (Recursión)
  - Lexical Scope (Ámbito léxico)
  - Closures (Clausuras)
- Built-in Functions (Funciones incorporadas)

### 11. DOM APIs (APIs del DOM)

### 12. Strict Mode (Modo estricto)

### 13. Using `this` Keyword (Uso de la palabra clave `this`)

- in a Method (En un método)
- in a Function (En una función)
- Using it alone (Usándolo solo)
- in Event Handlers (En manejadores de eventos)
- in Arrow Functions (En funciones flecha)
- Function Borrowing (Préstamo de funciones)
- Explicit Binding (Vinculación explícita)
  - `call`
  - `apply`
  - `bind`

### 14. Asynchronous JavaScript (JavaScript asíncrono)

- `setTimeout` and `setInterval`
- Event Loop (Bucle de eventos)
- Callbacks (Funciones de retorno):
  - Callback Hell (Infierno de callbacks)
- Promises (Promesas):
  - `async/await`

### 15. Working with APIs (Trabajo con APIs)

- Using `fetch` (Uso de `fetch`)
- Using `XMLHTTPRequest` (Uso de `XMLHTTPRequest`)

### 16. Classes (Clases)

### 17. Iterators and Generators (Iteradores y generadores)

### 18. Modules in JavaScript (Módulos en JavaScript)

- ESM (Módulos de ECMAScript)
- CommonJS

### 19. Memory Management (Gestión de memoria)

- Memory Lifecycle (Ciclo de vida de la memoria)
- Garbage Collection (Recolección de basura)

### 20. Using Browser DevTools (Herramientas de desarrollo en el navegador)

- Debugging Issues (Depuración de problemas)
- Debugging Memory Leaks (Depuración de fugas de memoria)
- Performance Optimization (Optimización del rendimiento)