class ProveedorExternoAPI {
  fetchProductos(): any[] {
      // Simulamos productos obtenidos de la API externa
      return [
          { id: 1, nombre: "Producto Externo 1", stock: 100 },
          { id: 2, nombre: "Producto Externo 2", stock: 50 },
      ];
  }
  updateStock(id: number, cantidad: number): void {
      console.log(`Stock actualizado para el producto #${id}: Nueva cantidad: ${cantidad}`);
  }
}

interface IProveedor {
  obtenerProductos(): { id: number, nombre: string, cantidad: number }[];
  actualizarInventario(id: number, cantidad: number): void;
}
class AdaptadorProveedor implements IProveedor {
  private proveedorExterno: ProveedorExternoAPI;

  constructor(proveedorExterno: ProveedorExternoAPI) {
      this.proveedorExterno = proveedorExterno;
  }

  obtenerProductos(): { id: number, nombre: string, cantidad: number }[] {
      // Adaptamos el formato de los productos obtenidos de la API externa al formato del sistema de inventario
      const productosExterno = this.proveedorExterno.fetchProductos();
      return productosExterno.map(producto => ({
          id: producto.id,
          nombre: producto.nombre,
          cantidad: producto.stock
      }));
  }

  actualizarInventario(id: number, cantidad: number): void {
      // Adaptamos la llamada para actualizar el stock a la API externa
      this.proveedorExterno.updateStock(id, cantidad);
  }
}
//Probamamos que funcione el adaptador
// Instancia de la API externa
const proveedorExterno = new ProveedorExternoAPI();

// Creamos el adaptador para utilizar la API externa con la interfaz del sistema de inventario
const adaptadorProveedor = new AdaptadorProveedor(proveedorExterno);

// Usamos el adaptador con la interfaz del sistema de inventario
const productos = adaptadorProveedor.obtenerProductos();
console.log("Productos obtenidos:", productos);

adaptadorProveedor.actualizarInventario(1, 80);
