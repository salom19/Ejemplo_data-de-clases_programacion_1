export default class Cl_vCliente {
    constructor() {
        this.controlador = null;
        this.inNombre = document.getElementById("clienteForm_inNombre");
        this.inBillete = document.getElementById("clienteForm_inBillete");
        this.inCambio50 = document.getElementById("clienteForm_inCambio50");
        this.inCambio20 = document.getElementById("clienteForm_inCambio20");
        this.inCambio10 = document.getElementById("clienteForm_inCambio10");
        this.btProcesar = document.getElementById("clienteForm_btProcesar");
        if (!this.inNombre || !this.inBillete || !this.inCambio50 || !this.inCambio20 || !this.inCambio10 || !this.btProcesar) {
            throw new Error("Elementos del documento no encontrados");
        }
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("Controlador no asignado");
            this.controlador.procesarCliente();
        };
    }
    get nombre() {
        if (!this.inNombre)
            throw new Error("Elemento inNombre no definido");
        return this.inNombre.value;
    }
    get billete() {
        if (!this.inBillete)
            throw new Error("Elemento inBillete no definido");
        return +this.inBillete.value;
    }
    get cambio50() {
        if (!this.inCambio50)
            throw new Error("Elemento inCambio50 no definido");
        return +this.inCambio50.value;
    }
    get cambio20() {
        if (!this.inCambio20)
            throw new Error("Elemento inCambio20 no definido");
        return +this.inCambio20.value;
    }
    get cambio10() {
        if (!this.inCambio10)
            throw new Error("Elemento inCambio10 no definido");
        return +this.inCambio10.value;
    }
}
