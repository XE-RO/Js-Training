// // 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// function binADec(num){
//     let arr1=num.toString().split("").reverse()
//     let result=0
//     for(let i=0 ; i<arr1.length ; i++){
//         result+=Math.pow(2,i)*arr1[i]
//     }
//     return result
// }

// // 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// function descuento(price,discount){
//     let porcent=price*discount/100
//     return `Precio original: $${price} - Descuento: ${discount}% ($${porcent}) :::::: Precio final = ${price-porcent}`
// }
// console.log(descuento(1000,20))
// // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// function countYears(Y,M,D){
//     let date=new Date(Y,M,D)
//     let today=new Date()
//     let result=today.getFullYear()-date.getFullYear()
//     return result
// }
// console.log(countYears(1984,4,23))