let array2= [5,4,2,3,1]

function insertionSort(array){
    for (let i = 1; i < array.length; i++) { //i empieza en 1
        let j=i -1;                          //j es i-1 (j=0) j va ir un indice atras para comparar
        let aux =array[i]                   // guardamos lo que haya en el indice i en aux
        
        while(j >= 0 && aux < array[j]){     //mientras j sea menor o igual a 0 y el aux sea menor a lo que haya en el indice j
            array[j + 1]=array[j]           // añadira lo que haya en el indice j en la posicion delante de j
            j--                             //j decrementara 
            //console.log(j)
        }                                   // acá se rompe el while
        array[j+1]=aux                      // añadimos lo que guardo la variable aux, al indice que va delante de j
    }   
        return array                        // retorna el array
    }
    console.log(insertionSort(array2))


   