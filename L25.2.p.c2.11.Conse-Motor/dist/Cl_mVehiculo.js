export default class Cl_mVehiculo {
    constructor(placa, color) {
        this._placa = "";
        this._color = "";
        this._placa = placa;
        this._color = color;
    }
    set placa(p) {
        this._placa = p;
    }
    get placa() {
        return this._placa;
    }
    set color(c) {
        this._color = c;
    }
    get color() {
        return this._color;
    }
    precioFinal() {
        return 0;
    }
    comision() {
        return 0;
    }
    precio() {
        return 0;
    }
    toJSON() {
        return {
            placa: this.placa,
            color: this.color,
            precio: this.precio(),
            precioFinal: this.precioFinal(),
            comision: this.comision(),
        };
    }
}
