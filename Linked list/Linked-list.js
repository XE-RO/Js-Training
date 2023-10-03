function LinkedList() {
    this.head=null
}
function Node(value){
    this.value=value
    this.next=null
}

//add, remove, search

LinkedList.prototype.add=function(arg){
    let current = this.head
    let node = new Node(arg)

    if(this.head===null){
        this.head=node
    }else{
    while(current.next!=null){
        current=current.next
    }
    current.next=node
}
}


LinkedList.prototype.search=function(arg){
    let current=this.head
    
    if(this.head.value===arg){
        return true
        
    }else{
        while(current.next){
            if(current.value==arg || current.next.value===arg){
                return true
            }
            current=current.next
        }
        return false
    } 
}

let miLista = new LinkedList
LinkedList.prototype.remove=function(){
    let current=this.head

    if(current.next!=null){

        while(current.next.next!=null){
            current=current.next
        }
        let aux=current.next.value
        current.next=null
        return aux
    }
}

miLista.add(1)
miLista.add(2)
miLista.add(3)
miLista.add(4)
miLista.add(5)

console.log(miLista.remove())
console.log(miLista)
console.log(miLista.search(4))
let objeto={}
objeto["nombre"]="xavier"
console.log(objeto)
