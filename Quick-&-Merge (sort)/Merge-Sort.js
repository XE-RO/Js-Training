let myArray=[9,7,3,1,5,3,6]

//MERGE SORT DIVIDE EL ARRAY HASTA QUEDARSE CON DOS ELEMENTOS PARA COMPARARLOS Y ORDENARLOS

function mergeSort(array){
    if(array.length<=1)return array //condicion de corte (si el arreglo tiene un elemento o menos)
    let mitad=Math.floor(array.length/2)// obtenemos la mitad del array en numero
    let left=array.slice(0,mitad)//le pedimos que divida el array de la izquierda desde el indice 0, hasta la mitad del array
    let right=array.slice(mitad)// dividimos a la mitad el array  de la derecha

    array=[] //creamos un arreglo vacio        <-------------------------------------------------------------------
//                                                                                                                 |
    left=mergeSort(left)//hacemos recursion en el arreglo izquierdo                                                |
    right=mergeSort(right)//hacemos recursion en el arreglo derecho                                                |
    //                                                                                                             |
    while(left.length && right.length){ //mientras tengan una longitud (array derecho e izquierdo)                 |
        if(left[0]<right[0]){//si el primer elemento del array left es menor al primero del array right            |
            array.push(left.shift())//sacamos el primer elemento de left y lo metemos en el array       -----------| ---
        }else array.push(right.shift())//si no es menor, sacamos el promer elemento del right y lo pusheamos al array---|
    }
    return array.concat(left,right)//concatenamos las dos recursiones, las metemos en el array y retornamos el array
    //  NOTA: las recursiones no se concatenan hasta que terminan completamente su operacion (solo concatenan su resultado)
}

console.log(mergeSort(myArray))


