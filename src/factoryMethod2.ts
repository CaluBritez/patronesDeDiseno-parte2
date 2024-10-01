// Clase Monitor con propiedad resolución
class Monitor {
  public resolucion: string;

  constructor(resolucion: string) {
      this.resolucion = resolucion;
  }

  public mostrarDetalles(): void {
      console.log(`Monitor con resolución: ${this.resolucion}`);
  }
}

// Clase Impresora con propiedad tipo de impresión
class Impresora {
  public tipoImpresion: string;

  constructor(tipoImpresion: string) {
      this.tipoImpresion = tipoImpresion;
  }

  public mostrarDetalles(): void {
      console.log(`Impresora de tipo: ${this.tipoImpresion}`);
  }
}

// Clase Proyector con propiedad brillo
class Proyector {
  public brillo: number;

  constructor(brillo: number) {
      this.brillo = brillo;
  }

  public mostrarDetalles(): void {
      console.log(`Proyector con brillo: ${this.brillo} lúmenes`);
  }
}

class PerifericoSalidaFactory {
  public static crearPeriferico(tipo: string): Monitor | Impresora | Proyector | null {
      switch (tipo) {
          case 'Monitor':
              return new Monitor('1920x1080');
          case 'Impresora':
              return new Impresora('Láser');
          case 'Proyector':
              return new Proyector(3000);
          default:
              console.log('Tipo de periférico no reconocido');
              return null;
      }
  }
}

// Crear un Monitor
const monitor = PerifericoSalidaFactory.crearPeriferico('Monitor');
monitor?.mostrarDetalles();

// Crear una Impresora
const impresora = PerifericoSalidaFactory.crearPeriferico('Impresora');
impresora?.mostrarDetalles();

// Crear un Proyector
const proyector = PerifericoSalidaFactory.crearPeriferico('Proyector');
proyector?.mostrarDetalles();

// Intentar crear un periférico no válido
const noValido = PerifericoSalidaFactory.crearPeriferico('Teclado');
