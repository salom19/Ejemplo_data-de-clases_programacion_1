export default class Cl_mCasa {
    constructor() {
        this.cntB100 = 0;
        this.acValor = 0;
        this.acCambio10 = 0;
        this.cambio50 = 6;
        this.cambio20 = 10;
        this.cambio10 = 20;
        this.cntB100 = 0;
        this.acValor = 0;
        this.acCambio10 = 0;
    }
    procesarCliente(c) {
        this.acValor += c.billete;
        this.cambio50 -= c.cantidad50;
        this.cambio20 -= c.cantidad20;
        this.cambio10 -= c.cantidad10;
        if (c.billete === 100)
            this.cntB100++;
        if (c.cantidad10 > 0)
            this.acCambio10 += c.cantidad10;
    }
    cambio() {
        return this.acValor;
    }
    b100() {
        return this.cntB100;
    }
    b50() {
        return this.cambio50;
    }
    b20() {
        return this.cambio20;
    }
    b10() {
        return this.cambio10;
    }
    cambioTotal10() {
        return this.acCambio10;
    }
}
