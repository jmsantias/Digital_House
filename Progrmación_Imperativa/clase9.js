// Clase de cierre

// declarar una funcion que reciba 3 noras por parametro y devuelva el promedio de las mismas

console.log("EJ 1");

/* function promedioNotas(a, b, c){
    return ((a + b + c) / 3);
}

console.log(promedioNotas(5, 10, 8)); */

function promedioNotas(a, b, c) {
  let promedio = (a + b + c) / 3;

  if (promedio < 5) {
    return `No aprobado, tu nota es ${promedio}`;
  } else if (promedio >= 7) {
    return `Estás aprobado, tu nota es ${promedio}`;
  } else {
    return `Debes rendir recuperatorio, tu nota es ${promedio}`;
  }
}

console.log(promedioNotas(5, 10, 8));

// Elaborar un programa que permita ingresar un numero entero y muestre la tabla de multiplicar de dicho numero

console.log("EJ 2");

function mostrarTabla(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
    //console.log(numero + " * " + i + " = "  + numero * i);
  }
}

mostrarTabla(5);


// MESA DE TRABAJO

const prompt = require("prompt-sync")({ sigint: true });

// EJ 1

/* Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log(). */

console.log("EJ 1");

function ingresarFrase() {
  //let frase = prompt('Ingrese una frase: ' );
  console.log(prompt("Ingrese una frase: "));
}

ingresarFrase();

// EJ 2

/* Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!". */

console.log("EJ 2");

function ingreseSuNombre() {
  let nombre = prompt("Ingrese su nombre: ");
  console.log(`Hola ${nombre}!`);
}

ingreseSuNombre();

// EJ 3

/* Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario. */

console.log("EJ 3");

function sumarNumeros(a, b) {
  if (a == undefined) {
    a = parseFloat(prompt("Numero a: "));
  }

  if (b == undefined) {
    b = parseFloat(prompt("Numero b: "));
  }

  console.log(a + b);
}

sumarNumeros();

// EJ 4

/* Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario

ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”. */

console.log("EJ 4");

function calcularEdad() {
  let year = parseInt(prompt("Ingrese su año de nacimiento: "));
  console.log(`Tienes ${2022 - year} años`);
}

calcularEdad();

// EJ 5

/* Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!" */

console.log("EJ 5");

function numeroAleatorio() {
  let x = Math.floor(Math.random() * 10 + 1);
  let adivinar = prompt("Adivine el numero del 1 al 10: ");

  if (adivinar == x) {
    console.log("Felicitaciones, ese era!");
  } else {
    console.log(`Lo siento, intenta nuevamente! El numero era ${x}`);
  }
}

numeroAleatorio();


// EJ 6

/* Escribí un programa que imprima los números pares del 0 al
100. */

console.log("EJ 6");

function numerosPares(){
  for(let i=0; i<=100; i+=2){
    console.log(i);
  }
}

numerosPares()


// EJ 7

/* Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"]; */

console.log("EJ 7");

const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];
//console.log(nombres.length);
for (let i=0; i <= 4; i++){
  console.log(nombres[i])
}

// EJ 8

/* Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este. */

console.log("EJ 8");

function porcentaje(numero){
  if (numero >= 500){
    console.log(numero*18/100)
  }
}

porcentaje(1000)

// EJ 9
/* Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1. */

console.log("EJ 9");

function elemento(arreglo){
  if (arreglo.length < 3){
    return arreglo[arreglo.length-1];
  }
  return arreglo[2];
}
const prueba = ["Pedro","Pablo"];//,"Maria", "Juan", "Diana"];

console.log(elemento(prueba))

// EJ 10
/* Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras. */

console.log("EJ 10");

natural = prompt("ingrese numero hasta dos cifras: ")
if (natural <10){
  console.log(10-natural);
}
else{
  console.log(100-natural);
}

// EJ 11
/* Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar. */

console.log("EJ 11");

function promedioN(notas){
  let nNotas = notas.length;
  let acumulador = 0
  for (let i=0;i<nNotas;i++){
    acumulador+=notas[i];
  }

  console.log(acumulador/nNotas)
}

promedioN([8,7,9,10]);


// EJ 12
/* Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado. */

console.log("EJ 12");

function sumatoriaNatural(numero){
  let sumatoria = 0;
  for(let i=0; i<=numero; i++){
    sumatoria+=i
  }
  console.log(sumatoria);
}

sumatoriaNatural(100);