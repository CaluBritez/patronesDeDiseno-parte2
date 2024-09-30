class FacturacionVieja {
  crearFactura(factura: string): void {
      console.log(`Factura creada: ${factura}`);
  }

  obtenerFactura(id: number): string {
      return `Factura nº ${id} obtenida`;
  }
}
interface IFacturacion {
  generarFactura(factura: string): void;
  consultarFactura(id: number): string;
}

class AdaptadorFacturacion implements IFacturacion {
  private facturacionVieja: FacturacionVieja;

  constructor(facturacionVieja: FacturacionVieja) {
      this.facturacionVieja = facturacionVieja;
  }

  generarFactura(factura: string): void {
      // Adaptamos el método del nuevo sistema al método del sistema viejo
      this.facturacionVieja.crearFactura(factura);
  }

  consultarFactura(id: number): string {
      // Adaptamos la consulta del nuevo sistema al viejo
      return this.facturacionVieja.obtenerFactura(id);
  }
}
// Probamos que funcione el adaptador

// Instancia del sistema viejo
const facturacionVieja = new FacturacionVieja();

// Creamos el adaptador para usar el sistema viejo con la interfaz nueva
const adaptadorFacturacion = new AdaptadorFacturacion(facturacionVieja);

// Usamos el adaptador con la nueva interfaz
adaptadorFacturacion.generarFactura("Factura 001");
const factura = adaptadorFacturacion.consultarFactura(1);
console.log(factura);
