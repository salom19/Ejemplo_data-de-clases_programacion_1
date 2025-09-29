/*CAMBIO DE BILLETES 
La casa de moneda abre con cierta cantidad de cada billete para cambio (1: $10, 2: $20, 
3: $50), y llegan los clientes buscando sencillo; ejemplo: traen uno de $100 y se llevan 1 de 
$50, 2 de $20 y 1 de $10. Se conoce por la casa la cantidad inicial de los billetes para cambio, y 
por cada cliente el billete a cambiar (i. $100, ii. $50, iii. $20) y la cantidad correcta de cada 
billete que desea para el cambio que recibirá. Se desea conocer por cada cliente: a) la cantidad 
de billetes que se lleva, y por un día de servicios en la casa: b) el monto total cambiado, c) la 
cantidad que le queda de cada tipo de billete para cambio, incluyendo los de $100. 
La casa informa que, por ejemplo, el día anterior se comenzó con 20 billetes de $10, 10 de 
$20 y 6 de $50, y se procesaron los siguientes registros: (nombre, billete, cambioDe50, 
Pág. 5 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
GUÍA DE EJERCICIOS DE PROGRAMACIÓN I (3154) Y PROGRAMACIÓN (C4) - CORTE 1 
cambioDe20, cambioDe10) (Luis, 100, 2, 0, 0) (Ana, 50, 0, 2, 1) (José, 100, 0, 4, 2) 
(Carmen, 20, 0, 0, 2) (Eva, 50, 0, 1, 3), según lo cual la salida requerida presenta el siguiente 
formato: 
Luis se lleva 2 billetes 
Ana se lleva 3 billetes 
José se lleva 6 billetes 
Carmen se lleva 2 billetes 
Eva se lleva 4 billetes 
Se cambiaron $320 
Quedaron 2 billetes de $100 
Quedaron 4 billetes de $50 
Quedaron 3 billetes de $20 
Quedaron 12 billetes de $10  */

import Cl_Controlador from "./Cl_Controlador.js";
import Cl_mCasa from "./Cl_mCasa.js";
import Cl_vCasa from "./Cl_vCasa.js";


export default class Cl_Principal {
    constructor(){
        let vista = new Cl_vCasa();
        let modelo = new Cl_mCasa();
        let controlador = new Cl_Controlador(modelo, vista);
        vista.controlador = controlador;
    }
}