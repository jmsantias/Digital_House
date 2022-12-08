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


// MESA DE TRABAJO

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  
  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
      for (let i = 0; i < arrayCuentas.length; i++) {
        if (banco.clientes[i].titularCuenta == titular) {
          console.log(banco.clientes[i]);
        }
      }
    },
    deposito: function (titular, monto) {
      
    },
  };
  
  banco.consultarCliente("Ansel Ardley");
  
  let clienteEncontrado = banco.consultarCliente(titular);
  