import greeting,{Saludar,PI,usuario,password}from "/Modulos/constantes.js";
//import{sumar,restar}from "/Modulos/aritmetica.js";
import { aritmetica as calculos } from "./aritmetica.js";
//import { greeting } from "./constantes.js";

console.log(`Archivo modulos.js`);
console.log(PI,usuario,password);
console.log(calculos.restar(10,5))
console.log(calculos.sumar(2,2))
greeting()
let saludo=new Saludar()
saludo;
