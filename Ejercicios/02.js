
// // 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// function invertir(str){
//     let resultado=""
//     for(let i=str.length-1 ; i>=0 ; i--){
//         resultado+=str[i]
//     }
//     return resultado
// }
// console.log(invertir("Hola Mundo"))

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// function twinWords(str,word){
   
//     if(!str)console.warn(`Introduce the text`);
//     if(!word)console.warn("..then introduce the word will be searched");
//     try{let separateWords=str.split(" ")
//     let counter=0
//     if(str && word){
//         for(i=0 ; i<=separateWords.length ; i++){
//             if(separateWords[i]===word){
//                 counter++
//             }
//         }
//     }
//     return counter
// }catch{console.error("please introduce the parameters in order")}  
// }
// console.log(twinWords())



// // 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// function palindromo(str){
//     let palabra=str.split("").reverse().join("")
//     if(palabra==str)return true
//     return false
// }
// console.log(palindromo("salas"))


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


//     const deletePattern=(str,pattern)=>
//     (!str)?console.warn("please insert the text"):(!pattern)?console.warn("Please insert the pattern"):console.info(str.replace(new RegExp(pattern,"ig"),""))



// console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"))