import Cl_vVehiculo from "./Cl_vVehiculo.js";
export default class Cl_vAuto extends Cl_vVehiculo {
    constructor() {
        super();
        this.divInPrecioBase = this.crearHTMLElement({ elementName: "DivInPrecioBase" });
        this.inPrecioBase = this.crearHTMLInputElement({ elementName: "InPrecioBase" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarAuto",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarAuto({
                    placa: this.placa,
                    color: this.color,
                    precioBase: this.precioBase,
                });
            },
        });
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        this.inPrecioBase.value = "";
        this.divInPrecioBase.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
