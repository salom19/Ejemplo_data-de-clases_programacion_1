import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mCasa {
    private cambio50: number;
    private cambio20: number;
    private cambio10: number;

    private cntB100: number = 0;
    private acValor: number = 0;
    private acCambio10: number = 0;

    constructor() {
        this.cambio50 = 6;
        this.cambio20 = 10;
        this.cambio10 = 20;
        this.cntB100 = 0;
        this.acValor = 0;
        this.acCambio10 = 0;
    }

    procesarCliente(c: Cl_mCliente): void {
        this.acValor += c.billete;
        this.cambio50 -= c.cantidad50;
        this.cambio20 -= c.cantidad20;
        this.cambio10 -= c.cantidad10;

        if(c.billete === 100)
            this.cntB100++;

        if(c.cantidad10 > 0)
            this.acCambio10 += c.cantidad10;
    }
    cambio(): number {
        return this.acValor;
    }
    b100(): number {
        return this.cntB100;
    }
    b50(): number {
        return this.cambio50;
    }
    b20(): number {
        return this.cambio20;
    }
    b10(): number {
        return this.cambio10;
    }
    cambioTotal10(): number {
        return this.acCambio10;
    }
}