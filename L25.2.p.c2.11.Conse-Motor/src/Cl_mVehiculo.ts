export default class Cl_mVehiculo {
    public _placa: string = "";
    public _color: string = "";

    constructor(placa: string, color: string) {
        this._placa = placa;
        this._color = color;
    }
    set placa(p: string) {
        this._placa = p;
    }
    get placa(): string {
        return this._placa;
    }
    set color(c: string) {
        this._color = c;
    }
    get color(): string {
        return this._color;
    }
    precioFinal(): number {
        return 0;
    }
    comision(): number {
        return 0;
    }
    precio(): number {
        return 0;
    }
    toJSON(){
        return {
            placa: this.placa,
            color: this.color,
            precio: this.precio(),
            precioFinal: this.precioFinal(),
            comision: this.comision(),
        }
    }
}