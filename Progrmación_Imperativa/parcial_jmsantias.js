// EJ 1

console.log("------ EJ 1 ------");

function operacionesPares(a, b) {
  if (a % 2 == 0 && b % 2 == 0) {
    return a * b;
  } else if (a % 2 == 0 || b % 2 == 0) {
    return a + b;
  } else {
    return "ninguno es par";
  }
}

console.log(operacionesPares(4, 2));
console.log(operacionesPares(4, 3));
console.log(operacionesPares(3, 3));

function multiploDeCinco(num) {
  let suma = num + 20;
  if (suma % 5 === 0) {
    return `${num} + 20 es múltiplo de 5`;
  } else {
    return `${num} + 20 no es múltiplo de 5`;
  }
}

console.log(multiploDeCinco(20));
console.log(multiploDeCinco(19));

// EJ 2

console.log("------ EJ 2 ------");

let ciclista = {
  nombre: "Juan Manuel",
  apellido: "Santias",
  edad: 23,
  tieneBici: true,
};

function edadParaCompetir(obj) {
  if (obj.edad >= 18 && obj.tieneBici == true) {
    return "puede competir";
  } else if (obj.edad < 18 && obj.tieneBici == true) {
    return "podrá competir pero con un adulto acompañante";
  } else {
    return "No podrá competir";
  }
}

console.log(edadParaCompetir(ciclista));

// EJ 3

console.log("------ EJ 3 ------");

let competidores = [];

let competidor1 = {
  nombre: "Juan",
  edad: 42,
  kilometrosRecorridos: 80,
};

let competidor2 = {
  nombre: "Sofia",
  edad: 22,
  kilometrosRecorridos: 90,
};

let competidor3 = {
  nombre: "Maria",
  edad: 45,
  kilometrosRecorridos: 70,
};

competidores.push(competidor1, competidor2, competidor3);

console.log(competidores);

function competencia100Km(arr) {
  for (let i = 0; i < arr.length; i++) {
    competidores[i].kilometrosRecorridos += 100;
  }
}

console.log(competidores);

competencia100Km(competidores);

console.log(competidores);
