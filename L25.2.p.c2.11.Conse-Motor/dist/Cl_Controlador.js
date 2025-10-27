import Cl_mAuto from "./Cl_mAuto.js";
import Cl_mMoto from "./Cl_mMoto.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarAuto(data) {
        const mAuto = new Cl_mAuto(data.placa, data.color, data.precioBase);
        this.modelo.procesarVehiculo(mAuto);
        this.reportarVehiculo({ mVehiculo: mAuto });
    }
    procesarMoto(data) {
        const mMoto = new Cl_mMoto(data.placa, data.color, data.modelo);
        this.modelo.procesarVehiculo(mMoto);
        this.reportarVehiculo({ mVehiculo: mMoto });
    }
    reportarVehiculo({ mVehiculo }) {
        this.vista.reportarVehiculo({
            dataVehiculo: mVehiculo.toJSON(),
            total: this.modelo.totalVentas(),
            comisiones: this.modelo.comisiones(),
            porcentaje: this.modelo.porcentaje(),
        });
        this.vista.show();
    }
}
