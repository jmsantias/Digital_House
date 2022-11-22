/* * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”. */

function unoAlCien() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

//unoAlCien();

/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */

let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

let indice = 6;

function devolverIndice(arr, i) {
  console.log(arr[i]);
}

//devolverIndice(array, indice);

/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

let meses = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function diasDelMes(numeroMes) {
  console.log(meses[numeroMes]);
}

//diasDelMes(2);

/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

function invertirDigitos(numero) {
  let invertir = 0;
  let resto = numero;
  do {
    invertir = invertir * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while (resto > 0);
  return invertir;
}

console.log(invertirDigitos(4562341366));

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */

let array2 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

function numeroRepetido(arr) {
  let repetidos = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] == arr[j]) {
        let repetidos2 = true; 

        for (let k = 0; k < repetidos.length; k++) {
          if (arr[i] == repetidos[k]) {
            repetidos2 = false;
          }
        }
        if (repetidos2 == true) {
          repetidos.push(arr[i]);
        }
      }
  }
  return repetidos;
}

console.log(numeroRepetido(array2));
