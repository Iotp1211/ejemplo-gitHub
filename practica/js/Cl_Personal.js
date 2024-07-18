export default class Cl_Personal{
    constructor(cargo, sueldo){
        this.cargo = cargo;
        this.sueldo = sueldo;
    }
    tipoCargo(){
        if (this.cargo === "obrero"){
            return "obrero";
        }
        else if (this.cargo === "administrativo"){
            return "administrativo";
        }
    }
    CalcularSueldo(){
        return this.sueldo;
    }

    CalcularAumento(){
        if (this.cargo === "obrero"){
            return this.sueldo * 0.2;
        }
        else if (this.cargo === "administrativo"){
            return this.sueldo * 0.1;
        }
    }
}