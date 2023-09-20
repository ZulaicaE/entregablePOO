//Fabrica de vehiculos utilizando el patron de diseño Factory.
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, asientos, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.puertas = puertas;
    }
    Auto.prototype.imprimirDetalles = function () {
        console.log("Fabricar auto: marca ".concat(this.marca, ", modelo ").concat(this.modelo, ", con cantidad de asientos ").concat(this.asientos, " y cantidad de puertas ").concat(this.puertas, "."));
    };
    return Auto;
}());
var Camioneta = /** @class */ (function () {
    function Camioneta(marca, modelo, asientos, carga) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = carga;
    }
    Camioneta.prototype.imprimirDetalles = function () {
        console.log("Fabricar camioneta: marca ".concat(this.marca, ", modelo ").concat(this.modelo, ", con cantidad de asientos ").concat(this.asientos, " y capacidad de carga de ").concat(this.capacidadCarga, " KG."));
    };
    return Camioneta;
}());
var FabricaVehiculos = /** @class */ (function () {
    function FabricaVehiculos() {
    }
    FabricaVehiculos.prototype.crearVehiculo = function (vehiculo) {
        switch (vehiculo) {
            case 'autoJAP':
                return new Auto('Nissan', 'R32', 4, 2);
            case 'autoUS':
                return new Auto('DODGE', 'Viper', 2, 2);
            case 'camionetaJAP':
                return new Camioneta('Toyota', 'Hilux', 4, 950);
            case 'camionetaUS':
                return new Camioneta('FORD', 'F-150', 2, 1100);
            default:
                console.log('---------------------------------------------------------------');
                console.log("El vehiculo ".concat(vehiculo, " no esta disponible para su fabricacion."));
                console.log('---------------------------------------------------------------');
                return null;
        }
    };
    return FabricaVehiculos;
}());
var fabricaAutomotor = new FabricaVehiculos();
var autoJapones = fabricaAutomotor.crearVehiculo('autoJAP');
var camionetaAmericana = fabricaAutomotor.crearVehiculo('camionetaUS');
var camionetaRusa = fabricaAutomotor.crearVehiculo('camionetaRU');
if (autoJapones) {
    autoJapones.imprimirDetalles();
}
if (camionetaAmericana) {
    camionetaAmericana.imprimirDetalles();
}
if (camionetaRusa) {
    camionetaRusa.imprimirDetalles();
}
