/*11.	CONSE-MOTOR
Un concesionario de vehículos a motor requiere la realización de un programa de computadoras
que les permita determinar: el monto total de sus ventas y el porcentaje que representa el pago
de comisiones que hace a sus vendedores. De los autos que vende se conoce: placa,
color (R: rojo, B: blanco, A: azul) y precio base.
De las motos que vende se tiene: placa, color (R: rojo, B: blanco, A: azul)
y modelo (P: paseo, T: trabajo, D: deportiva);
el precio es según el modelo: 400, 500 y 600 respectivamente.
También se sabe que el precio final se incrementa en un 15% si el vehículo es rojo
y que los vendedores se llevan el 5% por la venta de una moto y el 7% por la venta de un auto.*/
import Cl_Controlador from "./Cl_Controlador.js";
import Cl_vConcencionario from "./Cl_vConcencionario.js";
import Cl_mConcensionario from "./Cl_mConcensionario.js";
import { auto, moto } from "./_data.js";
export default class Cl_index {
    constructor() {
        const vista = new Cl_vConcencionario();
        const modelo = new Cl_mConcensionario();
        this.controlador = new Cl_Controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarAuto(auto[0]);
        this.controlador.procesarAuto(auto[1]);
        this.controlador.procesarAuto(auto[2]);
        this.controlador.procesarAuto(auto[3]);
        this.controlador.procesarMoto(moto[0]);
        this.controlador.procesarMoto(moto[1]);
        this.controlador.procesarMoto(moto[2]);
        this.controlador.procesarMoto(moto[3]);
    }
}
