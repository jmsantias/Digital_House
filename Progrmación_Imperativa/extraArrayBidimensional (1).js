/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
  [14, 11, 15], // indices --> 0
  [24, 34, 22], // indices --> 1
  [33, 30, 21], // indices --> 2
];

/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/

function elementosPares(arr) {
  let pares = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] % 2 === 0) {
        pares.push(arr[i][j]);
      }
    }
  }
  return pares;
}

//console.log(elementosPares(matriz));

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

function elementosImpares(arr) {
  let impares = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] % 2 != 0) {
        impares.push(arr[i][j]);
      }
    }
  }
  return impares;
}

//console.log(elementosImpares(matriz));

/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

function mayorA20(arr) {
  let mayores = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > 20) {
        mayores.push(arr[i][j]);
      }
    }
  }
  return mayores;
}

//console.log(mayorA20(matriz));

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

function primeraDiagonal(arr) {
  let diag = [];
  for (let i = 0; i < arr.length; i++) {
    diag.push(arr[i][i]);
  }
  return diag;
}

console.log(primeraDiagonal(matriz));
