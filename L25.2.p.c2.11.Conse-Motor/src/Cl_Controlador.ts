import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mAuto from "./Cl_mAuto.js";
import Cl_mMoto from "./Cl_mMoto.js";
import Cl_mConcensionario from "./Cl_mConcensionario.js";
import Cl_vConcencionario from "./Cl_vConcencionario.js";
import { iAuto } from "./Cl_vAuto.js";
import { iMoto } from "./Cl_vMoto.js";

export default class Cl_Controlador {
public modelo: Cl_mConcensionario;
public vista: Cl_vConcencionario;

    constructor(modelo: Cl_mConcensionario, vista: Cl_vConcencionario) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarAuto(data: iAuto){
        const mAuto = new Cl_mAuto(
            data.placa,
            data.color,
            data.precioBase,
        );
        this.modelo.procesarVehiculo(mAuto);
        this.reportarVehiculo({ mVehiculo: mAuto});
    }

    procesarMoto(data: iMoto){
        const mMoto = new Cl_mMoto(
            data.placa,
            data.color,
            data.modelo,
        );
        this.modelo.procesarVehiculo(mMoto);
        this.reportarVehiculo({ mVehiculo: mMoto});
    }

    reportarVehiculo({ mVehiculo }: { mVehiculo: Cl_mVehiculo}) {
        this.vista.reportarVehiculo({
            dataVehiculo: mVehiculo.toJSON(),
            total: this.modelo.totalVentas(),
            comisiones: this.modelo.comisiones(),
            porcentaje: this.modelo.porcentaje(),
        });
        this.vista.show();
    }
}