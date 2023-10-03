/*
function numeroBinario(num){
    let binario=[]

    while(num>=1){
        let resultado=num%2
        //console.log(resultado)


        num=Math.floor(num/2)
        //console.log(num)
        

        binario.unshift(resultado)
    }
    return binario.join("")

}
console.log(numeroBinario(7))



//////////

let numero1 = 10%2


console.log(numero1)
*/


/*
////// FUNCION BINARIO A DECIMAL :D

function binarioDEC(num){
    let array=num.toString().split("")
    for(let i=0 ; i<array.length ; i++){
       exp=Math.pow(2,array.length-1)*array[i]
        return exp
    }
}
console.log(binarioDEC(1000))

*/

// //FUNCION DECIMAL A BINARIO
//  function DecABinario(num){
//     let binario=[]
//     while(num>=1){
        
//         bin=num%2             //guarda el residuo de "num" (PAR=0 || IMPAR=1)
//         binario.unshift(bin)
//         num=Math.floor(num/2) // se va actualizando el numero en "num", por cada iteracion
//         console.log(bin)
        
//     }
//     return binario

//  }
//  console.log(DecABinario(36))

// //Esto es un closure

// function closure1(){
    
//     function funcion1(args){
//         console.log(args+"desde la funcion #1")

//     }
//     function funcion2(args){
//         console.log(args+"desde la funcion #2")

//     }
//     function funcion3(args){
//         console.log(args+"desde la funcion #3")

//     }
//     return {
//         funcion1,
//         funcion2,
//         funcion3
//     }
    

// }

// let capsula=closure1()

// capsula.funcion1(1 + " ")
// //capsula.funcion2(2 + " ")
// capsula.funcion3(3 + " ")

// ////////////////HOMEWORK 3///////////////////

// function palabra(x){
//     return x

//   }

// function cacheFunction(cb) {
//   let cache={}

//   return function(arg){
//     if(cache.hasOwnProperty(arg)){
//       console.log(cache[arg])
//     }else{
//       console.log((cache[arg]=cb(arg)))
//     }
//   }
// }

// let closure=cacheFunction(palabra)
// closure("hola")

// /////////////////////////////////////

// let textoAsteriscos = crearCadena.bind(this,"*","*");
// let textoGuiones = crearCadena.bind(this,"-","-");
// let textoUnderscore = crearCadena.bind(this,"_","_");

// /////////
// let getNombreInstructor = getNombre.bind(instructor);

// let getNombreAlumno = getNombre.bind(alumno);
// ////////

//  // function palabra(x){
//   //   return x

//   // }

// function cacheFunction(cb) {
//   let cache={}

//   return function(arg){
//     if(cache.hasOwnProperty(arg)){
//       return (cache[arg])
//     }else{
//       return((cache[arg]=cb(arg))) // se asigna el resultado de la funcion cb y utiliza el argumento del callback Despues lo añade a la cache//
//     }
//   }
// }
// ////////////////

// function counter() {
//   let contador=0
//   return function(){
//     contador++
//     return contador
//   }
//   }
//   //let incremento=counter()


                    // fn(4)
function nfibonacci(posicion){

  if(posicion===1||posicion===0){
    return posicion
  }
  
  return (nfibonacci(posicion-1) + nfibonacci(posicion-2)) //recuerda el valor de la primera operacion *(n-1) [6,5,4,3,2,1]* (n-2) [5,4,3,2,1,0]
   
                   //fn(3)         ||        //fn(2)
    //                  2                         1
              //  (fn(2) + fn(1)     ||     fn(1) + fn(0)
    //               1        1                   1
            //  fn(1)    +    fn(0)  ||  
    //             1            0

}                
console.log(nfibonacci(7))


function nfactorial(n){
  if(n===1||n===0){
    return n
  }

  return nfactorial(n-1)*n

}
console.log(nfactorial(4))



class Queue{
  constructor(){
    this.array=[]
  }
  enqueue(arg){
    this.array.push(arg)
}
dequeue(){
    this.array.shift()
}
size(){
  return this.array.length
}
}
let ejemplo1=new Queue
ejemplo1.enqueue("hola")
ejemplo1.enqueue("segundo elemento")

console.log(ejemplo1.size())


// //CLASES Y RPOTOTIPOS
// function nuevaClase(){
//    constructor()
//     this.array=[]
// }
// nuevaClase.prototype.pushear=function(arg){
//   this.array.push(arg)
// }

// let prueba=new nuevaClase



// prueba.pushear("hola")

// console.log(prueba)

/////////////Linked list
// function Nodo(datos){
//   this.datos=datos
//   this.ultimoDato=null
// }
// function linkedList(){
//   this.length=0
//   this.head=null
// }


// let nuevaLista=new linkedList()

//                                                                                                                                                                                                 console.log(nuevaLista)  //Lista vacia   ======>

// linkedList.prototype.agregar=function(datos){
//   let nodo=new Nodo(datos)

//   let current=this.head

//   if(!current){
//     this.head=nodo
//   }else{
//     while(current.ultimoDato){
//       current=current.ultimoDato
//     }
//     current.ultimoDato=nodo
//   }

// }

// nuevaLista.agregar("primer dato")
// nuevaLista.agregar("2do dato")
// console.log(nuevaLista)






function linkedList(){
  this.head=null
}
function Node(value){
  this.data=value
  this.next=null
}
linkedList.prototype.add=function(value){
  let node=new Node(value) //{data: value, next:null}
  let current=this.head //null, mira al head 
  if(!current){         //current===null
    this.head=node
    return node
  }

  let newList= new linkedList
  newList.add(5)
  console.log(newList)


}