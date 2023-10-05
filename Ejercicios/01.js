// //                                                       Devolver cantida de caracteres de un String, (programar escenarios diferentes)

// let cadena="hola";

// function countChar(Word){
//     if(typeof Word===`string`)return Word.length
//     console.warn(`parameters must be String`)
// }
// console.log(countChar(cadena))

// //                                                                              Recortar una cadena de Strings
 
// function sliceString(String,num){ 
//         if(String,num){
//             return String.slice(num)
//         }else{
//             if(!num && !String)console.warn(`Please insert "String" and Number`);
//             if(!num)console.warn(`...Now a Number (index that will be sliced)`)
//         }
// }
// console.log(sliceString("hola",2))

// //                                                                                    Separar palabras
// function separate(String,mode){
//     return String.split(mode)
// }

// console.log(separate("hola mundo","u"))

// function multi(String,counter){
//     if(String,counter)return String.repeat(counter);
//         if(!String)console.warn(`Please insert a String`);
//         if(!counter)console.warn(`... now a number (that will be repeated)`);
//     }
// }
// console.log(multi())


//                                                                                     Con Operador ternario

//                                01

// const recortarTexto=(cadena="",longitud=undefined)=>
// (!cadena) ? console.warn("No ingresaste ninguna cadena de texto") : longitud===undefined ? console.warn("No ingresaste una cadena de texto"):
// console.info(cadena.slice(0,longitud))

// recortarTexto("hola",3)


// const saludar=(nombre)=>(nombre)?console.warn(`Hello ${nombre}`):console.warn(`Introduce un nombre`)

// saludar("Xavier")

//                                02

// const cadenaArreglo=(cadena="",separador=undefined)=>(!cadena)?console.warn(`No ingresaste una cadena de texto`):(separador===undefined)?console.warn(`no ingresaste el caracter separador`):console.info(cadena.split(separador))


// cadenaArreglo("","")

//                               03 (simplificacion de codigo)

// const repetirTexto=(texto="",num=undefined)=>{
//     if(!texto)return console.warn(`please introduce text`);
//     if(num==undefined)return console.warn(`please introduce a number`);
//     if(num==0)return console.error(`number can´t be 0`);
//     if(Math.sign(num)==-1)return console.error(`number can´t be negative`);
//     for(let i = 1 ; i<=num ; i++){
//        console.info (`${texto}, ${i}`)     
//     }
// }

// repetirTexto("Hola",5)