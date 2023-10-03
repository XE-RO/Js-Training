
let array1=[3,1,9,8,5]

function selectionSort(array){
    for(let i=0 ; i<array.length ; i++){
        let min=i

        for(let j=i+1 ; j<array.length ; j++){
            if(array[j]<array[min]){
                min=j
            }
        }
        if(i!==min){
            let aux=array[i]
            array[i]=array[min]
            array[min]=aux
        }
    }
    return array
    
}

console.log(selectionSort(array1))