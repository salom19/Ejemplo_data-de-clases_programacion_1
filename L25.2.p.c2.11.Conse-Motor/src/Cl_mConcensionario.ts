import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mConcensionario {
    private acPrecioFinal: number = 0;
    private acComisiones: number = 0;

    procesarVehiculo(v: Cl_mVehiculo) {
        this.acPrecioFinal += v.precioFinal();
        this.acComisiones += v.comision();
    }
    totalVentas(): number {
        return this.acPrecioFinal;
    }
    comisiones(): number {
        return this.acComisiones;
    }
    porcentaje(): number {
        return (this.acComisiones / this.acPrecioFinal) * 100;
    }
}