//let autos = new Array('BMW','Mercho','Volvo');
const autos=['BMW','Mercho','Volvo'];
console.log(autos)

//recorrer elementos del arreglo
console.log(autos[0])

for(let i=0;i < autos.length;i++){
    console.log(autos[i])
}
//modificar elementos de un arreglo
autos[1]='Mercedez Benz'
console.log(autos[1])

autos.push('Audi');
console.log(autos)

//agregar elementos a un arreglo
console.log(autos.length);
autos[autos.length]='renault'
console.log(autos)
autos[6]='Porshe'
console.log(autos)

//preguntar si es un array
console.log(typeof autos)

console.log(Array.isArray(autos))

console.log(autos instanceof Array)