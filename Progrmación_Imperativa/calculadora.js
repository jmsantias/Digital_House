const prompt = require("prompt-sync")({ sigint: true });

// npm i prompt-sync

// CALCULADORA

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let numero = parseFloat(prompt("Indique un numero: "));
let numero1 = parseFloat(prompt("Indique un numero: "));
let numero2 = parseFloat(prompt("Indique un numero: "));
console.log(sumar(numero1, numero2));
console.log(restar(numero1, numero2));
console.log(multiplicar(numero1, numero2));
console.log(dividir(numero1, numero2));

console.log(dividir(10, 0));

function cuadradoDeUnNumero(num){
    return num **2;
}

function promedioDeTresNumeros(num, num1, num2){
    return (num + num1 + num2)/3;
}

function calcularPorcentaje(num, num1){
    return num * (num1/100);
}

function generadorDePorcentaje(num, num1){
    return dividir(multiplicar(num, 100), num1) + "%";
}

console.log("-------------- Testeo de Operaciones / Calculadora Avanzada --------------");

console.log(cuadradoDeUnNumero(numero));
console.log(promedioDeTresNumeros(numero, numero1, numero2));
console.log(calcularPorcentaje(numero, numero1));
console.log(generadorDePorcentaje(numero, numero1));



