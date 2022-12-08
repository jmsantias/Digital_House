// Condicionales

// if / else / else if

let a = 10;
let b = 15;

if (a > b) {
  console.log("a es mayor a b");
} else if (a == b) {
  console.log("a es igual a b");
} else {
  console.log("b es mayor que a");
}

function miFuncion(a, b) {
  if (a > b && a % 2 === 0) {
    return "a es mayor a b y a es par";
  } else if (a === b) {
    return "a es igual a b";
  } else {
    return "b es mayor que a";
  }
}

console.log(miFuncion(8, 9));

// Crear una función puedeSubir() que reciba dos parámetros: altura de las peronsa y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
// Debe medir más o igual de 1,40m y menos de 2m.
// Si mide menos de 1,40m hasta 1,20m, debería venir acompañado.
// Si mide menos de 1,20m, no podrá subir ni acompañado.

function puedeSubir(altura, vieneAcompaniado) {
  if (altura >= 140 && altura < 200) {
    return true;
  } else if (altura < 140 && altura >= 120 && vieneAcompaniado === true) {
    return true;
  } else {
    return false;
  }
}

console.log(puedeSubir(190, true));

// Mesa de trabajo clase 7

// EJ 1

function totalAPagar(vehiculo, litrosConsumidos) {
    let consumo;
    if (vehiculo == "coche") {
      consumo = litrosConsumidos * 86;
    } else if (vehiculo == "moto") {
      consumo = litrosConsumidos * 70;
    } else if (vehiculo == "autobús") {
      consumo = litrosConsumidos * 55;
    }
  
    if (litrosConsumidos <= 25) {
      return consumo + 50;
    } else {
      return consumo + 25;
    }
  }
  
  console.log(totalAPagar("coche", 25));
  
  // EJ 2
  
  let edad = -5; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
  let mensaje;
  
  if (edad < 0) {
      mensaje = "Error, edad inválida. Por favor ingrese un número válido.";
  } else {
    if (edad < 18) {
      mensaje = "No puede pasar al bar.";
    } else if (edad < 21) {
      mensaje = "Puede pasar al bar, pero no puede tomar alcohol.";
    } else if (edad == 21){
      mensaje = "Felicitaciones! Llegaste a la mayoría de edad, podes pasar y tomar alcohol.";
    } else {
      mensaje = "Puede pasar al bar y tomar alcohol.";
    }
    if(edad % 2 != 0){
      mensaje += " ¿Sabías que tu edad es impar?";
    }
  }
  
  console.log(mensaje);
  
  // EJ 3 
  
  function totalAPagarSanguche(base, tipoDePan, conQueso, conTomate, conLechuga, conCebolla, conMayonesa, conMostaza) {
     /*  let consumo;
      
      if (vehiculo == "coche") {
        consumo = litrosConsumidos * 86;
      } else if (vehiculo == "moto") {
        consumo = litrosConsumidos * 70;
      } else if (vehiculo == "autobús") {
        consumo = litrosConsumidos * 55;
      }
    
      if (litrosConsumidos <= 25) {
        return consumo + 50;
      } else {
        return consumo + 25;
      }
    } */
}