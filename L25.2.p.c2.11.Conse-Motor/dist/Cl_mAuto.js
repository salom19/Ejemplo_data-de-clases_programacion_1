import Cl_mVehiculo from "./Cl_mVehiculo.js";
export default class Cl_mAuto extends Cl_mVehiculo {
    constructor(placa, color, precioBase) {
        super(placa, color);
        this._precioBase = precioBase;
    }
    set precioBase(p) {
        this._precioBase = +p;
    }
    get precioBase() {
        return this._precioBase;
    }
    precioFinal() {
        if (this.color === "R" || this.color === "r") {
            return this.precioBase * 1.15;
        }
        else {
            return this.precioBase;
        }
    }
    comision() {
        return this.precioFinal() * 0.07;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { precioBase: this._precioBase, tipo: "Auto" });
    }
}
