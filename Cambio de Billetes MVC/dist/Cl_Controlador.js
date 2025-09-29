export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCliente() {
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
