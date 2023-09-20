//Crear una clase que represente una Serie.
var Serie = /** @class */ (function () {
    function Serie(titulo, anioEstreno, episodios, temporadas, finalizada, vistos) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.finalizada = finalizada;
        this.episodiosVistos = vistos;
    }
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.getEstreno = function () {
        return this.anioEstreno;
    };
    Serie.prototype.getEpisodios = function () {
        return this.episodios;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getFinalizada = function () {
        return this.finalizada;
    };
    Serie.prototype.getEpisodiosVistos = function () {
        return this.episodiosVistos;
    };
    Serie.prototype.verEpisodio = function (numero, temporada) {
        console.log("Sintonizando episodio ".concat(numero, " de la temporada ").concat(temporada, "."));
    };
    Serie.prototype.episodiosPorVer = function () {
        var restantes = this.episodios - this.episodiosVistos;
        return restantes;
    };
    Serie.prototype.serieVista = function () {
        if (this.episodiosVistos === this.episodios) {
            return true;
        }
        else {
            return false;
        }
    };
    Serie.prototype.toString = function () {
        return ("Titulo de la Serie: ".concat(this.titulo, ", a\u00F1o de estreno: ").concat(this.anioEstreno, ", episodios: ").concat(this.episodios, ", temporadas: ").concat(this.temporadas, ", finalizada/cancelada: ").concat(this.finalizada, "."));
    };
    return Serie;
}());
var vikingos = new Serie('Vikings', 2013, 89, 6, true, 45);
console.log(vikingos.toString());
vikingos.verEpisodio(7, 1);
console.log('Episodios restantes:', vikingos.episodiosPorVer());
console.log('¿Serie vista?:', vikingos.serieVista());
