//OPERADORES EN JS

//operador ternario

let resultado =(3>2) ? "verdadero" : "falso"
console.log(resultado)

let num=9

resultado=(num%2==0) ?"es par" :"es impar"

console.log(resultado)

let miNum=18

let edad = Number(miNum)
console.log(edad)

if( isNaN(edad)){
    console.log("no es un numero")
}else{
    if(edad >=18){
        console.log("puede votar")
    }else{
        console.log("no puede votar")
    }
}