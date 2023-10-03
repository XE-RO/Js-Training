let array1=[3,1,9,8,5]
//          i
//            j

//COMPARA DE A DOS RECURRIENDO UNA Y OTRA VEZ HASTA ORDENAR 
function bubbleSort(array){ 
    
for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
        if(array[j]>array[j+1]){
            let aux=array[j]
            array[j]=array[j+1]
            array[j+1]=aux
        }
    }
}
return array
}


console.log(bubbleSort(array1))

