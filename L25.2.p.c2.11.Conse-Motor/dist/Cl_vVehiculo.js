import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vVehiculo extends Cl_vGeneral {
    constructor() {
        super({ formName: "formVehiculo" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inPlaca = this.crearHTMLInputElement({ elementName: "InPlaca" });
        this.inColor = this.crearHTMLInputElement({ elementName: "InColor", });
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get placa() {
        return this.inPlaca.value;
    }
    get color() {
        return this.inColor.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inPlaca.value = "";
        this.inColor.value = "";
        this.inPlaca.focus();
    }
}
