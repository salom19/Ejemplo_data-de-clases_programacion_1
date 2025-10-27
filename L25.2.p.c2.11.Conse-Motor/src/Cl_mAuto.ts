import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mAuto extends Cl_mVehiculo {
    private _precioBase: number;

    constructor(placa: string, color: string, precioBase: number) {
        super(placa, color);
        this._precioBase = precioBase;
    }
    set precioBase(p: number){
         this._precioBase = +p;
    }
    get precioBase(): number {
        return this._precioBase;
    }
    precioFinal(): number {
        if (this.color === "R" || this.color === "r") {
            return this.precioBase * 1.15;
        } else {
            return this.precioBase;
        }
    }
    comision(): number {
        return this.precioFinal() * 0.07;
    }
    toJSON(){
        return {
            ...super.toJSON(),
            precioBase: this._precioBase,
            tipo: "Auto",
        }
    }
}