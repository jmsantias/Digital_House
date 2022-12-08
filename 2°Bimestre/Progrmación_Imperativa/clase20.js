// Para ordenar una colección de objetos, según una propiedad específica, deberemos alterar el algoritmo de bubble sort que hasta ahora conocemos, ya que solo ordena un array de números, y en este caso, necesitaremos ordenar un array de objetos.

// En esencia, el algoritmo es el mismo, solo con un par de ajustes. Empecemos recordando la colección que queremos ordenar:



let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173,
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160,
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180,
    },
   ];
   


   function orderarPorEstatura(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].estatura < arr[j + 1].estatura){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
   }

//    console.log(personas);
//    orderarPorEstatura(personas);
//    console.log(personas); 


    // declarar una funcion que reciba por parametro un array y un booleano, si el booleano es true, ordenara el array ascendentemente y si es false, lo hara descendentemente



    function ordenarSegunBool(arr, bool){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - 1; j++){
                if((bool && (arr[j].estatura > arr[j + 1].estatura) ) || (!bool && (arr[j].estatura < arr[j + 1].estatura)) ){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                } 
            }
        }
    }

    ordenarSegunBool(personas, false);
    console.log(personas);


    // MESA DE TRABAJO

    /* 
EJ 1

En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.
Deberás construir tu propio array de prueba, el cual contendrá un número de objetos
(determinado por vos) donde cada objeto tendrá las siguientes propiedades:

- likes: numero
- username: string */

let usuarios = [
    {
      likes: 20,
      username: "Luis",
    },
    {
      likes: 35,
      username: "Daniel",
    },
    {
      likes: 40,
      username: "Juanma",
    },
    {
      likes: 15,
      username: "Lucho",
    },
    {
      likes: 11,
      username: "Martín",
    },
    {
      likes: 100,
      username: "Nacho",
    },
    {
      likes: 67,
      username: "Gabriela",
    },
    {
      likes: 92,
      username: "Mer",
    },
  ];
  
  function ordenarLikes(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].likes > arr[j + 1].likes) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  ordenarLikes(usuarios);
  //console.log(usuarios);
  /* console.log(usuarios[usuarios.length-1]);
  console.log(usuarios[usuarios.length-2]);
  console.log(usuarios[usuarios.length-3]); */
  
  /* 
  EJ 2
  
  El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
  objeto temperatura donde registra día —valor numérico del día—, mes —valor
  numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
  día. Las temperaturas —objeto temperatura— están cargados en un array.
  Deberás construir tu propio array de prueba, el cual contendrá un número de objetos
  (determinado por vos) donde cada objeto tendrá las siguientes propiedades:
  - dia: numero
  - mes: numero
  - tempMax: número
  - tempMin: número
  a) Ordenar por temperatura mínima de menor a mayor. 
  b) Ordenar por temperatura máxima de mayor a menor.
  */
  
  let temperatura = [
    {
      dia: 10,
      mes: 7,
      tempMax: 15,
      tempMin: 5,
    },
    {
      dia: 8,
      mes: 12,
      tempMax: 30,
      tempMin: 25,
    },
    {
      dia: 21,
      mes: 5,
      tempMax: 20,
      tempMin: 12,
    },
    {
      dia: 4,
      mes: 2,
      tempMax: 32,
      tempMin: 27,
    },
  ];
  
  function ordenarTempMin(arr){
  
      for(let i = 0; i < arr.length; i++){
          for(let j = 0; j < arr.length - 1; j++){
              if(arr[j].tempMin > arr[j + 1].tempMin){  
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  };
  
  function ordenarTempMax(arr){
  
      for(let i = 0; i < arr.length; i++){
          for(let j = 0; j < arr.length - 1; j++){
              if(arr[j].tempMax < arr[j + 1].tempMax){  
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  };
  
  /* ordenarTempMin(temperatura);
  console.log(temperatura);
  ordenarTempMax(temperatura);
  console.log(temperatura);  */
  
  function ordenarTemp(arr, asc, prop) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (
          (asc && arr[j][prop] > arr[j + 1][prop]) ||
          (!asc && arr[j][prop] < arr[j + 1][prop])
        ) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  /* ordenarTemp(temperatura, true, "tempMin");
  console.log(temperatura);
  ordenarTemp(temperatura, false, "tempMax");
  console.log(temperatura); */
  
  function ordenarTemp(arr, ascendente, prop) {
    if (ascendente) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if (arr[j][prop] > arr[j + 1][prop]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if (arr[j][prop] < arr[j + 1][prop]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
  }
  
  ordenarTemp(temperatura, true, "tempMin");
  console.log(temperatura);
  ordenarTemp(temperatura, false, "tempMax");
  console.log(temperatura);
  