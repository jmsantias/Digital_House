// Arrays

let miArray = [1, 2, 3, 4, 5, 6];
let miOtroArray = ['Sofi', 'Juan', 'Fede'];
let array = [true, false, true, false];
let arrayVariado = [2565, [1,2,5,4,6], miOtroArray, false, null];


// console.log(miOtroArray[1]);
// console.log(miArray.length);
// 6 elementos
// la ultima posicion es la nro 5

miOtroArray.push('Fernando');
// console.log(miOtroArray);
// console.log(miOtroArray.indexOf('Fede'));
// console.log(miOtroArray.includes('Fed'));

// miOtroArray.pop();
// miOtroArray.shift();
// console.log(miOtroArray);






// A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.

// Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, agregar al arrayCorreoDescartados.

// Mostrar por pantalla la cantidad y los elementos de cada array.


let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com', 'thanosdigitalhouse.com','thanos@digitalhouse.com'
]; // 5 elementos ; ultima posicion del array = 4

  /* array de correos admitidos */

let arrayCorreosAdmitidos = [
       'thor@digitalhouse.com',
      'tucuMan@digitalhouse.com',
      'wanda@digitalhouse.com'
];


let arrayCorreosDescartados = [];


function verificarCorreos(array){
    
    let miNuevoArray = []; // scope local

    for(let i = 0; i < array.length; i++){ 
      
        if(array[i].includes('@')){
        arrayCorreosAdmitidos.push(array[i]);
      } else {
        arrayCorreosDescartados.push(array[i]);
      }

    }

}

// console.log(arrayCorreosAdmitidos);
// console.log(arrayCorreosDescartados);

verificarCorreos(arrayCorreosPendientes);

// console.log('Luego de ejecutar la funcion');

// console.log(arrayCorreosAdmitidos);





// MESA DE TRABAJO

/* En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
consola.

1. let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

1- undefined, ya que no hay elementos en la posición 5.

2. let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])

2- "Ironman", ya que es el nombre posicionado en el indice 5.

3. let str = “un string cualquiera”
let arrayAleatorio= ["Digital", "House", “true”, "string", "123","false", “54”, str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])

3- "un string cualquiera", ya que al restarle 1 al numero de elementos, se devolvera la variable posicionada en el indice 7.*/

/* El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:

1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente. */

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase(). */

function mayusculas(array) {
  let cambioMayuscula = [];
  for (let i = 0; i < array.length; i++) {
    cambioMayuscula.push(array[i].toUpperCase());
    //array[i] = array[i].toUpperCase();
  }
  return cambioMayuscula;
}

peliculas = mayusculas(peliculas);

console.log(mayusculas(peliculas));



/* 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas. */

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function unionArrays(array1, array2){
    array2 = mayusculas(array2);

    for(let i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }
}

