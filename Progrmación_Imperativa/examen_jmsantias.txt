// EJ 1

const autos = [
  {
    marca: "Toyota",
    modelo: 2022,
    color: "rojo",
  },
  {
    marca: "Renault",
    modelo: 2015,
    color: "gris",
  },
  {
    marca: "Peugeot",
    modelo: 2017,
    color: "rojo",
  },
  {
    marca: "Fiat",
    modelo: 2020,
    color: "negro",
  },
];

function modelosPorAnio(arr) {
  let modelos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].modelo >= 2020) {
      modelos.push(arr[i]);
    }
  }
  return modelos;
}

console.log('EJ 1');
console.log(modelosPorAnio(autos));

// EJ 2

let arrayDeNumeros = [10, 22, 3, 8, 9, 104, 5, 6, 7, 15];

function bubbleSort(arr, string) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (
        (string === "ASC" && arr[j] > arr[j + 1]) ||
        (string === "DESC" && arr[j] < arr[j + 1])
      ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

console.log('EJ 2');
console.log(arrayDeNumeros);
bubbleSort(arrayDeNumeros, "ASC");
console.log(arrayDeNumeros);
bubbleSort(arrayDeNumeros, "DESC");
console.log(arrayDeNumeros);

// EJ 3

let matrix = [
  [1, 4, 7, 4],
  [5, 7, 6, 2],
  [6, 2, 3, 3],
  [2, 6, 8, 1],
];

// 1)

function arrayColumnas(arr, nroColumna) {
  let columna = [];

  for (let i = 0; i < arr.length; i++) {
    columna.push(arr[i][nroColumna]);
  }
  return columna;
}

console.log('EJ 3 Parte 1');
console.log(arrayColumnas(matrix, 2));

// 2)

function elementosImpares(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] % 2 != 0) {
        arr[i][j] = 0;
      }
    }
  }
}

console.log('EJ 3 Parte 2');
elementosImpares(matrix);
console.table(matrix);
