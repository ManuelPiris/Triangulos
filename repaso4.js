"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        console.log("".concat(this.x, ",").concat(this.y));
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.DistanciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.sqrt((this.x * this.x) + (this.y * this.y));
        return distancia;
    };
    Punto.prototype.CalcularDistancia = function (otroPunto) {
        var distancia2 = 0;
        distancia2 = Math.sqrt(Math.pow((this.x - otroPunto.getX()), 2) + Math.pow((this.y - otroPunto.getY()), 2));
        return distancia2;
    };
    Punto.prototype.CalcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        else {
            ("No ahí cuadrante");
        }
        return cuadrante;
    };
    Punto.prototype.CalcularMasCercano = function (puntos) {
        var puntoCer = null;
        var puntoOrigen = new Punto(this.getX(), this.getY());
        for (var i = 0; i < puntos.length; i++) {
            if (puntoCer == null || Math.abs(puntos[puntoCer].CalcularDistancia(puntoOrigen)) > Math.abs(puntos[i].CalcularDistancia(puntoOrigen))) {
                puntoCer = i;
            }
        }
        return puntos[puntoCer];
    };
    return Punto;
}());
exports.Punto = Punto;
