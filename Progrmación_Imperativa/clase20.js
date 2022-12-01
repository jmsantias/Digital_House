// Para ordernar una colección de objetos, según una propiedad específica, deberemos alterar el algoritmo de bubble sort





let personas = [
    {
        nombre: 'Dua',
        apellido: 'Lipa',
        ocupacion: 'cantante',
        estatura: 173
    },
    {
        nombre: 'Ariana',
        apellido: 'Grande',
        ocupacion: 'cantante',
        estatura: 160
    },
    {
        nombre: 'Taylor',
        apellido: 'Swift',
        ocupacion: 'cantante',
        estatura: 180
    }
];


function ordenarPorEstatura(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j].estatura > arr[j + 1].estatura){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

