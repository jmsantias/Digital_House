/* Se está realizando el desarrollo de una aplicación para control de gastos.
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada
 columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1,
 columna 1, dia 2, etcétera. */

// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada
// fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila
// 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.

let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
];

function gastoSemanal(mat, numSemana) {
  let gastoSemana = 0;
  for (let i = 0; i < mat[numSemana - 1].length; i++) {
    gastoSemana += mat[numSemana - 1][i];
  }
  return gastoSemana;
}

// console.log(gastoSemanal(gastos, 4));

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar
// el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta
// lo que ocurre con las filas, ya que las columnas también comienzan en 0.

function gastoDiaSemana(mat, dia) {
  let gastoDia = 0;
  for (let i = 0; i < mat.length; i++) {
    gastoDia += mat[i][dia - 1];
  }
  return gastoDia;
}

//console.log(gastoDiaSemana(gastos, 1));

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
// resolver este último punto? Si es lo mismo

function gastoMes(mat) {
  let gasto = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      gasto += mat[i][j];
    }
  }
  return gasto;
}

console.log(gastoMes(gastos));

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que
// más gastos se realizaron.

function mayorSem(mat) {
  let semanaC = 0;
  let gastoS = 0;
  let semana = 0;
  for (let i = 0; i < mat.length; i++) {
    semanaC = gastoSemanal(mat, i + 1);
    if (semanaC > gastoS) {
      gastoS = semanaC;
      semana = i + 1;
    }
  }
  return { semana, gastoS };
}

console.log(mayorSem(gastos));

function mayorDia(mat) {
  let diaC = 0;
  let gastoS = 0;
  let dia = 0;
  for (let i = 0; i < mat[0].length; i++) {
    diaC = gastoDiaSemana(mat, i + 1);
    if (diaC > gastoS) {
      gastoS = diaC;
      dia = i + 1;
    }
  }
  return { dia, gastoS };
}

console.log(mayorDia(gastos));

// Posibles matrices para comprobar los resultados.
/*          Día 1 Día 2 Día 3 Día 4 Día 5 Día 6 Día 7
Semana 1    1135  2500   900  1600  2800  3650  1100
Semana 2    1750  1890  1900  1300   898  1750  2800
Semana 3    1700  1150  1690  1900  1770  4500  2560
Semana 4     800  1250  1430  2100  1980  1270   950
 */

/* Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000. */

let array = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

function sumarValores(arr) {
  let acumulador = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= 10 && arr[i][j] < 1000) {
        acumulador += arr[i][j];
      }
    }
  }
  return acumulador;
}

console.log(sumarValores(array));
