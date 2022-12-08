




















// EJERCICIO MESA DE TRABAJO

/*
Micro desafio 1 => Respuesta 30

Micro desafio 2 => Respuesta 20
*/

//1) Crear una función que convierta pulgadas en centímetros.

console.log("--------------EJERCICIO 1--------------");

function pulgadasACm(numero) {
  return numero * 2.54;
}

console.log(pulgadasACm(2));

//2) Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

console.log("--------------EJERCICIO 2--------------");

function convertirAURL(palabra) {
  return "http://www." + palabra + ".com";
}

console.log(convertirAURL("homero"));

//3) Crear una función que recibe un string y devuelve la misma frase pero con admiración.

console.log("--------------EJERCICIO 3--------------");

function admiracion(palabra) {
  return palabra + "!!!";
}

console.log(admiracion("batman"));

//4) Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

console.log("--------------EJERCICIO 4--------------");

function edadPerro(edad) {
  return edad * 7;
}

console.log(edadPerro(5));

let edadPerro2 = (edad) => edad * 7;

console.log(edadPerro2(2));

//5) Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.

console.log("--------------EJERCICIO 5--------------");

function horaTrabajo(sueldo) {
  return sueldo / 40;
}

console.log(horaTrabajo(50000));

//6) Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

console.log("--------------EJERCICIO 6--------------");

function calculadorIMC(altura, peso) {
  return peso / (altura * altura);
}

console.log(calculadorIMC(1.7, 75).toFixed(2));

//7) Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
//Investigá qué hace el método de strings .toUpperCase()

console.log("--------------EJERCICIO 7--------------");

function minusculaAMayuscula(palabra) {
  return palabra.toUpperCase();
}

console.log(minusculaAMayuscula("superman"));

//8) Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.

console.log("--------------EJERCICIO 8--------------");

function tipoDeValor(valor) {
  return typeof valor;
}

console.log(tipoDeValor(67));

//9) Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.

console.log("--------------EJERCICIO 9--------------");

function circunferencia(radio) {
  return radio * 2 * Math.PI;
}

console.log(circunferencia(3).toFixed(2));
