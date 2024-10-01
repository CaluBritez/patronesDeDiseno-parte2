interface Observer {
  update(data: any): void;
}
class Inventario {
  private equipos: string[] = [];
  private observers: Observer[] = [];

  // Método para agregar un observador
  public agregarObservador(observer: Observer): void {
      this.observers.push(observer);
  }

  // Método para eliminar un observador
  public eliminarObservador(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notificar a todos los observadores
  private notificarObservadores(): void {
      this.observers.forEach(observer => observer.update(this.equipos));
  }

  // Método para agregar un equipo al inventario
  public agregarEquipo(equipo: string): void {
      this.equipos.push(equipo);
      console.log(`Equipo agregado: ${equipo}`);
      this.notificarObservadores();
  }

  // Método para eliminar un equipo del inventario
  public eliminarEquipo(equipo: string): void {
      this.equipos = this.equipos.filter(e => e !== equipo);
      console.log(`Equipo eliminado: ${equipo}`);
      this.notificarObservadores();
  }

  // Método para modificar un equipo en el inventario
  public modificarEquipo(equipoViejo: string, equipoNuevo: string): void {
      const index = this.equipos.indexOf(equipoViejo);
      if (index !== -1) {
          this.equipos[index] = equipoNuevo;
          console.log(`Equipo modificado: ${equipoViejo} por ${equipoNuevo}`);
          this.notificarObservadores();
      } else {
          console.log(`El equipo ${equipoViejo} no se encontró.`);
      }
  }
}
class InterfazUsuario implements Observer {
  private nombre: string;

  constructor(nombre: string) {
      this.nombre = nombre;
  }

  // Método que recibe las notificaciones y actualiza la interfaz
  public update(equipos: string[]): void {
      console.log(`${this.nombre} - Inventario actualizado: ${equipos.join(', ')}`);
  }
}

// Crear instancia del inventario
const inventario = new Inventario();

// Crear observadores (instancias de InterfazUsuario)
const interfaz1 = new InterfazUsuario('Interfaz 1');
const interfaz2 = new InterfazUsuario('Interfaz 2');

// Agregar observadores al inventario
inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);

// Realizar cambios en el inventario
inventario.agregarEquipo('Laptop');
inventario.agregarEquipo('Mouse');
inventario.modificarEquipo('Mouse', 'Teclado');
inventario.eliminarEquipo('Laptop');
