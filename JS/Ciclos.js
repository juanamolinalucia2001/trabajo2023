let contador=0

while(contador < 3){
    console.log(contador)
    contador++;
}
console.log("fin del ciclo")

//Do While
let contado=0
do{ // Aun que se cumpla o no la condición del while el "do" se va ejecutar 1 vez SI O SI
    console.log(contado);
    contado++
} while(contado < 3);
console.log("Fin del ciclo")

//ciclo For
for(let i=0;i < 3;i++){
    console.log(i)
}
console.log("Fin del ciclo For")

for(let num=0; num<=10;num++){
    if(num%2==0){
        console.log(num)
        break   //termina el ciclo
    }
}

for(let num1=0; num1<=10;num1++){
    if(num1%2 !== 0){
        continue//ir a la siguiente iteracion
    }else{
        console.log(num1)
    }
}


//labels

inicio:
for(let contador = 0; contador <= 10; contador++) {

    if(contador %2 !== 0){
       continue inicio; // Salta a la siguiente iteración
    }
    console.log(contador);

}