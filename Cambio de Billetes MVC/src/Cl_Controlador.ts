import Cl_mCasa from "./Cl_mCasa.js";
import Cl_vCasa from "./Cl_vCasa";

export default class Cl_Controlador {
    public vista: Cl_vCasa;
    public modelo: Cl_mCasa;

    constructor(modelo: Cl_mCasa, vista: Cl_vCasa) {
        this.modelo = modelo;
        this.vista = vista;
    }
        procesarCliente(): void{
            this.modelo.procesarCliente(this.vista.procesarCliente());
            this.vista.reporteCliente({
                cambio: this.modelo.cambio(),
                b100: this.modelo.b100(),
                b50: this.modelo.b50(),
                b20: this.modelo.b20(),
                b10: this.modelo.b10(),
                cambioTotal10: this.modelo.cambioTotal10(),
            });
        }    
}