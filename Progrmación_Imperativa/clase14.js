// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",
//       edadesMayor : "// edades menor a 18"
//    }

let edades = [12, 15, 18, 33, 26, 24, 59];

function filtrarEdades(arr) {
  let objEdades = {
    edadesMenor: [],
    edadesMayor: [],
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 18) {
      objEdades.edadesMenor.push(arr[i]);
    } else {
      objEdades.edadesMayor.push(arr[i]);
    }
  }
  return objEdades;
}

//console.log(filtrarEdades(edades));

// Declarar una funcion que reciba un array por parametro y me devuelva el numero mayor

function encontrarElMayor(arr) {
  let elMayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > elMayor) {
      elMayor = arr[i];
    };
  }
  return elMayor;
}

console.log(encontrarElMayor(edades));
