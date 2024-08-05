export interface Delivery {
    id: number;
    clientName: string;
    vehicleName: string;
    origen: string;
    destino: string;
    paquete: string;
    shippingDate: string; // Puedes ajustar el tipo según lo que necesites
    driverName: string;
  }