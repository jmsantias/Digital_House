
// WHILE

function tablaDeMultiplicar(numero) {
    let i = 1;
   while(i <= 10){
       console.log(numero + " * " + i + " = "  + numero * i);
       i++;
   }   
}

//tablaDeMultiplicar(5);

//Métodos de string

function dominio(){
    let url = "digitalhouse.com.ar";
    return "http://www." + url;
};

//console.log(dominio());

function menciona(texto, palabra){
    let verificacion = texto.indexOf(palabra);
    if(verificacion != -1){
        return true;
    }else{
        return false;
    };
};

//console.log(menciona('Estoy programando', 'mundo'));


// Objetos literales

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = this.energia - horas*5;
        this.experiencia = this.experiencia + horas*2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
