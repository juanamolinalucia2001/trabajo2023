//let persona2 = new Persona('Karla','Perez');
//No es posible crear objetos antes de declarar la clase
//no se aplica el concepto de hoisting
class Persona{

    static contadorPersona=0;//atributo de nuestra clase
    
    static get MAX_OBJ(){
        return 5;
    }
    email = 'valor por default de mail'; //atributo de nuestros objetos
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona=++Persona.contadorPersona;
        }
        else{
            console.log('Se supero el max de objetos Permitidos')
        }
        
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido
    }

    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido
    }
    //Sobreescribiendo el metodo de la clase Padre (object)
    toString(){
        //se aplica polimorfismo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('saludos desde método static')
    }
    static saludar2(persona){
        console.log(persona.nombre)
    }
}

let persona1 = new Persona('Lucas','Perez');
console.log(persona1)
//mando a llamar al metodo get
console.log(persona1.nombre)

//mando a llamar method set
persona1.nombre='Juan Carlos'//set nombre('Juan Carlos')
console.log(persona1.nombre) //get nombre

//herencia
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido)//llamo al constructor de la clase padre
        this._departamento=departamento
    }

    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento=departamento
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+' '+this._departamento
    }

}

let empleado1= new Empleado('Maria', 'Jimenez', 'Sistemas')
console.log(empleado1)
//heredar metodos
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString())

//persona1.saludar()
//no es posible llamar a un metodo static desde un objeto

Persona.saludar()
Persona.saludar2(persona1)

Empleado.saludar();
Empleado.saludar2(empleado1)
console.log(Persona.contadorPersona)

console.log(persona1.email)
console.log(empleado1.email)
console.log(empleado1.toString())

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10;
//al no crear un metodo set funciona como si fuera una constante
console.log(Persona.MAX_OBJ);

let persona2= new Persona()
let persona3=new Persona()
let persona4= new Persona()
let persona5= new Persona()

console.log(persona5.toString())