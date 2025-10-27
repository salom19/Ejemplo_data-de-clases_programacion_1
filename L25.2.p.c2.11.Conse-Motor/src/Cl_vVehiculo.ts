import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vVehiculo extends Cl_vGeneral {
    private inPlaca: HTMLInputElement;
    private inColor: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor(){
        super({ formName: "formVehiculo" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo"});
        this.inPlaca = this.crearHTMLInputElement({ elementName: "InPlaca"});
        this.inColor = this.crearHTMLInputElement({ elementName: "InColor",});
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                this.show({ ver: false});
                this.controlador?.vista.show();
            },
        });
    }
    get placa(): string {
        return this.inPlaca.value;
    }

    get color(): string {
        return this.inColor.value;
    }

    show({
        ver = true,
        nombreTipo = "",
    }: {
        ver?: boolean;
        nombreTipo?: string;
    }): void {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inPlaca.value = "";
        this.inColor.value = "";
        this.inPlaca.focus();
    }
}