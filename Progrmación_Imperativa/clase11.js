// Objetos literales

// corchetes [] llaves {}
let persona = {
    nombre: 'Darwin',
    apellido: 'Sosa',
    edad: 25,
    esMayor: true,
    hermanos: ['Juan', 'Sofi'],
    saludar: function(){
        return `Buen día ${this.nombre}`;
    }
}

//console.log(persona.saludar());

// Asi puedo modificar las propiedades del objeto

persona.nombre = 'Santiago';
persona.edad = 32;
persona.dni = 2345234;
persona.hermanos.push('Lau');
persona.nuevoMetodo = function(){
    return 'soy el nuevo metodo';
};

//console.log(persona);


// Declarar una funcion que reciba un objeto por parametros y que segun su edad, si es mayor o igual de 18 imprimir por consola a sus hermanos y si no, cambiar el valor esMayor por false

function puedePasar(objeto){
    if(objeto.edad >= 18){
        console.log(objeto.hermanos);
    }else{
        objeto.esMayor = false;
        console.log(objeto.esMayor);
    }
}

puedePasar(persona);