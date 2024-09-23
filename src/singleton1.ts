class Configuracion {
  private static instance: Configuracion;
  private idioma: string;
  private rutaBaseDatos: string;
  private nivelRegistro: string;

  // El constructor es privado para evitar la creación directa de instancias
  private constructor() {
    this.idioma = 'es'; // Valor por defecto
    this.rutaBaseDatos = 'localhost'; // Valor por defecto
    this.nivelRegistro = 'INFO'; // Valor por defecto
  }

  // Método estático para obtener la única instancia de Configuracion
  public static getInstance(): Configuracion {
    if (!Configuracion.instance) {
      Configuracion.instance = new Configuracion();
    }
    return Configuracion.instance;
  }

  // Métodos para obtener y actualizar las propiedades

  public getIdioma(): string {
    return this.idioma;
  }

  public setIdioma(idioma: string): void {
    this.idioma = idioma;
  }

  public getRutaBaseDatos(): string {
    return this.rutaBaseDatos;
  }

  public setRutaBaseDatos(rutaBaseDatos: string): void {
    this.rutaBaseDatos = rutaBaseDatos;
  }

  public getNivelRegistro(): string {
    return this.nivelRegistro;
  }

  public setNivelRegistro(nivelRegistro: string): void {
    this.nivelRegistro = nivelRegistro;
  }
}

const config = Configuracion.getInstance();

// Imprimimos propiedades - Tendran los valores por defecto
console.log(config.getIdioma());
console.log(config.getRutaBaseDatos());
console.log(config.getNivelRegistro());

// Asignamos valores
config.setIdioma('en');
config.setRutaBaseDatos('mongodb://mydbserver');
config.setNivelRegistro('DEBUG');

// Imprimimos nuevas propiedades
console.log(config.getIdioma());
console.log(config.getRutaBaseDatos());
console.log(config.getNivelRegistro());
