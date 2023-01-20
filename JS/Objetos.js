let persona={
    nombre:'Juan',
    apellido:'Perez',
    email:'Jperez@gmail.com',
    edad:20,
    nombreCompleto:function(){
      return  this.nombre+''+this.apellido
    }
}

console.log(persona.nombre)
console.log(persona.nombreCompleto())
console.log(persona)

//Crear objectos 
let persona2 = new Object();
persona2.nombre='carlos';
persona2.sueldo=200000;

console.log(persona2)

//Acceder a las propiedades de los objetos
console.log(persona2)
console.log(persona2['nombre'])

//agregar y eliminar

persona.tel=1137614026
console.log(persona)

delete persona.email;

console.log(persona)

///distintas formas de impirimir un objeto

//concatenar cada valor de cada propiedad
console.log(persona.nombre+','+persona.apellido)

// for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

let personasArray=Object.values(persona);
console.log(personasArray)

let personaString = JSON.stringify(persona)
console.log(personaString)

//metodos get y set
persona3={
    nombre:'Juan',
    apellido:'Carlos',
    email:'jperez@mail.com',
    edad:28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}
console.log(persona3.nombreCompleto)
console.log(persona3.lang)
persona3.lang='en'
console.log(persona3.idioma)

//metodo construtor de objetos en js
function Persona(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre=new Persona('Juan','Carlos','Juan@gmail.com')
let madre=new Persona('Juana','Gimenez','Juana@gmail.com')
console.log(madre,padre)
console.log(padre.nombreCompleto())

var miObjeto=new Object();
let miObjeto2={};

let miCadena1 = new String('Hola')
let miCadena2 = 'Hola'

let miArreglo1= new Array();
let miArreglo2=[];

//Uso Prototype
Persona.prototype.tel='4432578'
console.log(madre.tel,madre.tel)

let animal1={
    nombre:'Rocco',
    especie:'perro',
    datos:function(dueño,tel){
        return this.nombre+' '+this.especie+' '+dueño+' '+tel;
    }
}

let animal2={
    nombre:'Linda',
    especie:'Gato',
}

//Uso de call para usar
//el metodo animal1.datos con los datos del animal2
console.log(animal1.datos())
console.log(animal1.datos.call(animal2,'Roberto','11376120'))

//metodo aply
let arreglo=['Roberto','11376120']
console.log(animal1.datos.apply(animal2,arreglo))