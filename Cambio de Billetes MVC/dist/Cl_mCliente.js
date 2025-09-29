export default class Cl_mCliente {
    constructor({ n = "", b = 0, c50 = 0, c20 = 0, c10 = 0 }) {
        this._nombre = "";
        this._billete = 0;
        this._cantidad50 = 0;
        this._cantidad20 = 0;
        this._cantidad10 = 0;
        this._nombre = n;
        this._billete = b;
        this._cantidad50 = c50;
        this._cantidad20 = c20;
        this._cantidad10 = c10;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set billete(b) {
        this._billete = +b;
    }
    get billete() {
        return this._billete;
    }
    set cantidad50(c50) {
        this._cantidad50 = +c50;
    }
    get cantidad50() {
        return this._cantidad50;
    }
    set cantidad20(c20) {
        this._cantidad20 = +c20;
    }
    get cantidad20() {
        return this._cantidad20;
    }
    set cantidad10(c10) {
        this._cantidad10 = +c10;
    }
    get cantidad10() {
        return this._cantidad10;
    }
    llevan() {
        return this.cantidad50 + this.cantidad20 + this.cantidad10;
    }
}
