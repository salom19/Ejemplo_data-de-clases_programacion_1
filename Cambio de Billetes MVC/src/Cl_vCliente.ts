import Cl_Controlador from "./Cl_Controlador.js";

export default class Cl_vCliente {
    public controlador: Cl_Controlador | null = null;
    private inNombre: HTMLInputElement;
    private inBillete: HTMLInputElement;
    private inCambio50: HTMLInputElement;
    private inCambio20: HTMLInputElement;
    private inCambio10: HTMLInputElement;
    public btProcesar: HTMLElement;
    
    constructor(){
        this.inNombre = document.getElementById("clienteForm_inNombre") as HTMLInputElement;
        this.inBillete = document.getElementById("clienteForm_inBillete") as HTMLInputElement;
        this.inCambio50 = document.getElementById("clienteForm_inCambio50") as HTMLInputElement;
        this.inCambio20 = document.getElementById("clienteForm_inCambio20") as HTMLInputElement;
        this.inCambio10 = document.getElementById("clienteForm_inCambio10") as HTMLInputElement;
        this.btProcesar = document.getElementById("clienteForm_btProcesar") as HTMLElement;

        if(!this.inNombre || !this.inBillete || !this.inCambio50 || !this.inCambio20 || !this.inCambio10 || !this.btProcesar){
            throw new Error("Elementos del documento no encontrados");
        }
        this.btProcesar.onclick = () => {
            if(!this.controlador) throw new Error("Controlador no asignado");
            this.controlador.procesarCliente();
        }
    }
    get nombre(): string {
        if(!this.inNombre) throw new Error("Elemento inNombre no definido");
        return this.inNombre.value;
    }
    get billete(): number {
        if(!this.inBillete) throw new Error("Elemento inBillete no definido");
        return +this.inBillete.value;
    }
    get cambio50(): number{
        if(!this.inCambio50) throw new Error("Elemento inCambio50 no definido");
        return +this.inCambio50.value;
    }
    get cambio20(): number{
        if(!this.inCambio20) throw new Error("Elemento inCambio20 no definido");
        return +this.inCambio20.value;
    }
    get cambio10(): number {
        if(!this.inCambio10) throw new Error("Elemento inCambio10 no definido");
        return +this.inCambio10.value;
    }
}