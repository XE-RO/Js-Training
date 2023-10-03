////////////////CLASE FUNCIONAL & CLASE//////////////////////////////////////

// function Persona(nombre,edad){
//     this.nombre=nombre
//     this.edad=edad
// }

// persona1=new Persona("xavier",22)

// console.log(persona1)




////////////////////LINKED LIST/////////////////////

function linkedList(){
    this.head=null
}
function Node(value){
    this.value=value
    this.next=null
}

linkedList.prototype.add=function(value){
    let current=this.head
    let nodo=new Node(value)

    if(this.head==null){
        this.head=nodo
    }else{
        while(current.next){
            current=current.next
        }
        current.next=nodo
    }
}
    

    // linkedList.prototype.remove=function(){
    //     let current=this.head
    //     if(!current){
    //         return null
    //     }else if(!current.next){}
    // }


let nuevaLista=new linkedList

nuevaLista.add("1er Dato")
nuevaLista.add("2do Dato")
nuevaLista.add("3er Dato")

console.log(nuevaLista)




