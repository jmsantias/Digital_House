// Declarar una matriz de 5 x 6 --> 5 filas x 6 columnas
// Filas x Columnas

let matriz = [
  [1, 2, 3, 4, 5, 6],
  [4, 5, 6, 5, 4, 5],
  [8, 5, 4, 7, 5, 6],
  [9, 6, 5, 8, 4, 5],
  [4, 5, 2, 3, 6, 5],
];

// Declarar una funcion que reciba la matriz por parametro y que multiplique todos los valores de la fila 2 por 3.

function multiplicarFilas(arr, nroFila) {
  for (let i = 0; i < arr[1].length; i++) {
    // 5 veces
    arr[nroFila][i] = arr[nroFila][i] * 3;
  }
}

/*  multiplicarFilas(matriz, 3);
 console.table(matriz); */

// Declarar una funcion que reciba a la matriz por parametro y que retorne la multiplicacion de una columna pasada por parametro

function multiplicarColumnas(arr, nroColumna) {
  let acumulador = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][nroColumna] % 2 === 0) {
      acumulador = acumulador * arr[i][nroColumna];
    }
  }
  return acumulador;
}

/* console.log(multiplicarColumnas(matriz, 1)); */

// Declarar una funcion que reciba a la matriz por parametro y que devuelva la suma de todos los valores que sean pares y multiplos de 6 o impares y multiplos de 3.

function ultimoEjercicio(arr) {
  let acumulador = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] % 6 === 0 || (arr[i][j] % 2 !== 0 && arr[i][j] % 3 === 0)) {
        acumulador += arr[i][j];
      }
    }
  }
  return acumulador;
};

console.log(ultimoEjercicio(matriz));

