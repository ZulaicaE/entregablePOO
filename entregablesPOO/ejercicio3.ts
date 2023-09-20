//Ejercicio de herencia Juego de Video.

class Personaje {   //Creamos la clase Personaje con algunos metodos como atacar y curar, subir de nivel.

    private nombre: string;
    private vida: number;
    private energia: number;
    private nivel: number;

    public constructor(name: string, hp: number, ep: number, lvl: number) {
        this.nombre = name;
        this.vida = hp;
        this.energia = ep;
        this.nivel = lvl;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getVida(): number {
        return this.vida;
    }

    public getEnergia(): number {
        return this.energia;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public levelUp(): void {
        this.nivel++;
    }

    public atacar(enemigo: Personaje, ataque: number): void {
        console.log(`${this.nombre} atacó a ${enemigo.nombre} por ${ataque} de daño.`);
        enemigo.recibirDanio(ataque);
    }

    public curar(): void {
        let hpRecovery = 100;
        if (this.energia >= 25) {
            this.vida += hpRecovery;
            this.energia -= 25;
            console.log(`${this.nombre} se curo por ${hpRecovery} puntos.`);
        } else {
            console.log(`${this.nombre} no tiene suficiente energía para curarse.`);
        }
    }

    public recibirDanio(danio: number): void {
        this.vida -= danio;
        if (this.vida < 0) {
            console.log(`${this.nombre} ha muerto`);
        }
    }
}

class Guerrero extends Personaje {  //Creamos a Guerrero que hereda a Personaje y agrega atributos y metodos propios.

    private fuerza: number;

    public constructor(name: string, hp: number, ep: number, lvl: number, strength: number) {
        super(name, hp, ep, lvl);
        this.fuerza = strength;
    }

    public getFuerza(): number {
        return this.fuerza;
    }

    public usarEscudo(): void {
        console.log(`${this.getNombre()} utiliza su escudo y recive un buff de defenza para el proximo turno.`);
    }
}

class Mago extends Personaje {  //Creamos a Mago que hereda Personaje y agrega atributos y metodos propios.

    private mana: number;

    public constructor(name: string, hp: number, ep: number, lvl: number, mp: number) {
        super(name, hp, ep, lvl);
        this.mana = mp;
    }

    public getMana(): number {
        return this.mana;
    }

    public lanzarHechizo(enemigo: Personaje): void {
        let poderDanio: number = 400;
        if (this.mana >= 300) {
            enemigo.recibirDanio(poderDanio);
            this.mana -= 300;
            console.log(`${this.getNombre()} lanzo un hechizo a ${enemigo.getNombre()} por ${poderDanio} de daño.`);
        } else {
            console.log(`${this.getNombre()} no tiene suficiente mana para lanzar un hechizo.`);
        }
    }
}

//Creamos un guerrero.

const dragonBorn: Guerrero = new Guerrero('Dovahkiin', 3999, 400, 88, 49);

console.log('Name:', dragonBorn.getNombre());
console.log('HP:', dragonBorn.getVida());
console.log('Energy:', dragonBorn.getEnergia());
console.log('Strength:', dragonBorn.getFuerza());
console.log('LVL:', dragonBorn.getNivel());

console.log('-----------------------------');

//Creamos un mago.

const theWhite: Mago = new Mago('Gandalf', 1199, 100, 51, 2000);

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

