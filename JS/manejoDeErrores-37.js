/* 'use strict'
try{
   let x=10;
   throw 'mi error';
}catch(error){
    console.log(error)
}
finally{
    console.log('Termina la revison de errores')
}

console.log('continuamos') */
'use strict'
let resultado = '';

try{

    if( isNaN(resultado)) throw 'No es un numero';
    else if(resultado==='') throw 'Cadena vacia'

}catch(error){
    console.log(error);
    console.log(error.name)
    console.log(error.message)
}