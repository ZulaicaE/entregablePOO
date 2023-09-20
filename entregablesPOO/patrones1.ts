//Logger utilizando el patron de diseño Singleton.

class Logger {

    private static instancia: Logger;   //Creo la instancia static para poder accederla sin haber creado la clase.
    private registroAcceso: string[];   //Guardo los accesos.

    private constructor() { //El constructor se utiliza privado para evitar una creaccion externa y directa de la clase.
        this.registroAcceso = [];
    }

    public static obtenerInstancia(): Logger {  //Al igual que la instancia, la creo static para poder accederla sin haber creado la clase.
        if (!this.instancia) {
            this.instancia = new Logger();
        }
        return this.instancia;
    }

    public mostrarRegistro(): void {    //Muestro el registro de accesos.
        this.registroAcceso.forEach(elemento => {
            console.log(elemento);
        });
    }

    public accederSistema(nombreUsuario: string): void {    //Ingreso a mi registro el nombre del usuario.
        let mensajeIngreso: string = `Se registro el ingreso del usuario ${nombreUsuario}`;
        this.registroAcceso.push(mensajeIngreso);
    }
}

const logger: Logger = Logger.obtenerInstancia();   //Creo una unica intancia (si ya existe una, me la devuelve).

logger.accederSistema('EmiLucky3');
logger.accederSistema('GermanSteel');
logger.accederSistema('Panzerfaust');

logger.mostrarRegistro();



