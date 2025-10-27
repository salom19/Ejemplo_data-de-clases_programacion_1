export default class Cl_mConcensionario {
    constructor() {
        this.acPrecioFinal = 0;
        this.acComisiones = 0;
    }
    procesarVehiculo(v) {
        this.acPrecioFinal += v.precioFinal();
        this.acComisiones += v.comision();
    }
    totalVentas() {
        return this.acPrecioFinal;
    }
    comisiones() {
        return this.acComisiones;
    }
    porcentaje() {
        return (this.acComisiones / this.acPrecioFinal) * 100;
    }
}
