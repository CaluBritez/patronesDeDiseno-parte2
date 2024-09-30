class DepartamentoMantenimiento {
  notificar(equipo: Equipo): void {
      console.log(`Notificación de Mantenimiento: El equipo ${equipo.nombre} (tipo: ${equipo.tipo}) ha alcanzado ${equipo.tiempoUso} horas de uso y requiere mantenimiento.`);
  }
}
class Equipo {
  private observadores: DepartamentoMantenimiento[] = [];
  public nombre: string;
  public tipo: string;
  public estado: string;
  public tiempoUso: number;

  constructor(nombre: string, tipo: string, estado: string, tiempoUso: number) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
      this.tiempoUso = tiempoUso;
  }

  // Agregar un observador (Departamento de Mantenimiento)
  agregarObservador(observador: DepartamentoMantenimiento): void {
      this.observadores.push(observador);
  }

  // Notificar a todos los observadores
  private notificarObservadores(): void {
      for (const observador of this.observadores) {
          observador.notificar(this);
      }
  }

  // Simular el aumento del tiempo de uso del equipo
  aumentarTiempoUso(horas: number, umbralMantenimiento: number): void {
      this.tiempoUso += horas;
      console.log(`Tiempo de uso del equipo ${this.nombre}: ${this.tiempoUso} horas`);

      if (this.tiempoUso >= umbralMantenimiento) {
          this.notificarObservadores();
      }
  }
}

//COMPROBAMOS QUE FUNCIONE EL OBSERVADOR
// Crear una instancia del departamento de mantenimiento
const departamentoMantenimiento = new DepartamentoMantenimiento();

// Crear un equipo y asignarle observadores
const equipo1 = new Equipo("Compresor", "Industrial", "Operativo", 90);
equipo1.agregarObservador(departamentoMantenimiento);

// Aumentar el tiempo de uso del equipo y comprobar las notificaciones
equipo1.aumentarTiempoUso(15, 100);
equipo1.aumentarTiempoUso(10, 100); 

