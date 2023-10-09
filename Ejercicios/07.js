
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function cuadrado(array){
    let result=[]
    for(let i=0 ; i<array.length; i++){
        result.push(Math.pow(array[i],2))
    }
    return result
}

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function sorting(array){
    let sorted=array.sort()
    return `${sorted[0]} ${sorted[array.length-1]}`
}
console.log(sorting([1, 4, 5, 99, -60]))

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function parIMpar(array){
    let pares=[];
    let impares=[];
    for(let i=0 ; i<array.length ; i++){
        if(array[i]%2==0)pares.push(array[i])
        if(array[i]%2!=0)impares.push(array[i])
    }
    return `Pares ${pares} , Impares: ${impares}`
}
console.log(parIMpar([1,2,3,4,5,6,7,8,9,0]))