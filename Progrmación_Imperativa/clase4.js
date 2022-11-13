// Variables

// let --> variable que podemos modificar su valor luego de declararla

let nombre = 'Daniel'; // DECLARANDO
let nombre2 = 'Belen'; 

// concole.log(nombre); *arroja "Daniel"*

nombre = 'Juan'; // REASIGNANDO

console.log(nombre); // *arroja 'Juan'*

// const --> variable constante, no podemos modificar su valor luego de haberla declarado

const numero = 16;

console.log(numero); // *arroja 16*

// numero = 20;

// console.log(numero); *arroja error* ya que la constante no puede ser modificada

// Tipos de dato: number, string, booleano, undefined, null, array, objeto literal, nan

let numeros = 12233; //number - numeros
let texto = 'hola soy un texto'; //string - cadena de textos
let bool = true; //booleanos - true or false
let nada = null;



// Operadores: asignación, suma, resta, multiplicación, división, incremento, decremento, modulo, concatenación, comparación simple y estricta

let miAsignacion = 24654;

console.log(10 + 20);
console.log(100 - 20);
console.log(10 * 10);
console.log(100 / 10);

// modulo

console.log(6 % 2); // * arroja 0 * el resto de la división
console.log(7 % 2); // * arroja 1 * el resto de la división

let unNumero = 10;
let numeroString = '10';
//console.log(++unNumero); 
//console.log(unNumero++);

//console.log(numeroString + 1);
//console.log(typeof unNumero);
//console.log(typeof numeroString);

// Comparación

let a = 25; //string
let b = 30; //number

//console.log( a < b );
//console.log( a < b );
//console.log( a == b ); comparación simple *valor* 
//console.log( a === b ); comparación estricta *valor y tipo de dato*

let v1 = true;
let v2 = 'true';

console.log(v1 == v2);