export default class Cl_Empresa{
    constructor(){
        this.cntPagoTotal = 0;
    }

    procesarPersona(p){
        this.cntPagoTotal += p.CalcularAumento();
    }
}