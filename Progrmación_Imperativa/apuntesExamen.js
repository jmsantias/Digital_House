// Bubble Sort

    // Objetos

    function nombre(arr){

        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - 1; j++){
                if(arr[j].propiedad > arr[j + 1].propiedad){ // el '<' y '>' en el if determina si queremos ordenar por descendente o ascendente
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    };

    // Array 

    function nombre(arr){

        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - 1; j++){
                if(arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    };


