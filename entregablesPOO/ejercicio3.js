//Ejercicio de herencia Juego de Video.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personaje = /** @class */ (function () {
    function Personaje(name, hp, ep, lvl) {
        this.nombre = name;
        this.vida = hp;
        this.energia = ep;
        this.nivel = lvl;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.getEnergia = function () {
        return this.energia;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.levelUp = function () {
        this.nivel++;
    };
    Personaje.prototype.atacar = function (enemigo, ataque) {
        console.log("".concat(this.nombre, " atac\u00F3 a ").concat(enemigo.nombre, " por ").concat(ataque, " de da\u00F1o."));
        enemigo.recibirDanio(ataque);
    };
    Personaje.prototype.curar = function () {
        var hpRecovery = 100;
        if (this.energia >= 25) {
            this.vida += hpRecovery;
            this.energia -= 25;
            console.log("".concat(this.nombre, " se curo por ").concat(hpRecovery, " puntos."));
        }
        else {
            console.log("".concat(this.nombre, " no tiene suficiente energ\u00EDa para curarse."));
        }
    };
    Personaje.prototype.recibirDanio = function (danio) {
        this.vida -= danio;
        if (this.vida < 0) {
            console.log("".concat(this.nombre, " ha muerto"));
        }
    };
    return Personaje;
}());
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(name, hp, ep, lvl, strength) {
        var _this = _super.call(this, name, hp, ep, lvl) || this;
        _this.fuerza = strength;
        return _this;
    }
    Guerrero.prototype.getFuerza = function () {
        return this.fuerza;
    };
    Guerrero.prototype.usarEscudo = function () {
        console.log("".concat(this.getNombre(), " utiliza su escudo y recive un buff de defenza para el proximo turno."));
    };
    return Guerrero;
}(Personaje));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(name, hp, ep, lvl, mp) {
        var _this = _super.call(this, name, hp, ep, lvl) || this;
        _this.mana = mp;
        return _this;
    }
    Mago.prototype.getMana = function () {
        return this.mana;
    };
    Mago.prototype.lanzarHechizo = function (enemigo) {
        var poderDanio = 400;
        if (this.mana >= 300) {
            enemigo.recibirDanio(poderDanio);
            this.mana -= 300;
            console.log("".concat(this.getNombre(), " lanzo un hechizo a ").concat(enemigo.getNombre(), " por ").concat(poderDanio, " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.getNombre(), " no tiene suficiente mana para lanzar un hechizo."));
        }
    };
    return Mago;
}(Personaje));
//Creamos un guerrero.
var dragonBorn = new Guerrero('Dovahkiin', 3999, 400, 88, 49);
console.log('Name:', dragonBorn.getNombre());
console.log('HP:', dragonBorn.getVida());
console.log('Energy:', dragonBorn.getEnergia());
console.log('Strength:', dragonBorn.getFuerza());
console.log('LVL:', dragonBorn.getNivel());
console.log('-----------------------------');
//Creamos un mago.
var theWhite = new Mago('Gandalf', 1199, 100, 51, 2000);
console.log('Name:', theWhite.getNombre());
console.log('HP:', theWhite.getVida());
console.log('Energy:', theWhite.getEnergia());
console.log('Mana:', theWhite.getMana());
console.log('LVL:', theWhite.getNivel());
console.log('-----------------------------');
dragonBorn.atacar(theWhite, 200);
dragonBorn.usarEscudo();
theWhite.lanzarHechizo(dragonBorn);
dragonBorn.atacar(theWhite, 500);
console.log('Dovahkiin se aproxima e impacta un ataque critico a TheWhite.');
dragonBorn.atacar(theWhite, 600);
