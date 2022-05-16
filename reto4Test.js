"use strict";
exports.__esModule = true;
var repaso4_1 = require("./repaso4");
var repasoTriangulo_1 = require("./repasoTriangulo");
var punto1 = new repaso4_1.Punto(4, 8);
var punto2 = new repaso4_1.Punto(3, 5);
var punto3 = new repaso4_1.Punto(8, 5);
var arrayPun = [punto1, punto2, punto3];
punto1.toString();
console.log(punto1.DistanciaAlOrigen());
console.log(punto1.CalcularDistancia(punto2));
console.log(punto2.CalcularCuadrante());
var puntoCer = punto1.CalcularMasCercano(arrayPun);
puntoCer.toString();
var triangulo = new repasoTriangulo_1.Triangulo(punto1, punto2, punto3);
console.log(triangulo.CalcularLongitudLados());
