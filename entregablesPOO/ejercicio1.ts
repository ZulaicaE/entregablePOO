//Crear una clase que represente una Serie.

class Serie {

    private titulo: string;
    private anioEstreno: number;
    private episodios: number;
    private temporadas: number;
    private finalizada: boolean;
    private episodiosVistos: number;


    public constructor(titulo: string, anioEstreno: number, episodios: number, temporadas: number, finalizada: boolean, vistos: number) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.finalizada = finalizada;
        this.episodiosVistos = vistos;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getEstreno(): number {
        return this.anioEstreno;
    }

    public getEpisodios(): number {
        return this.episodios;
    }

    public getTemporadas(): number {
        return this.temporadas;
    }

    public getFinalizada(): boolean {
        return this.finalizada;
    }

    public getEpisodiosVistos(): number {
        return this.episodiosVistos;
    }

    public verEpisodio(numero: number, temporada: number): void {
        console.log(`Sintonizando episodio ${numero} de la temporada ${temporada}.`);
    }

    public episodiosPorVer(): number {
        let restantes: number = this.episodios - this.episodiosVistos;
        return restantes;
    }

    public serieVista(): boolean {
        if (this.episodiosVistos === this.episodios) {
            return true;
        } else {
            return false
        }
    }

    public toString(): string {
        return (`Titulo de la Serie: ${this.titulo}, año de estreno: ${this.anioEstreno}, episodios: ${this.episodios}, temporadas: ${this.temporadas}, finalizada/cancelada: ${this.finalizada}.`);
    }
}

let vikingos: Serie = new Serie('Vikings', 2013, 89, 6, true, 45);

console.log(vikingos.toString());

vikingos.verEpisodio(7, 1);

console.log('Episodios restantes:', vikingos.episodiosPorVer());

console.log('¿Serie vista?:', vikingos.serieVista());

