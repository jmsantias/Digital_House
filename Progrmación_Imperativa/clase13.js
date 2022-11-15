let misMascotas = [
  {
    nombre: "Oreo",
    raza: "Pitbull",
    edad: 7,
    sonido: "GUAU",
    sonidoDeMascota: function () {
      return `${this.sonido} ${this.sonido}`;
    },
  },
  {
    nombre: "Polo",
    raza: "Salchicha",
    edad: 2,
    sonido: "grrrrr",
    sonidoDeMascota: function () {
      return `${this.sonido} ${this.sonido}`;
    },
  },
  {
    nombre: "Luna",
    raza: "Rangdol",
    edad: 1,
    sonido: "MIAU",
    sonidoDeMascota: function () {
      return `${this.sonido} ${this.sonido}`;
    },
  },
];

console.log(misMascotas);
console.log(misMascotas[0].sonidoDeMascota());



function aumentarEdad(array){
  for(let i = 0; i < array.length; i++){
    array[i].edad = array[i].edad + 1;
    //array[i].edad += 1;
  }
}

aumentarEdad(misMascotas);

console.log(misMascotas[0].edad);
console.log(misMascotas[1].edad);
console.log(misMascotas[2].edad);



function aumentarEdad2(array){
  for(let i = 0; i < array.length; i++){
    if(array[i].edad < 6){
      array[i].edad = array[i].edad + 1;
    }else if(array[i].edad <= 10){
      array[i].edad = array[i].edad + 2;
    }else{
      let mitad = array[i].edad / 2;
      array[i].edad = array[i].edad + mitad;
    }
  }
}

aumentarEdad2(misMascotas);

console.log(misMascotas[0].edad);
console.log(misMascotas[1].edad);
console.log(misMascotas[2].edad);


function agregarId(array){
  for(let i = 0; i < array.lenth; i++){
    array[i].identificador = i + 1;
  }
}

agregarId(misMascotas);
console.log(misMascotas);
console.log(misMascotas[0].identificador);
console.log(misMascotas[1].identificador);
console.log(misMascotas[2].identificador);