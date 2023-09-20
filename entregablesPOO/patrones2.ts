//Fabrica de vehiculos utilizando el patron de diseño Factory.

interface Vehiculo {    //Creamos una interfaz que deban usar todos los vehiculos.

    imprimirDetalles(): void;

}

class Auto implements Vehiculo {    //Creamos la clase auto.

    private marca: string;
    private modelo: string;
    private asientos: number;
    private puertas: number;

    constructor(marca: string, modelo: string, asientos: number, puertas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.puertas = puertas;
    }

    public imprimirDetalles(): void {

        console.log(`Fabricar auto: marca ${this.marca}, modelo ${this.modelo}, con cantidad de asientos ${this.asientos} y cantidad de puertas ${this.puertas}.`);
    }

}

class Camioneta implements Vehiculo {   //Creamos la clase camioneta.

    private marca: string;
    private modelo: string;
    private asientos: number;
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, asientos: number, carga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
        this.capacidadCarga = carga;
    }

    public imprimirDetalles(): void {

        console.log(`Fabricar camioneta: marca ${this.marca}, modelo ${this.modelo}, con cantidad de asientos ${this.asientos} y capacidad de carga de ${this.capacidadCarga} KG.`);
    }

}

class FabricaVehiculos {    //Por ultimo creamos una clase para definir y crear vehiculos utilizando las clases de arriba.

    public crearVehiculo(vehiculo: string): Vehiculo | null {
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
                console.log(`El vehiculo ${vehiculo} no esta disponible para su fabricacion.`);
                console.log('---------------------------------------------------------------');
                return null;
        }
    }
}

const fabricaAutomotor: FabricaVehiculos = new FabricaVehiculos();

let autoJapones = fabricaAutomotor.crearVehiculo('autoJAP');
let camionetaAmericana = fabricaAutomotor.crearVehiculo('camionetaUS');
let camionetaRusa = fabricaAutomotor.crearVehiculo('camionetaRU');

if (autoJapones) {
    autoJapones.imprimirDetalles();
}

if (camionetaAmericana) {
    camionetaAmericana.imprimirDetalles();
}

if (camionetaRusa) {
    camionetaRusa.imprimirDetalles();
}

