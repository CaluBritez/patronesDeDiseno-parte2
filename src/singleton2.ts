class ConexionDB {
  private static instance: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;
  private conectado: boolean;

  // El constructor es privado para evitar la creación directa de instancias
  private constructor() {
    this.host = 'localhost'; // Valor por defecto
    this.puerto = 5432; // Puerto por defecto, ejemplo para PostgreSQL
    this.usuario = 'root'; // Usuario por defecto
    this.conectado = false; // Estado de conexión inicial
  }

  // Método estático para obtener la única instancia de ConexionDB
  public static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    }
    return ConexionDB.instance;
  }

  // Método para conectar a la base de datos
  public conectar(): void {
    if (!this.conectado) {
      console.log(`Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}...`);
      this.conectado = true;
      // Lógica de conexión real aquí
    } else {
      console.log('Ya está conectado a la base de datos.');
    }
  }

  // Método para desconectar la base de datos
  public desconectar(): void {
    if (this.conectado) {
      console.log('Desconectando de la base de datos...');
      this.conectado = false;
      // Lógica de desconexión real aquí
    } else {
      console.log('No hay conexión activa para desconectar.');
    }
  }

  // Métodos para configurar los parámetros de conexión

  public setHost(host: string): void {
    this.host = host;
  }

  public setPuerto(puerto: number): void {
    this.puerto = puerto;
  }

  public setUsuario(usuario: string): void {
    this.usuario = usuario;
  }

  public getHost(): string {
    return this.host;
  }

  public getPuerto(): number {
    return this.puerto;
  }

  public getUsuario(): string {
    return this.usuario;
  }

  public getEstadoConexion(): boolean {
    return this.conectado;
  }
}

const conexion = ConexionDB.getInstance();

// Configurar conexión
conexion.setHost('db.myserver.com');
conexion.setPuerto(3306); // Ejemplo para MySQL
conexion.setUsuario('admin');

// Conectar a la base de datos
conexion.conectar(); // "Conectando a la base de datos en db.myserver.com:3306 como admin..."

// Verificar estado de conexión
console.log(conexion.getEstadoConexion()); // true

// Desconectar de la base de datos
conexion.desconectar(); // "Desconectando de la base de datos..."
