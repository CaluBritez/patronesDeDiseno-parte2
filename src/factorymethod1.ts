// inicio Type-Interfaces
interface Equipo {
  detalles(): tipoRaton | tipoTeclado | tipoScanner;
}

export interface tipoRaton {
  tipo: "Raton"
  nombre: string
}

export interface tipoTeclado {
  tipo: "Teclado"
  nombre: string
}

export interface tipoScanner {
  tipo: "Scanner"
  nombre: string
}

type EquipoFactoryProps = {
  tipo: "Raton" | "Teclado" | "Scanner", 
  nombre?: string,
}
// fin Type-Interfaces

// inicio Clases

class EquipoRaton implements Equipo {
  private tipo: "Raton";
  private nombre: string;

  constructor(nombre: string,) {
      this.tipo = "Raton";
      this.nombre = nombre;
  }

  detalles(): tipoRaton {
      return { tipo: this.tipo, nombre: this.nombre};
  }
}

class EquipoTeclado implements Equipo {
  private tipo: "Teclado";
  private nombre: string;

  constructor(nombre: string,) {
      this.tipo = "Teclado";
      this.nombre = nombre;
  }

  detalles(): tipoTeclado {
      return { tipo: this.tipo, nombre: this.nombre};
  }
}

class EquipoScanner implements Equipo {
  private tipo: "Scanner";
  private nombre: string;

  constructor(nombre: string,) {
      this.tipo = "Scanner";
      this.nombre = nombre;
  }

  detalles(): tipoScanner {
      return { tipo: this.tipo, nombre: this.nombre};
  }
}

class EquipoFactory {
  public crearEquipo({tipo, nombre}: EquipoFactoryProps): Equipo {
      if (tipo === 'Teclado') {
          return new EquipoTeclado(nombre!);
      } else if (tipo === 'Raton') {
          return new EquipoRaton(nombre!);
      } else if (tipo === 'Scanner') {
          return new EquipoScanner(nombre!);
      }
      throw new Error('Tipo de Equipo no reconocido');
  }
}
// fin Clases

// Probamos que funcione el Factory Method
const factory = new EquipoFactory();
const equipo1 = factory.crearEquipo({tipo: 'Raton', nombre: 'Raton 001'});
const equipo2 = factory.crearEquipo({tipo: 'Teclado', nombre: 'Teclado 001'});
const equipo3 = factory.crearEquipo({tipo: 'Scanner', nombre: 'Scanner 001'});

console.log(equipo1.detalles());
console.log(equipo2.detalles());
console.log(equipo3.detalles());