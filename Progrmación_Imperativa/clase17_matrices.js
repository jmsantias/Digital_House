/**1
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [[4,8,9,10,13],[41,51,71,81,21],[11,61,81,51,41],[91,18,14,13,12],[14,41,61,31,17]];

console.table(matriz);
console.table(matriz, [2]);

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

function sumarMatriz(mat){
    let acumulador = 0;
    for (let i=0; i < mat.length; i++){
        for (let j=0; j < mat[i].length; j++){
            acumulador += mat[i][j];
        }
        
    }
    console.log(acumulador)
}

sumarMatriz(matriz)

/* 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100 */


function tablaNumerica(){
    let tabla=[];
    for (let i = 0; i < 100; i+=10){
        let fila=[];
        for (let j = 1; j <= 10; j++){
            fila.push(i+j);
        }
        tabla.push(fila);
    }
    return(tabla)
}

console.table(tablaNumerica());



/* 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. */


function diagonalPrincipal(tab){
    let diag1 = 0
    for (let i = 0; i<tab.length; i++){
        diag1 += tab[i][i];
    }
    return(diag1);
}

console.log(diagonalPrincipal(tablaNumerica()));

function diagonalSec(tab){
    let diag1 = 0
    for (let i = 0; i<tab.length; i++){
        diag1 += tab[i][9-i];
    }
    return(diag1);
}

console.log(diagonalSec(tablaNumerica()));


