
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// function randomRangeNumber(){
//     return Math.floor(Math.random()*(501 - 600) + 600);
// }

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//                 Funcional
// function capicua(num){
//     let numR=num.toString().split("").reverse().join("")
//     num.toString()
//     if(numR==num)return true
//     return false
// }
//console.log(capicua(10201))

//                Imperativa
// function capicua(num){
//     let number=num.toString()
//     let inverted=""
//     for(let i=number.length-1 ; i>=0 ; i--){
//         inverted+=number[i]
//     }
//     if(number==inverted)return true
//     return false
// }

// console.log(capicua(202))


// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//             first solution

// function factorial(fact){
//     if(fact<=1){
//         return fact
//     }
//     return factorial(fact-1)*fact
// }

//            Second solution
// function factorial(num){
//     let result=0
//     for(let i=num ; i>0 ;i--){
//         result+=num*num-1
//     }
//     return result
// }
// console.log(factorial(5))

