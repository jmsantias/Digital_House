// BUBBLE SORT - METODO DE ORDENAMIENTO

// arr.length = 8
let numeros = [6, 5, 1, 2, 4, 3, 8, 7]; // 6 > 5 ? true --> 
// numeros = [5,6,1,2,4,3,8,7]; // 6 > 1 
// numeros = [5,1,6,2,4,3,8,7]; // 6 > 2
// numeros = [5,1,2,6,4,3,8,7]; // 6 > 4
// numeros = [5,1,2,4,6,3,8,7]; // 6 > 3
// numeros = [5,1,2,4,3,6,8,7]; // 6 > 8
// numeros = [5,1,2,4,3,6,8,7]; // 8 > 7
// numeros = [5,1,2,4,3,6,7,8];


let nombres = [true, false, true, false, null, undefined];

let personas = [
    {
        id: 14,
        nombre: 'Mina'
    },
    {
        id: 10,
        nombre: 'Fede'
    },
    {
        id: 5,
        nombre: 'Santi'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]

function ordernarDeMenorAMayor(arr) {

    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length - 1; j++) {  
            if(arr[j] > arr[j + 1]){ 
                 let temp = arr[j]; 
                 arr[j] = arr[j + 1]; 
                 arr[j + 1] = temp; 
            }
        }
    }   

}

ordernarDeMenorAMayor(nombres);
console.log(nombres);


// let a = 5;
// let b = 10;

//ASCII


// a = 10;
// b = 5; 

// a = b; // a = 10 y b = 10

// let aux = a; // 5
// a = b; // 10
// b = aux; // 5


// console.log(' a: ', a);
// console.log(' b: ', b);
