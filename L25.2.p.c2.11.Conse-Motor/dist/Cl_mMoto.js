import Cl_mVehiculo from "./Cl_mVehiculo.js";
export default class Cl_mMoto extends Cl_mVehiculo {
    constructor(placa, color, modelo) {
        super(placa, color);
        this._modelo = modelo;
    }
    set modelo(m) {
        this._modelo = m;
    }
    get modelo() {
        return this._modelo;
    }
    precio() {
        if (this.modelo === "P" || this.modelo === "p") {
            return 400;
        }
        else if (this.modelo === "T" || this.modelo === "t") {
            return 500;
        }
        else {
            return 600;
        }
    }
    precioFinal() {
        if (this.color === "R" || this.color === "r") {
            return this.precio() * 1.15;
        }
        else {
            return this.precio();
        }
    }
    comision() {
        return this.precioFinal() * 0.05;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this._modelo, tipo: "Moto" });
    }
}
