// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
function sorting(array){
    let obj={}
    let Menor=array.map(x=>x).sort()
    let Mayor=array.map(x=>x).sort().reverse()

    obj["Mayor a Menor"]=Mayor
    obj["Menor a Mayor"]=Menor
    return obj
}
console.log(sorting([7, 5,7,8,6]))

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

function deleteTwins(array){
   let result=array.filter((element,index,array)=>array.indexOf(element)===index)
   return result
}
console.log(deleteTwins(["x", 10, "x", 2, "10", 10, true, true]))

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
function average(array){
    let result=0
    for(let i=0 ; i<array.length ; i++){
        result+=array[i]
    }
    return result/array.length
}
console.log(average([9,8,7,6,5,4,3,2,1,0]))