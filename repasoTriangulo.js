"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Triangulo.prototype.CalcularLongitudLados = function () {
        var lados = [];
        lados[0] = this.x.CalcularDistancia(this.y);
        lados[1] = this.x.CalcularDistancia(this.z);
        lados[2] = this.y.CalcularDistancia(this.z);
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
