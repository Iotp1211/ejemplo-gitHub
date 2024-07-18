/**
 * En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional 
que deberá pagar en la próxima quincena. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150: 
Juan tiene un aumento de $20 
Ana tiene un aumento de $24 
Lin tiene un aumento de $20 
Mary tiene un aumento de $10 
Carlos tiene un aumento de $15 
El total de monto adicional que debe pagar la empresa es de $89
 */

import  Cl_Personal  from "./Cl_Personal.js";
import  Cl_Empresa  from "./Cl_Empresa.js";

let empresa = new Cl_Empresa();

let persona1 = new Cl_Personal("obrero", 100);
let persona2 = new Cl_Personal("obrero", 120);
let persona3 = new Cl_Personal("administrativo", 200);
let persona4 = new Cl_Personal("obrero", 50);
let persona5 = new Cl_Personal("administrativo", 150);

empresa.procesarPersona(persona1);
empresa.procesarPersona(persona2);
empresa.procesarPersona(persona3);
empresa.procesarPersona(persona4);
empresa.procesarPersona(persona5);

let salida = document.getElementById("1");

salida.innerHTML = `
    Juan tiene un aumento de ${persona1.CalcularAumento()} <br>
    Ana tiene un aumento de ${persona2.CalcularAumento()} <br>
    Lin tiene un aumento de ${persona3.CalcularAumento()} <br>
    Mary tiene un aumento de ${persona4.CalcularAumento()} <br>
    Carlos tiene un aumento de ${persona5.CalcularAumento()} <br>
    El total de monto adicional que debe pagar la empresa es de ${empresa.cntPagoTotal} <br>
`;