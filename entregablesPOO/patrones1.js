//Logger utilizando el patron de diseño Singleton.
var Logger = /** @class */ (function () {
    function Logger() {
        this.registroAcceso = [];
    }
    Logger.obtenerInstancia = function () {
        if (!this.instancia) {
            this.instancia = new Logger();
        }
        return this.instancia;
    };
    Logger.prototype.mostrarRegistro = function () {
        this.registroAcceso.forEach(function (elemento) {
            console.log(elemento);
        });
    };
    Logger.prototype.accederSistema = function (nombreUsuario) {
        var mensajeIngreso = "Se registro el ingreso del usuario ".concat(nombreUsuario);
        this.registroAcceso.push(mensajeIngreso);
    };
    return Logger;
}());
var logger = Logger.obtenerInstancia(); //Creo una unica intancia (si ya existe una, me la devuelve).
logger.accederSistema('EmiLucky3');
logger.accederSistema('GermanSteel');
logger.accederSistema('Panzerfaust');
logger.mostrarRegistro();
