
// /////////////////////////////////////////////////// BINARIO A DECIMAL
// let a =100100

// function binarioaDecimal(num){
//     let array=num.toString().split("").reverse()
//     let resultado = 0;
//     for(let i=0 ; i<array.length ; i++){

//         resultado=Math.pow(2,i)*array[i]
//     }
//     return resultado
// }
// console.log(binarioaDecimal(a))

///////////DECIMAL A BINARIO

// function decaBin(num){
//     let binarios=[]

//     while(num>0){
//         binarios.push(num % 2)
//         num=Math.floor(num/2)
//     }
//     return binarios.reverse().join("")

// }
// decaBin(36)

////////////////////////////////////////////////////////// CLOSURES 

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

// function counter(){
//     let contador=1
//     return function(){
//         return contador++
//     }
// }


/////* Ejercicio 2
// Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
// que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
// al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
// otra vez cálculos que ya se hicieron anteriormente.

// - cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

//   Ejemplo:
//   function square(n){
//     return n * n
//   }

//   const squareCache = cacheFunction(square)

//   squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
//   squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */


// function cacheFunction(cb){
//     let cache={}
    
//     return function(arg){
//         if(cache.hasOwnProperty(arg)){
//             //cache
//             return cache[arg]
            
//         }else{
//             //cache
//             return cache[arg]=cb(arg) 
//             //cache
//         }
//     }
// }
// function square(n){
//     return n * n
// }
// const squareCache=cacheFunction(square)
// console.log(squareCache(3))
// console.log(squareCache(3))
// console.log(squareCache(5))


//ESTRUCTURA DE DATOS

///////////////////////////////////////////////////////////BIND

// var instructor = {
//     nombre: 'Franco',
//     edad: 25,
//  };
 
//  var alumno = {
//     nombre: 'Juan',
//     curso: 'FullStack',
//  };
 
//  function getNombre() {
//    return this.nombre;}
 
//  /*
//    Ejercicio 3
//    IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
//    Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
//  */
 
//  let getNombreInstructor = getNombre.bind(instructor);
 
//  let getNombreAlumno = getNombre.bind(alumno);


//  /*
//   Ejercicio 4
//   Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
// */

// function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {

//     return delimitadorIzquierda + cadena + delimitadorDerecha;
// }

// let textoAsteriscos=crearCadena.bind(null,"*","*")
// let textoGuiones=crearCadena.bind(null,"-","-")
// let textoUnderscore 


//  console.log(textoGuiones("hola"))


///////////////////////////////////////RECURSIVIDAD



/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//////////////////////////FACTORIAL

// let a = 5;
// function nFactorial(num){
//     if(num<1){
//         return 1
//     }
//     return nFactorial(num-1)*num
// }
// console.log(nFactorial(3))

/////////////////////////FIBONNACCI

// function nfibonacci(num){
//     if(num==0 || num===1){
//         return num
//     }
//     return nfibonacci(num-1)+nfibonacci(num-2)

// }
// console.log(nfibonacci(7))

//////////////////////////////// OBSERVACIÓN
// function suma(a,b){
//     return a+b
// }

// function multi(a,b){
//     return a*b
// }
// console.log(suma(1,2)+multi(3,2))


///////////////////////////////////////////PROTOTIPOS

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// function Queue(){
//     this.array=[]
// }
// Queue.prototype.enqueue=function(args){
//     this.array.push(args)
// }
// Queue.prototype.dequeue=function(){
//     if(this.array.length===0){
//         return undefined
//     }this.array.shift()
// }
// Queue.prototype.size=function(){
//     return this.array.length
// }




/////////////////////////////////LINKED LIST

/* EJERCICIO 1
  Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
  */
          

// function linkedList(){
//     this.head=null
// }
// function Node(value){
//     this.value=value
//     this.next=null
// }


// linkedList.prototype.add=function(value){ //se crea un prototype add()
//     let current=this.head              // se instancia el elemento head
//     let nodo=new Node(value)          // se instancia la clase Node y sus propiedades
//     if(this.head===null){      // si el head esta vacio
//         this.head=nodo       // se le añadira la clase Node al head
//     }else{                 //ademas
//         while(current.next!==null){  // mientras la propiedad next del head este llena  ====(si no lo esta)=====|         
//             current=current.next     // se le añadira un next vacio para el siguiente dato                      |
//         }                       // se termina el mientras (while)                                               |
//         return current.next=nodo   // se añade la clase Node al .next del head        <<<=======================|
//         console.log(this.head)
//     }

// }

// let lista1=new linkedList

// lista1.add("hola")
//  lista1.add("segundo dato")
//  lista1.add("tercer dato")

// console.log(lista1)


// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]


/////////////////////////////////FOREACH
// const array1 = [1, [2, [3,4]], [5,6], 7]

// var countArray = function(array) {
//     // Tu código aca:
//     let resultado = 0;
//     array.forEach(x=>{
//       if(Array.isArray(x)){
//         resultado+=countArray(x)
//       }else{
//         resultado+=x
//       }
//     })
//     return resultado
// }
// console.log(countArray([1, [2, [3,4]], [5,6], 7]))



// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados

// // Ejemplo:
// let objeto1 = {
//   a: {
//     a1: 10,
//     a2: "Franco",
//     a3: {f: "r", a: "n", c: {o: true}},
//   },
//   b: 2,
//   c: [1, {a: 1}, "Franco"],
// };
// // countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// // dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.

// // Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

// let countProps = function (obj) {
//   // Tu código aca:
//   let total=Object.keys(obj).length //se crea una variable "total" que recibe el metodo keys
//   console.log(Object.keys(obj))

//   for(let prop in obj){
//     if(typeof obj[prop]==="object" && !Array.isArray(obj[prop])){
//       total+=countProps(obj[prop])
//     }
//   }
//   return total
// };

// console.log(countProps(objeto1))

//CLOSURES

// let obj1={}
// let primer="primer dato"
// let segundo="segundo"
// obj1[1]=primer
// obj1[2]=segundo

// contenedor=function(){
//   let caja=[]
//   return function(item){
//     caja.push(item)
//     return caja
//   }
// }
// let miCaja= contenedor()
// console.log(miCaja(2))



// Necesitamos cerrar las cuentas del hospital antes de que termine el mes. Hay que calcular el total de los gastos 
// medicos del paciente. Para esto, crea una función que recibe un número (precio) y devuelva otra función. Esta
// segunda función, a su vez, debe recibir otro número. Finalmente se deben sumar ambos números y retornar el resultado.
// Estarás construyendo una closure.

// EJEMPLO
// const suma = sumarCostos(15)
// suma(5) ------> 20
// function sumarCostos(precio){
// Aca ponen su codigo
// }
// Requisito
// Si la funcion recibe un cero por parametro entonces debe devolver false

// let myArray=[5,4,6,3,2,1]
// console.log(myArray.slice(2,4))

// function quickSort(array){
//   if(array.length <= 1)return array
  
//   let random=Math.floor(Math.random()*array.length)
  
//   let pivot=array[random]
//   let right=[]
//   let left=[]
//   let equals=[]
  
  
//   for(let i = 0 ; i<array.length ; i++){
//     if(array[i] !== pivot){
//       if(array[i] < pivot){
//         left.push(array[i])
//       }else right.push(array[i])
      
//     }else equals.push(array[i])
//   }
//   return quickSort(left).concat(equals).concat(quickSort(right))
// }
// console.log(quickSort(myArray))


// let array1=[1,2,3]

// let array2=[]

// for(let i=0 ; i<array1.length ; i++){
//   array2.push(array1[i])
// }

//LINKED LIST
// function linkedList(){
//   this.head=null
// }
// function Node(value){
//   this.value=value
//   this.next=null
// }

// // METODO ADD

// linkedList.prototype.add=function(value){
//   let current=this.head
//   let node=new Node(value)
//   if(current===null){
//     this.head=node
//     }else{
//   while(current.next!=null){
//     current=current.next
//   }
//   current.next=node
// }
// }

// // METODO REMOVE

// linkedList.prototype.remove=function(){
//   let current=this.head
 
//   while(current.next.next!=null){
//     current=current.next
//   }

//   if(current.next.next===null){
//     current.next=null
//   }
// }

// // METODO SEARCH

// linkedList.prototype.search=function(value){
//   let current=this.head
//   while(current.next!=null){
//     current=current.next
//   }
//   if(current.value==value){
//     return value
//   }else return false

// }


// // let nueva = new linkedList

// // nueva.add("primer dato")
// // nueva.add("segundo dato")
// // nueva.add("tercer dato")
// // console.log(nueva.search("tercer dato"))
// // console.log(nueva)



// // BINARY SEARCH TREE

// function binarySearchTree(value){
//   this.value=value
//   this.right=null
//   this.left=null
// }

// // METODO ADD MAYORES(>) MENORES (<)

// binarySearchTree.prototype.add=function(value){
//   if(value<this.value){
//     if(this.left===null){
//       this.left=new binarySearchTree(value)
//     }else this.left.add(value)
//   }else{
//     if(this.right===null){
//       this.right=new binarySearchTree(value)
//     }else this.right.add(value)
//   }
// }

// let nuevo=new binarySearchTree(8)
// nuevo.add(5)
// nuevo.add(3)
// nuevo.add(9)
// nuevo.add(10)
// nuevo.add(6)

// //console.log(nuevo)


// //funcion que determine si es par o inpar un numero

// function parImpar(value){
//   return value % 2===0 ? "Es par" : "No es par"
// }

// console.log(parImpar(0))

// function hero(bullets,dragons){
//   let calculo=bullets/dragons
//   if(calculo>=2)return true
//   return false
// }
// console.log()


//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function moveZeros(array){
//   function zero(num){
//     return num !==0
//   }
//   let deleting=array.filter(zero)
//   let Zeros=[]
//   array.forEach(x=>{
//     if(x===0){
//       Zeros.push(x)
//     }
//   });

//   return deleting.concat(Zeros)
// }

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))


// ROT 13

//  A , B , C , D , E , F , G , H , I , J , K , L , M,
//  |   |   |   |   |   |   |   |   |   |   |   |   |
//  N , O , P , Q , R , S , T , U , V , W , X , Y , Z

function Rot13(String){
  let Char=String.split("")
  let result=""
  Char.map((x)=>{
    let element=x
    switch(element){
      case "A":
        result+="N"
        break;
      case "B":
        result+="O"
        break;
      case "C":
        result+="P"
        break;
      case "D":
        result+="Q"
        break;
      case "E":
        result+="R"
        break;
      case "F":
        result+="S"
        break;
      case "G":
        result+="T"
        break;
      case "H":
        result+="U"
        break;
      case "I":
        result+="V"
        break;
      case "j":
        result+="w"
        break;
      case "K":
        result+="X"
        break;
      case "L":
        result+="Y"
        break;
      case "M":
        result+="Z"
        break;
      case "N":
        result+="A"
        break;
      case "O":
        result+="B"
        break;
      case "P":
        result+="C"
        break;
      case "Q":
       result+="D"
        break;
      case "R":
       result+="E"
        break;
      case "S":
      result+="F"
        break;
      case "T":
        result+="G"
        break
      case"U":
        result+="H"
        break;
      case "V":
        result+="I"
        break;
      case "W":
        result+="J"
        break;
      case "X":
        result+="K"
        break;
      case "Y":
       result+="L"
        break;
      case "Z":
        result+="M"
        break;
      ///////////////////
  
      case "a":
        result+="n"
        break;
      case "b":
        result+="o"
        break;
      case "c":
        result+="p"
        break;
      case "d":
        result+="q"
        break;
      case "e":
        result+="r"
        break;
      case "f":
        result+="s"
        break;
      case "g":
        result+="t"
        break;
      case "h":
        result+="u"
        break;
      case "i":
        result+="v"
        break;
      case "j":
        result+="w"
        break;
      case "k":
        result+="x"
        break;
      case "l":
        result+="y"
        break;
      case "m":
        result+="z"
        break;
      case "n":
        result+="a"
        break;
      case "o":
        result+="b"
        break;
      case "p":
        result+="c"
        break;
      case "q":
       result+="d"
        break;
      case "r":
       result+="e"
        break;
      case "s":
      result+="f"
        break;
      case "t":
        result+="g"
        break
      case"u":
        result+="h"
        break;
      case "v":
        result+="i"
        break;
      case "w":
        result+="j"
        break;
      case "x":
        result+="k"
        break;
      case "y":
       result+="l"
        break;
      case "z":
        result+="m"
        break;
      case /[A-ZÑÁËÍÓÚÜa-zñáéíóúü0-9;._*$%"&!()¿?{}\/-]/:
        result+=element
        break;
    }
    
  })
  return result

}

 

