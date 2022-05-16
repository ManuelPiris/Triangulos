import { Punto } from "./repaso4";
import {Triangulo} from "./repasoTriangulo";

let punto1:Punto=new Punto(4,8);
let punto2:Punto=new Punto(3,5);
let punto3:Punto=new Punto(8,5);
let arrayPun:Punto[] = [punto1,punto2,punto3];

punto1.toString();
console.log(punto1.DistanciaAlOrigen());
console.log(punto1.CalcularDistancia(punto2));
console.log(punto2.CalcularCuadrante());

let puntoCer:Punto = punto1.CalcularMasCercano(arrayPun);
puntoCer.toString();


let triangulo:Triangulo=new Triangulo(punto1,punto2,punto3);

console.log(triangulo.CalcularLongitudLados());