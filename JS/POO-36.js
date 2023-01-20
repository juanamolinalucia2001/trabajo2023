class Empleado{
    constructor(nombre,sueldo){
        this.nombre= nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return  `Empleado: nombre : ${this.nombre}, sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre,sueldo);
        this.departamento=departamento;    
    }
    //sobreescribo el metodo
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`;
    }
}

let gerente1 = new Gerente('Carlos',5000,'Sistemas');
let empleado1= new Empleado('Juan',3000);

//polimorfismo
function imprimirTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if( tipo instanceof Gerente){
        console.log('Es un objeto tipo gerente')
    }
    if( tipo instanceof Empleado){
        console.log('Es un objeto tipo empleado')
    }
}

imprimirTipo(gerente1)
imprimirTipo(empleado1)


