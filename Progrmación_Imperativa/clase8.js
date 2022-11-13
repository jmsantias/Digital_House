// Ciclos

// Ejercicio playground for 1

function loro(texto) {
  for (let i = 1; i <= 5; i++) {
    console.log(texto);
  }
}

loro("hola");

// Declarar una funcion que imprima 10 numeros por consola, del 1 al 10.

function mostrarNumeros() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
mostrarNumeros();

// Ejercicio playground for 2

function noParesDeContarImparesHasta(numero) {
  let acumulador = 0;

  for (let i = 0; i <= numero; i++) {
    if(i % 2 !== 0){
        acumulador++
    }
  }

  return acumulador;
}

console.log(noParesDeContarImparesHasta(10));

// 10 = 5 numeros impares
// 12 = 6 numeros impares


// Mesa de trabajo equipo 9 

// EJ 1
console.log("EJ 1");

function numerosSiguientes(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(++numero);
  }
}

numerosSiguientes(10);

// EJ 2
console.log("EJ 2");

function tresEnTres() {
  //let numero = 5;
  for (let i = 5; i /* + numero */ <= 20; i++) {
    console.log(i/*  + numero */);
    i = i + 2;
    
    /* if (i % 3 === 0) {
      console.log(numero + i);
    } */
  }
}

// Tres opciones 

tresEnTres();

// EJ 3
console.log("EJ 3");

function sumatoria(){
let acumulador = 0;
    for(let i = 0; i <= 100; i++){
        acumulador = acumulador + i;
 }
 return acumulador;
}

console.log(sumatoria());

// EJ 4
console.log("EJ 4");

function factorial(){
  let acumulador = 1;
  for(let i = 1; i <= numero; i++){
    acumulador = (i * acumulador)
  }
  return acumulador;
} 

console.log(factorial(5));

// EJ 5
console.log("EJ 5");

function fibonaci(numero){
  let anterior = 0;
  let ultimo = 1;
  let nuevo = 0;
  for (let i=0; i < numero; i++){
    console.log(nuevo)
    nuevo = ultimo + anterior
    anterior = ultimo;
    ultimo = nuevo;
  }
} 

fibonaci(8);