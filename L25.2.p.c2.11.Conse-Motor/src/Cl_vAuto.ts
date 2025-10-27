import Cl_vVehiculo from "./Cl_vVehiculo.js";

interface iAuto {
    placa: string;
    color: string;
    precioBase: number;
}

export default class Cl_vAuto extends Cl_vVehiculo {
    private divInPrecioBase: HTMLElement;
    private inPrecioBase: HTMLInputElement;
    private btAceptar: HTMLElement;
    
    constructor(){
        super();
        this.divInPrecioBase = this.crearHTMLElement({ elementName: "DivInPrecioBase"});
        this.inPrecioBase = this.crearHTMLInputElement({ elementName: "InPrecioBase"});
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarAuto",
            onclick: () => this.controlador?.procesarAuto({
                placa: this.placa,
                color: this.color,
                precioBase: this.precioBase,
            }),
        });
    }

    get precioBase(): number{
        return +this.inPrecioBase.value;
    }

    show({ ver = true}: { ver?: boolean } = { ver: true}){
        super.show({ ver });
        this.inPrecioBase.value = "";
        this.divInPrecioBase.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export {iAuto};