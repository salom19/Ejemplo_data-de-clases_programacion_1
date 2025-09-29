export default class casa {
    constructor(c50, c20, c10) {
        this._cambio50 = 0;
        this._cambio20 = 0;
        this._cambio10 = 0;
        this.acB50 = 0;
        this.acB20 = 0;
        this.acB10 = 0;
        this.cntB100 = 0;
        this.acValor = 0;
        this._cambio50 = c50;
        this._cambio20 = c20;
        this._cambio10 = c10;
    }
    set cambio50(c50) {
        this._cambio50 = +c50;
    }
    get cambio50() {
        return this._cambio50;
    }
    set cambio20(c20) {
        this._cambio20 = +c20;
    }
    get cambio20() {
        return this._cambio20;
    }
    set cambio10(c10) {
        this._cambio10 = +c10;
    }
    get cambio10() {
        return this._cambio10;
    }
    procesarCliente(c) {
        this.acValor += c.billete;
        this.acB50 += c.cantidad50;
        this.acB20 += c.cantidad20;
        this.acB10 += c.cantidad10;
        if (c.billete === 100)
            this.cntB100++;
    }
    cambio() {
        return this.acValor;
    }
    b100() {
        return this.cntB100;
    }
    b50() {
        return this.cambio50 - this.acB50;
    }
    b20() {
        return this._cambio20 - this.acB20;
    }
    b10() {
        return this.cambio10 - this.acB10;
    }
}
