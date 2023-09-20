//Desarrolla una clase Cafetera.
var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMax, cantActual) {
        if (capacidadMax === void 0) { capacidadMax = 1000; }
        if (cantActual === void 0) { cantActual = 0; }
        this.capacidadMaxima = capacidadMax;
        if (cantActual == 0) {
            this.cantidadActual = capacidadMax;
        }
        else if (cantActual >= capacidadMax) {
            this.cantidadActual = capacidadMax;
        }
        else {
            this.cantidadActual = cantActual;
        }
    }
    Cafetera.prototype.getCapacidadMaxima = function () {
        return this.capacidadMaxima;
    };
    Cafetera.prototype.getCantidadActual = function () {
        return this.cantidadActual;
    };
    Cafetera.prototype.llenarCafetera = function () {
        if (this.cantidadActual < this.capacidadMaxima) {
            this.cantidadActual = this.capacidadMaxima;
            console.log('Se ha llenado la cafetera.');
        }
        else {
            console.log('La cafetera ya esta llena.');
        }
    };
    Cafetera.prototype.servirTaza = function (cantidadCafe) {
        var tazaCafe = 0;
        if (cantidadCafe >= this.cantidadActual) {
            tazaCafe = this.cantidadActual;
        }
        else {
            tazaCafe = cantidadCafe;
            this.cantidadActual -= cantidadCafe;
        }
        console.log("Se ha llenado la taza con ".concat(tazaCafe, " ml de cafe."));
    };
    Cafetera.prototype.vaciarCafetera = function () {
        if (this.cantidadActual > 0) {
            this.cantidadActual = 0;
            console.log('Se ha vaciado la cafetera');
        }
        else {
            console.log('La cafetera ya esta vacia.');
        }
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        if ((this.cantidadActual + cantidad) >= this.capacidadMaxima) {
            this.cantidadActual = this.capacidadMaxima;
        }
        else {
            this.cantidadActual += cantidad;
        }
    };
    return Cafetera;
}());
var coffeeMeister = new Cafetera();
console.log(coffeeMeister.getCantidadActual());
coffeeMeister.servirTaza(500);
coffeeMeister.agregarCafe(300);
console.log(coffeeMeister.getCantidadActual());
coffeeMeister.vaciarCafetera();
console.log(coffeeMeister.getCantidadActual());
var coffeeSonne = new Cafetera(500, 423);
console.log(coffeeSonne.getCantidadActual());
console.log(coffeeSonne.getCapacidadMaxima());
