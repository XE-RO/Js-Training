// function binarySearchTree(value){
//     this.node=value
//     this.left=null
//     this.right=null
// }


// //METODO ADD

// binarySearchTree.prototype.add=function(value){
//     if(value < this.node){
//         if(this.left!=null){
//             this.left.add(value)
//         }else 
//         this.left=new binarySearchTree(value)
//     }else{
//         if(this.right!=null){
//             this.right.add(value)
//         }else 
//         this.right=new binarySearchTree(value)
//     }
// }

// //METODO CONTAINS
// binarySearchTree.prototype.contains=function(value){
//     if(value==this.node){return value
//     }else{
//     if(value<this.node){
//         if(this.left==null){
//             return false
//         }
//         return this.left.contains(value)
//     }else{
//         if(this.right==null){
//             return false
//         }return this.right.contains(value)
//     }
// }
// }

// binarySearchTree.prototype.search=function(value){
//     let array1=[]
//     if(value==this.node){
//         array1.push(value)
//     return array1
// }else{
//         if(value<this.node){
//             if(this.left==null){
//                 return false
//             }return this.left.search(value)
//         }else{
//             if(this.right==null){
//                 return false
//             }return this.right.search(value)
//         }
//     }

// }


// let nueva=new binarySearchTree(8)
// nueva.add(2)
// nueva.add(1)
// nueva.add(4)
// nueva.add(9)
// nueva.add(10)
// nueva.add(11)
// // console.log(nueva.contains(1))

// // console.log(nueva.search(8))

// // console.log(nueva)




// let array1=[1,5,7,3,2,4,8,9,5,6]
// let array2=[1,7,3,2,4,8,9,5,6]

// function bubblesort(array){ 
//     for(let i=0; i<array.length ; i++){
//         for(let j=i+1 ; j<array.length ; j++){
//             if(array[i]>array[j]){
//                 let aux
//                 aux=array[i]
//                 array[i]=array[j]
//                 array[j]=aux
//             }
//         }
//     }
//     return array
// }
// //console.log(bubblesort(array1))

// function selectionSort(array){
//     for(let i=0 ; i<array.length ; i++){
//         let min = i
//         for(let j=i+1 ; j<array.length ; j++){
//             if(array[j]<array[min]){
//                 min=j
//             }
//         }
//         if(i!==min){
//             let aux=array[i]
//             array[i]=array[min]
//             array[min]=aux
//         }
//     }
//     return array
// }

//FUNCIONA PERO NO ES LO ESPERADO

// function generateHashtag (str) {
//     if(str.length>140){
//         let word=str.split(" ").join("")
//         if(word.length<2){
//             return false
//         }else{

//         }
//     }
// if(str[0]==="#"){
//     let nohash=str.split("").slice(1).join("") //eliminamos el "#"
//     let word=nohash.split(" ") //separamos por "palabra"
//     //console.log(word)
//     return word.map(x=>x[0].toUpperCase()+x.slice(1)).join("") //letras iniciales e mayusculas
// }
//     }
// console.log(generateHashtag(" ".repeat(141)))

  

//CODE WARS HASHTAG

// function generateHashtag(str){
//     let word=str.split(" ").join("")
//     if(word.length>=140|| word.length<1){
//             return false
//     }else{
//         let Words=str.split(" ")
//         let spaces=Words.filter(x=> x !== "") 
//         let hashTag=""
//     hashTag=spaces.map(x=>x[0].toUpperCase()+x.slice(1)).join("")
//     return "#"+hashTag  
// }
// }
// console.log(generateHashtag("code"+" ".repeat(140)+" wars"))

//Si enumeramos todos los números naturales menores de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23. Termine la solución para que devuelva la suma de todos los múltiplos de 3 o 5 debajo del número pasado.


// function pairs(String){
//     let array=[]
//     for(let i=0 ; i<String.length ; i+=2){
//         array.push (String.slice(i,i+2))
//     }
//     return array
// }
// console.log(pairs("abcd"))

// let a= 2
// let b =new Number(1)
// let c=7.19
// let d="5.65"
// console.log(c+Number.parseInt(b))
// try{
//     let numero="1ads"
//     if(isNaN(numero))throw new Error("El caracter no es un numero")
//     console.log(numero*5)
// }catch(error){
//     console.log(error)
//     console.log(`Se produjo el siguiente ${error}`)
// }

let numeros=[1,2,3]

let[one,two,three]=numeros

console.log(two)

const persona={nombre:"Xavier",apellido:"Delgado",edad:22}

let {nombre,edad,apellido}=persona

console.log(edad)

