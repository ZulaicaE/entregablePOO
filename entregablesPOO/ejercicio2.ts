//Desarrolla una clase Cafetera.

class Cafetera {

    private capacidadMaxima: number;
    private cantidadActual: number;

    public constructor(capacidadMax: number = 1000, cantActual: number = 0) {
        this.capacidadMaxima = capacidadMax;
        if (cantActual == 0) {
            this.cantidadActual = capacidadMax;
        } else if (cantActual >= capacidadMax) {
            this.cantidadActual = capacidadMax;
        } else {
            this.cantidadActual = cantActual;
        }
    }

    public getCapacidadMaxima(): number {
        return this.capacidadMaxima;
    }

    public getCantidadActual(): number {
        return this.cantidadActual;
    }

    public llenarCafetera(): void {
        if (this.cantidadActual < this.capacidadMaxima) {
            this.cantidadActual = this.capacidadMaxima;
            console.log('Se ha llenado la cafetera.')
        } else {
            console.log('La cafetera ya esta llena.');
        }
    }

    public servirTaza(cantidadCafe: number): void {
        let tazaCafe: number = 0;
        if (cantidadCafe >= this.cantidadActual) {
            tazaCafe = this.cantidadActual;
        } else {
            tazaCafe = cantidadCafe;
            this.cantidadActual -= cantidadCafe;
        }
        console.log(`Se ha llenado la taza con ${tazaCafe} ml de cafe.`);
    }

    public vaciarCafetera(): void {
        if (this.cantidadActual > 0) {
            this.cantidadActual = 0;
            console.log('Se ha vaciado la cafetera');
        } else {
            console.log('La cafetera ya esta vacia.')
        }
    }

    public agregarCafe(cantidad: number): void {
        if ((this.cantidadActual + cantidad) >= this.capacidadMaxima) {
            this.cantidadActual = this.capacidadMaxima;
        } else {
            this.cantidadActual += cantidad;
        }
    }
}

const coffeeMeister: Cafetera = new Cafetera();

console.log(coffeeMeister.getCantidadActual());
coffeeMeister.servirTaza(500);
coffeeMeister.agregarCafe(300);
console.log(coffeeMeister.getCantidadActual());
coffeeMeister.vaciarCafetera();
console.log(coffeeMeister.getCantidadActual());

const coffeeSonne: Cafetera = new Cafetera(500, 423);

console.log(coffeeSonne.getCantidadActual());
console.log(coffeeSonne.getCapacidadMaxima());
