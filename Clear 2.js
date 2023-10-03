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

//                                                                 
//                                                                                Try Catch
// console.log(c+Number.parseInt(b))
// try{
//     let numero="1ads"
//     if(isNaN(numero))throw new Error("El caracter no es un numero")
//     console.log(numero*5)
// }catch(error){
//     console.log(error)
//     console.log(`Se produjo el siguiente ${error}`)
// }


//                                                                            Destructuracion

// let numeros=[1,2,3]

// let[one,two,three]=numeros

// console.log(two)

// const persona={nombre:"Xavier",apellido:"Delgado",edad:22}

// let {nombre,edad,apellido}=persona

// console.log(edad)

//                                                                          Objetos literales
        
//   let name=`Kenai`,age=7

//   const dog1={
//     name:name,
//     age:age,
//     bark:function(){
//         return (`Guau guau!!!`)
//     }
//   }
//   const dog2={
//     name,age,race:"chihuahua",bark1(){
//         return "guau guau Guau!!!"
//     }
//   }
//   console.log(dog2.bark1())
                 
//                                                                       Rest Parameters
// function sumar(a,b,...c){
//     let resultado = a + b
//     c.forEach((x)=>{
//         resultado+=x
//     })
// //console.log(c)
//     return resultado
// }

// console.log(sumar(2,3,4,5,6,))

//                                                                     Spread operator

// let arr1=[1,2,3,4,5],
//     arr2=[6,7,8,9,0]

//     let arr3=[...arr1,...arr2]
//     console.log(arr1,arr2)

//     console.log(arr3)

//                                                                       Arrow functions (pueden cambiar el contexto)

// const perro={
//     nombre:"Kenai",ladrar(){                                             
//         console.log(this)   
//     }
// }
// const perro2={
//     nombre:"Kenai",ladrar:()=>{
//         console.log(this)
//     }
// }
// console.log(perro.ladrar())

//                                                                               Prototipos


// function Animales(name,gender){
//     this.name=name
//     this.gender=gender
// }


// let animal1=new Dog("Perro","H","Medium")
// let animal2=new Animales("Gato","M")

// Animales.prototype.greeting=function(){
//     return `Hola soy un ${this.name}`
// }
// Dog.prototype.sound=function(){
//     return `Hago sonidos porque estoy vivo`
// }
// console.log(animal1.greeting())
// console.log(animal2.greeting())
// console.log(animal1.sound())
// console.log(animal2.sound())

//                                                                           Herrencia prototipica
// function Dog(name,gender,size){
//     this.super=Animales
//     this.super(name,gender)
//     this.size=size
// }
// Dog.prototype=new Animales()
// Dog.prototype.constructor=Dog
// Dog.prototype.sound=function(){
//     return `Soy un perro *Ladrido*`
// }
// Dog.prototype.bark=function(){
//     return `Guau Guau!!`
// }
// console.log(animal1.sound())

// //                                                                                   Clases


// class Animal{
// //Atributos
//     constructor(name,gender){
//     this.name=name;
//     this.gender=gender;
// }
// // Metodos
// sound(){
//     return `I make sounds because i´m alive`
// }
// greeting(){
//     return `Hi my name is ${this.name}`
// }
// }
// let Mimi=new Animal("Mimi","Female")
// let Scooby=new Animal("Scooby","Male")


// console.log(`${Mimi.greeting()} ${Mimi.sound()}`)
// console.log(`${Scooby.greeting()} ${Scooby.sound()}`)

// class Dog extends Animal{
//     constructor(name,gender,size){
//         super(name,gender);
//         this.size=size
//         this.breed=null
//     }
//     sound(){
//         return `I'm a dog my sound is a bark`
//     }
//     bark(){
//         return `guau Guau!!`
//     }
//     static description(){
//         return 'I´m a dog and we are the man´s best friend'
//     }
//     //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Getters & Setters
//     get getBreed(){
//         return this.breed
//     }
//     set setBreed(breed){
//         this.breed=breed;

//     }
// }
// Scooby=new Dog("Scooby","Male","Giant")    
// console.log(Scooby.bark())
// console.log(Scooby.sound())
// console.log(Scooby)
// console.log(Dog.description())

// console.log(Scooby.getBreed)
// Scooby.setBreed=`Gran danés`
// console.log(Scooby.getBreed)


//                                                                                                Objeto Console

// console.error(`Esto es un error`)
// console.warn(`Esto es un aviso`)
// console.info(`Esto es in info`)
// console.log("mensaje normal en consola")

// console.group(`First Group`)
// console.log(1)
// console.log(2)
// console.log(3)
// console.groupEnd()


// console.table(Object.entries(console).sort())

// const numbers=[1,2,3,4,5],
// vowels=["a","e","i","o","u"]
// console.table(numbers)
// console.table(vowels)
// const Dog={
//     Name:"Bonie",
//     Breed:"Boxer",
//     color:"Brown"
// }
// console.table(Dog)

// console.time(`How much time my code takes`)
// const array1=Array(1000000)

// for(let i=0 ; i<array1.length ; i++){
//     array1[i]=i
// }
// console.timeEnd(`How much time my code takes`)

///////////////

// for(let i=0 ; i<=100 ; i++){
//     console.count(`For code`)
//     console.log(i)
// }


let x=3,
y=2,
testXY="X must be small than Y";
console.assert(x<y,{x,y,testXY})