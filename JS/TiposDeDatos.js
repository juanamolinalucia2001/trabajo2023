//tipo de datos string
var nombre ="Carlos";
console.log(nombre)

//tipo de dato numerico
var numero=1000;
console.log(numero)

//tipo datos object
var objecto ={
    nombre:"Juan",
    apellido:"Perez",
    tel:11345663
}
console.log(objecto)

//tipo de datos boleano
var bandera=true;
console.log(typeof bandera)

//tipo de dato funcion
function miFuncion(){

}
console.log(typeof miFuncion)

//tipo de dato simbolo

var simbolo=Symbol("")
console.log(simbolo)

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido
    }
}

console.log(typeof Persona)

//tipo undefined
var x;
console.log(x)

//tipo null ausencia de valor
var y = null
console.log(typeof y)

var autos=['BMW','Audi','Volvo']
console.log(typeof autos)

var z =""
console.log(z)
console.log(typeof z)

//CONCATENAR
var apellido="Perez"
var nombreCompleto=nombre+" "+apellido
console.log(nombreCompleto)


