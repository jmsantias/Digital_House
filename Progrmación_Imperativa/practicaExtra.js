// A - Nivel 1
// 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos

function sumaNumeros(a, b) {
  console.log(a + b);
}
//sumaNumeros(5,10);

// 2 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos, si el primer parametro es mayor, caso contrario retornar la resta

function operacionNumero(a, b) {
  if (a > b) {
    console.log(a + b);
  } else {
    console.log(a - b);
  }
}
//operacionNumero(10,4);
//operacionNumero(5,10);

// 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total, si el resultado es mayor o igual a 7, retornar 'Aprobado', caso contrario retornar 'otra chance '

function operacionCuatroNumeros(a, b, c, d) {
  let suma = a + b + c + d;
  if (suma >= 7) {
    return "Aprobado";
  } else {
    return "Otra chance";
  }
}
//console.log(operacionCuatroNumeros(1, 2, 2, 1));
//console.log(operacionCuatroNumeros(4, 9, 5, 8));

// 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total si el el resultado es par, retornar la mitad del total, caso contrario retornar el doble del total

function operacionPares(a, b, c, d) {
  let suma = a + b + c + d;
  if (suma % 2 === 0) {
    return suma / 2;
  } else {
    return suma * 2;
  }
}

//console.log(operacionPares(2,4,6,4));
//console.log(operacionPares(1,4,5,9));

// B - Nivel 2

// Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

let arrayEdades = [18, 20, 21, 35, 67, 50, 18, 14, 7];

// 1 - Funcion que reciba un array de edades y retorne el promedio

function promedioArray(array) {
  let suma = 0;
  let promedio;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return (promedio = suma / array.length);
}

//console.log(promedioArray(arrayEdades));

// 2 - Funcion que reciba un array de edades y retorne el mayor elemento

function encontrarElMayor(arr) {
  let elMayor = arr[0];
  for (let i = 1; arr.length; i++) {
    if (arr[i] > elMayor) {
      elMayor = arr[i];
    }
  }
  return elMayor;
}

console.log(encontrarElMayor(arrayEdades));
