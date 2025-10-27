import Cl_vVehiculo from "./Cl_vVehiculo.js";

interface iMoto {
    placa: string;
    color: string;
    modelo: string;
}

export default class Cl_vMoto extends Cl_vVehiculo {
    private divInModelo: HTMLElement
    private inModelo: HTMLInputElement
    private btAceptar: HTMLElement;
    constructor(){
        super();
        this.divInModelo = this.crearHTMLElement({ elementName: "DivInModelo"});
        this.inModelo = this.crearHTMLInputElement({ elementName: "InModelo"});
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarMoto",
            onclick: () => this.controlador?.procesarMoto({
                placa: this.placa,
                color: this.color,
                modelo: this.modelo,
            }),
        });
    }
    get modelo(): string{
        return this.inModelo.value;
    }

    show ({ ver = true}: { ver?: boolean } = { ver: true}){
        super.show({ ver });
        this.inModelo.value = ""
        this.divInModelo.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export {iMoto};