class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        this.tipoEntrada=tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca=marca
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: [idRaton: ${this.idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} 
        ]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} 
        ]`;
    }
}


let raton1= new Raton('USB','HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooh', 'Dell');
raton2.marca='HP'
console.log(raton2.toString());

let teclado1= new Teclado('Blutooth', 'MSI');
let teclado2= new Teclado('USB', 'Acer');

console.log(teclado1.toString())
console.log(teclado2.toString())

class Monitor{
    static contadorMonitores=0

    constructor(marca,tamaño){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=marca;
        this._tamaño=tamaño;
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño=tamaño;
    }
    toString(){
        return `Monitor: [idMonitor: ${this.idMonitor}, tamaño: ${this._tamaño}, marca: ${this._marca} 
        ]`;
    }
}

let monitor1= new Monitor('HP', 22)
let monitor2= new Monitor('samsung', 19)
console.log(monitor1.toString())

class Computadora{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}:${this._monitor} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}} `;
    }
}

let computadora1 = new Computadora('hp',monitor1, teclado1, raton1)
console.log(computadora1.toString())

let computadora2= new Computadora('Dell',monitor2,teclado2,raton2);
console.log(computadora2.toString())

class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = ''
        for(let computadora of this._computadoras){
            computadorasOrden+=`\n ${computadora} `;
        } 
        console.log(`Orden: ${this._idOrden} Computadoras: ${computadorasOrden}`)
    }
}

orden1=new Orden();
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();