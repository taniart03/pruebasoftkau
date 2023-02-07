
  /**************************************************************** */
  // Clase Abstracta

class Nave {
    constructor(tipo, modelo, nombre) {
      this._tipo = tipo;
      this._modelo = modelo;
      this._nombre = nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    encenderNave() {
      return `La nave ${this._nombre} se ha encendido`;
    }
  
    despegarNave() {
      return `La nave ${this._nombre} ha despegado`;
    }
  
    aterrizarNave() {
      return `La nave ${this._nombre} ha aterrizado`;
    }
  }
  
  /**************************************************************** */

  class Lanzadera extends Nave {
    constructor(tipo, modelo, nombre, peso) {
      super(tipo, modelo, nombre);
      this.peso = peso;
    }
  
    acelerarNave() {
      return `acelerando nave ${this._nombre}`;
    }
  }
  
  class NoTripulada extends Nave {
    constructor(tipo, modelo, nombre, pais) {
      super(tipo, modelo, nombre);
      this.pais = pais;
    }
  
    info() {
        console.log(`La nave ${this.nombre} es del país ${this.pais}`);
    }
  

    
    metodoNoTripulada() {
      return `metodoNoTripulada ${this._nombre}`;
    }
}
  
    class Tripulada extends Nave {
        constructor(tipo, modelo, nombre, fin) {
          super(tipo, modelo, nombre);
          this.fin = fin;
        }
  
        metodoTripulada() {
          return `metodoTripulada ${this._nombre}`;
        }
      
           
        metodoTripulada() {
          return `metodoTripulada ${this._nombre}`;
        }
    }
  
  /**************************************************************** */
  //Clase Principal

  class Principal {
    constructor(navesCreadas) {
      this._navesCreadas = navesCreadas;
      this.cantinventario = 10;
    }
  
    agregarNave() {
      let tipoNave = 'Seleccione el tipo de nave que quiere crear \n';
      tipoNave += '1. Lanzadera \n';
      tipoNave += '2. No Tripulada \n';
      tipoNave += '3. Tripulada \n';

  
      const opcion = prompt(tipoNave);
      let nuevaNave = {};
  
      if (opcion == 1) {
        const modelo = `Lanzadera${this.generarIdNaves()}`;
        const nombre = prompt('Ingrese el nombre de la nave');
        nuevaNave = new Lanzadera(1, modelo, nombre, 800);
      }
  
      if (opcion == 2) {
        const modelo = `NoTripulada${this.generarIdNaves()}`;
        const nombre = prompt('Ingrese el nombre de la nave');
        nuevaNave = new NoTripulada(2, modelo, nombre, 'USA');
      }

      if (opcion == 3) {
        const modelo = `Tripulada${this.generarIdNaves()}`;
        const nombre = prompt('Ingrese el nombre de la nave');
        nuevaNave = new Tripulada(3, modelo, nombre, 'fin');
      }
  
      this._navesCreadas.push(nuevaNave);
    }
  
    consultarNaves() {
      return this._navesCreadas;
    }
  
    generarIdNaves() {
      return this._navesCreadas.length;
    }

     ctrlinventario() {
        this.cantinventario -= 1;
        return `compró una nave y su inventario es ${this.cantinventario}`;
    }


  }
  
  let menu = 'Seleccione la acción que desea realizar \n';
  menu += '1. Agregar Nave \n';
  menu += '2. Consultar Naves \n';
  menu += '3. Inventario de Naves \n';
  menu += '4. Salir \n';
  
  const main = new Principal([]);
  let opcion = 0;
  
  //********************************
//*** Opciones de menú

  do {
    opcion = prompt(menu);
    switch (opcion) {
      case '1':
  
        main.agregarNave('nave');
        console.log('nave creada');
        break;
      case '2':
        console.table(main.consultarNaves());
        break;
      case '3':
        console.log(main.ctrlinventario());
            break;  
      default:
        console.log(opcion);
        break;
    }
  
  } while (opcion !== '4');

  