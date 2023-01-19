//declaracion de la funcion
//hoisting podemos llamar la funcion antes de definirla o luego de definirla
resultado1=miFuncion(2,4);

function miFuncion(a,b){
    return a+b
}
//llamando a la funcion
resultado2=miFuncion(5,4);

console.log(resultado1,resultado2)


//declaracion de funcion de tipo expresion o funciones anonimas
let suma = function(a,b){return a+b};
let resultado=suma(1,2)
console.log(result)

//funciones self-invoking(se definen de forma anonima solo puede ser invicada 1 ves)
/* (function (c,d){
    console.log(c+d);
})(3,4); */

//arrow function
const sumarFuncionTipoFlecha=(a,b)=>a+b//parametros
resultado=sumarFuncionTipoFlecha(7,7)//argumentos
console.log(resultado)

//parametros y argumentos(en js el numero de parametros
// no necesariamente debe ser igual al de los argumentos)
let resta=function(a,b){
   console.log(arguments[0]);
   console.log(arguments[1]);
   console.log(arguments[2])
    return a-b+arguments[2]
}
resultado=resta(5,2,7)
console.log(resultado)

//sumar todos los argumentos
let re=sumarTodo(5, 3, 12, 9, 2)
console.log(re)

function sumarTodo(){
    let suma=0
    for(let i=0; i<arguments.length;i++){
        suma+=arguments[i]
    }
    return suma
}

//PASO POR VALOR
//tipos primitivos(no tiene asociados ni metodos ni atributos)
let x=10;

function cambiarValor(a){
    a=20
}

cambiarValor(x);
console.log(x)

//PASO POR REFERENCIA
const persona={
    nombre:'Juan',
    apellido:'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre='Carlos';
    p1.apellido='Lara';
}
//paso por referencia
cambiarValorObjeto(persona)
console.log(persona)
