import Cl_vVehiculo from "./Cl_vVehiculo.js";
export default class Cl_vMoto extends Cl_vVehiculo {
    constructor() {
        super();
        this.divInModelo = this.crearHTMLElement({ elementName: "DivInModelo" });
        this.inModelo = this.crearHTMLInputElement({ elementName: "InModelo" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarMoto",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarMoto({
                    placa: this.placa,
                    color: this.color,
                    modelo: this.modelo,
                });
            },
        });
    }
    get modelo() {
        return this.inModelo.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        this.inModelo.value = "";
        this.divInModelo.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
