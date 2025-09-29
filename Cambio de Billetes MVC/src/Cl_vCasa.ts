import Cl_Controlador from "./Cl_Controlador.js";
import Cl_mCliente from "./Cl_mCliente.js";
import Cl_vCliente from "./Cl_vCliente.js";

export default class Cl_vCasa {
    private _controlador: Cl_Controlador | null = null;
    private salida: HTMLElement;
    private mCliente: Cl_mCliente | null = null;
    private vCliente: Cl_vCliente;

    constructor() {
        this.salida = document.getElementById("mainForm_salida") as HTMLElement;
        if(!this.salida) throw new Error("Elemento salida no encontrado");
        this.vCliente = new Cl_vCliente();


    }
    set controlador(controlador: Cl_Controlador | null){
        this._controlador = controlador;
        this.vCliente.controlador = controlador;
    }
    get controlador(): Cl_Controlador | null {
        return this._controlador;
    }
    
    procesarCliente(): Cl_mCliente{
        this.mCliente = new Cl_mCliente({
            n: this.vCliente.nombre,
            b: this.vCliente.billete,
            c50: this.vCliente.cambio50,
            c20: this.vCliente.cambio20,
            c10: this.vCliente.cambio10,
        });
        return this.mCliente;
    }
    reporteCliente({
        cambio = 0,
        b100 = 0,
        b50 = 0,
        b20 = 0,
        b10 = 0,
        cambioTotal10 = 0,
    }): void {
        if(!this.mCliente) throw new Error("Cliente no procesado");
        this.salida.innerHTML += `<br> ${this.mCliente.nombre} se lleva ${this.mCliente.llevan()} billetes <br><br>
        Se cambiaron ${cambio}$ <br>
        Quedaron ${b100} billetes de $100 <br>
        Quedaron ${b50} billetes de $50 <br>
        Quedaron ${b20} billetes de $20 <br>
        Quedaron ${b10} billetes de $10 <br>
        Se entregaron ${cambioTotal10} billetes de $10`;
    }
}