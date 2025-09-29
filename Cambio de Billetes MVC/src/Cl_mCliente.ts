export default class Cl_mCliente {
private _nombre: string = "";
private _billete: number = 0;
private _cantidad50: number = 0;
private _cantidad20: number = 0;
private _cantidad10: number = 0;

    constructor({n="", b=0, c50=0, c20=0, c10=0}) {
        this._nombre = n;
        this._billete = b;
        this._cantidad50 = c50;
        this._cantidad20 = c20;
        this._cantidad10 = c10;
    }
    set nombre(n: string) {
        this._nombre = n;
    }
    get nombre(): string {
        return this._nombre;
    }
    set billete(b: number) {
        this._billete = +b;
    }
    get billete(): number {
        return this._billete;
    }
    set cantidad50(c50: number) {
        this._cantidad50 = +c50;
    }
    get cantidad50(): number {
        return this._cantidad50;
    }
    set cantidad20(c20: number) {
        this._cantidad20 = +c20;
    }
    get cantidad20(): number {
        return this._cantidad20;
    }
    set cantidad10(c10: number) {
        this._cantidad10 = +c10;
    }
    get cantidad10(): number {
        return this._cantidad10;
    }
    llevan(): number{
        return this.cantidad50 + this.cantidad20 + this.cantidad10;
    }
}