import Cl_vAuto from "./Cl_vAuto.js";
import Cl_vMoto from "./Cl_vMoto.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vConcencionario extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vAuto = new Cl_vAuto;
        this._vMoto = new Cl_vMoto;
        this.dataVehiculo = this.crearHTMLElement({ elementName: "DataVehiculo" });
        this.lblTotalVentas = this.crearHTMLElement({ elementName: "lblTotal" });
        this.lblComisiones = this.crearHTMLElement({ elementName: "lblComisiones" });
        this.lblPorcentaje = this.crearHTMLElement({ elementName: "lblPorcentaje" });
        this.btAgregarAuto = this.crearHTMLButtonElement({ elementName: "btAgregarAuto",
            onclick: () => {
                this.show({ ver: false });
                this.vAuto.show();
            }
        });
        this.btAgregarMoto = this.crearHTMLButtonElement({ elementName: "btAgregarMoto",
            onclick: () => {
                this.show({ ver: false });
                this.vMoto.show();
            }
        });
        this.dataVehiculo.innerHTML = "";
        this.vAuto.show({ ver: false });
        this.vMoto.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vAuto.controlador = controlador;
        this.vMoto.controlador = controlador;
    }
    get vAuto() {
        return this._vAuto;
    }
    get vMoto() {
        return this._vMoto;
    }
    reportarVehiculo({ dataVehiculo, total, comisiones, porcentaje, }) {
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
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vAuto.show({ ver: false });
            this.vMoto.show({ ver: false });
        }
    }
}
