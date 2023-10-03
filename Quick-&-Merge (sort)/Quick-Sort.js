let myArray=[9,7,3,1,5,3,6]

function quickSort(array){
    if(array.length<=1)return array //obviamente si solo hay un elemento no hay nada que ordenar y regresara el unico elemento
    let random=Math.floor(Math.random()*array.length) //numero random dentro del margen de los indices del array
    console.log(random)
    let pivot=array[random]//guardamos el elemento en la variable pivot
    let equals=[] // array vacio para IGUALES
    let left=[]   // array vacio para MENORES
    let right=[] // array vacio para MAYORES
    for(let i=0 ; i<array.length ; i++){ // se crea un bucle for para recorrer el array
        if(array[i]!==pivot){                    //si el elemento i es destinto del pivot se ejecutara esto...
            if(array[i]<pivot)left.push(array[i])//...se pusheara al arreglo left(izquierda)
            else right.push(array[i])//si no es menor se pusheara en right(derecha)
    }
    else equals.push(array[i])//si el elemento es igual a pivot, se puesheara al array equals(iguales)
}
return quickSort(left).concat(equals).concat(quickSort(right))//aqui se concatenan todos los arreglos y se hace recursion 
}

console.log(quickSort(myArray))