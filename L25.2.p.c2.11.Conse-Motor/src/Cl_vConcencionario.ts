import Cl_vAuto from "./Cl_vAuto.js";
import Cl_vMoto from "./Cl_vMoto.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_Controlador from "./Cl_Controlador.js";

interface iConcencionario {
    placa: string;
    color: string;
    precioBase?: number;
    modelo?: string;
    tipo?: string;
    precio: number;
    precioFinal: number;
    comision: number;
}

export default class Cl_vConcencionario extends Cl_vGeneral {
    private _vAuto: Cl_vAuto;
    private _vMoto: Cl_vMoto;
    private dataVehiculo: HTMLElement;
    private lblTotalVentas: HTMLElement;
    private lblComisiones: HTMLElement;
    private lblPorcentaje: HTMLElement;
    private btAgregarAuto: HTMLElement;
    private btAgregarMoto: HTMLElement;

    constructor(){
        super({ formName: "mainForm" });
        this._vAuto = new Cl_vAuto;
        this._vMoto = new Cl_vMoto;
        this.dataVehiculo = this.crearHTMLElement({ elementName: "DataVehiculo"});
        this.lblTotalVentas = this.crearHTMLElement({ elementName: "lblTotal"});
        this.lblComisiones = this.crearHTMLElement({ elementName: "lblComisiones"});
        this.lblPorcentaje = this.crearHTMLElement({ elementName: "lblPorcentaje"});
        
        this.btAgregarAuto = this.crearHTMLButtonElement({ elementName: "btAgregarAuto",
            onclick: () => { 
                this.show({ ver: false});
                this.vAuto.show();
            }
        });

        this.btAgregarMoto = this.crearHTMLButtonElement({ elementName: "btAgregarMoto",
            onclick: () => { 
                this.show({ ver: false});
                this.vMoto.show();
            }
        });
        this.dataVehiculo.innerHTML = "";
        this.vAuto.show({ ver: false});
        this.vMoto.show({ ver: false});
    }
    set controlador(controlador: Cl_Controlador) {
        super.controlador = controlador;
        this.vAuto.controlador = controlador;
        this.vMoto.controlador = controlador;
    }

    get vAuto(): Cl_vAuto{
        return this._vAuto;
    }
    get vMoto(): Cl_vMoto{
        return this._vMoto;
    }
    reportarVehiculo({
        dataVehiculo,
        total,
        comisiones,
        porcentaje,
    }: {
        dataVehiculo: iConcencionario;
        total: number;
        comisiones: number;
        porcentaje: number;
    }): void {
        this.dataVehiculo.innerHTML += `
        <tr>
            <td class="colNumber">${dataVehiculo.placa}</td>
            <td class="colNumber">${dataVehiculo.color}</td>
            <td class="colNumber">${dataVehiculo.precioBase ? dataVehiculo.precioBase : "--"}</td>
            <td class="colNumber">${dataVehiculo.modelo ? dataVehiculo.modelo : "--"}</td>
            <td class="colNumber">${dataVehiculo.precio}</td>
            <td class="colNumber">${dataVehiculo.precioFinal}</td>
            <td class="colNumber">${dataVehiculo.comision.toFixed(2)}</td>
        </tr>
        `;
        this.lblTotalVentas.innerHTML = `${total}`;
        this.lblComisiones.innerHTML = `${comisiones}`;
        this.lblPorcentaje.innerHTML = `${porcentaje.toFixed(2)}%`;
    }

    show({ ver = true}: { ver?: boolean} = { ver: true}) {
        super.show({ ver });
        if (ver) {
            this.vAuto.show({ ver: false});
            this.vMoto.show({ ver: false});
        }
    }
}