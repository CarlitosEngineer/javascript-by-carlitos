# Roadmap para aprender JavaScript

Este documento es un borrador para estructurar los temas esenciales al aprender JavaScript. Incluye conceptos básicos, intermedios y avanzados, organizados en capítulos para facilitar su aprendizaje.

---

## Propósito del Roadmap

Este roadmap está diseñado para principiantes que deseen aprender JavaScript desde cero, así como para desarrolladores que buscan reforzar conceptos intermedios y avanzados.

---

## Índice

1. [Introducción a JavaScript](#introducción-a-javascript)  
2. [Variables en JavaScript](#variables-en-javascript)  
3. [Tipos de Datos](#tipos-de-datos)  
4. [Conversión de Tipos](#conversión-de-tipos)  
5. [Estructuras de Datos](#estructuras-de-datos)  
6. [Comparaciones de Igualdad](#comparaciones-de-igualdad)  
7. [Bucles e Iteraciones](#bucles-e-iteraciones)  
8. [Flujo de Control](#flujo-de-control)  
9. [Expresiones y Operadores](#expresiones-y-operadores)  
10. [Funciones](#funciones)  
11. [DOM y APIs](#dom-y-apis)  
12. [Modo Estricto](#modo-estricto)  
13. [Uso del Keyword `this`](#uso-del-keyword-this)  
14. [JavaScript Asíncrono](#javascript-asíncrono)  
15. [Trabajando con APIs](#trabajando-con-apis)  
16. [Clases](#clases)  
17. [Iteradores y Generadores](#iteradores-y-generadores)  
18. [Módulos en JavaScript](#módulos-en-javascript)  
19. [Gestión de Memoria](#gestión-de-memoria)  
20. [Herramientas para Desarrolladores en el Navegador](#herramientas-para-desarrolladores-en-el-navegador)

---

## Detalles de cada capítulo

### 1. Introducción a JavaScript
- ¿Qué es JavaScript?  
- Historia de JavaScript  
- Versiones de JavaScript  
- Cómo ejecutar JavaScript  

### 2. Variables en JavaScript
- Declaración de variables:  
  - `var`  
  - `let`  
  - `const`  
- Hoisting  
- Reglas para nombrar variables  
- Ámbito de las variables:  
  - Block  
  - Function  
  - Global  

### 3. Tipos de Datos
- Tipos primitivos:  
  - `String`  
  - `Undefined`  
  - `Number`  
  - `BigInt`  
  - `Boolean`  
  - `Null`  
  - `Symbol`  
- Tipos no primitivos:  
  - Objetos  
    - Objetos integrados  
    - Herencia prototípica  
    - Prototipos de objetos  
- Operador `typeof`  

### 4. Conversión de Tipos
- Diferencia entre conversión y coerción  
- Tipos de conversión:  
  - Implícita  
  - Explícita  

### 5. Estructuras de Datos
- Colecciones indexadas:  
  - Arrays  
  - Typed Arrays  
- Colecciones clave-valor:  
  - `Map`  
  - `WeakMap`  
  - `Set`  
  - `WeakSet`  
- Datos estructurados:  
  - JSON  

### 6. Comparaciones de Igualdad
- Operadores de comparación de valores:  
  - `==`  
  - `===`  
  - `Object.is`  
- Algoritmos de igualdad:  
  - `IsLooselyEqual`  
  - `IsStrictlyEqual`  
  - `SameValueZero`  
  - `SameValue`  

### 7. Bucles e Iteraciones
- `while` y `do...while`  
- `for` y `for...in`  
- `for...of`  
- Uso de `break` y `continue`  
  ```javascript
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }

### 8. Flujo de Control
- Declaraciones condicionales:  
  - `if...else`  
  - `switch`  
- Manejo de excepciones:  
  - `throw`  
  - `try...catch...finally`  
- Objetos de error  

### 9. Expresiones y Operadores
- Operadores condicionales  
- Operadores de coma  
- Operadores unarios  
- Operadores de asignación  
- Operadores de comparación  
- Operadores aritméticos  
- Operadores bit a bit  
- Operadores lógicos  
- Operadores para BigInt  
- Operadores de cadenas  

### 10. Funciones
- Parámetros de funciones:  
  - Valores predeterminados  
  - Parámetros Rest  
- Arrow functions  
- IIFEs (Funciones inmediatamente invocadas)  
- Objeto `arguments`  
- Ámbito y pila de funciones:  
  - Recursión  
  - Ámbito léxico  
  - Closures  
- Funciones integradas  

### 11. DOM y APIs
- Introducción a las APIs del DOM  

### 12. Modo Estricto
- Ventajas y restricciones del modo estricto  

### 13. Uso del Keyword `this`
- Uso en un método  
- Uso en una función  
- Uso de `this` solo (en un contexto global o vacío)  
- Uso en manejadores de eventos  
- Uso en arrow functions  

### 14. JavaScript Asíncrono
- `setTimeout` y `setInterval`  
- Event Loop  
- Callbacks y callback hell  
- Promesas:  
  - `async/await`  

### 15. Trabajando con APIs
- Uso de `fetch`  
- Uso de `XMLHTTPRequest`  

### 16. Clases
- Introducción a las clases  

### 17. Iteradores y Generadores
- Uso y creación de iteradores y generadores  

### 18. Módulos en JavaScript
- ECMAScript Modules (ESM)  
- CommonJS  

### 19. Gestión de Memoria
- Ciclo de vida de la memoria  
- Recolección de basura  

### 20. Herramientas para Desarrolladores en el Navegador
- Depuración de problemas  
- Depuración de fugas de memoria  
- Optimización del rendimiento  
