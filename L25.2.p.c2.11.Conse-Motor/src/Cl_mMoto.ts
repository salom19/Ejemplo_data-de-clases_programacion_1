import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mMoto extends Cl_mVehiculo {
    private _modelo: string;

    constructor(placa: string, color: string, modelo: string) {
        super(placa, color);
        this._modelo = modelo;
    }
    set modelo(m: string) {
        this._modelo = m;
    }
    get modelo(): string {
        return this._modelo;
    }
    precio(): number {
        if (this.modelo === "P" || this.modelo === "p") {
            return 400;
        } else if (this.modelo === "T" || this.modelo === "t") {
            return 500;
        } else {
            return 600;
        }
    }
    precioFinal(): number {
        if (this.color === "R" || this.color === "r") {
            return this.precio() * 1.15;
        } else {
            return this.precio();
        }
    }
    comision(): number {
        return this.precioFinal() * 0.05;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            modelo: this._modelo,
            tipo: "Moto",
        }
    }
}