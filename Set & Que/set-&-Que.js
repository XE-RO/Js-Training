let arr=[2,2,5,6,3,"hola",function(){},null,undefined,56,3,57]

let miSet=new Set(arr)


console.log(miSet)

let nueva=[...miSet]
nueva.pop()
console.log(nueva)

class Queue{
    constructor(){
        this.array=[]
    }
    enqueue(arg){
        this.array.unshift(arg)
    }
    dequeue(){
        if(this.array.length>0){
            this.array.shift()
        }else{
            return undefined
        }
    }
    size(){
        return this.array.length
    }

}

let nuevo=new Queue

nuevo.enqueue("hola")
nuevo.enqueue("Segundo")
nuevo.enqueue("Tercero")
console.log(nuevo)
nuevo.dequeue()
console.log(nuevo)

console.log(nuevo.size())
