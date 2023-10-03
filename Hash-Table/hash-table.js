function hashTable(){
    this.array=[]
    this.buckets=35
}

//     UNICAMENTE REGRESA LA POSICION

hashTable.prototype.hash=function(key){ //determina en que bucket se almacenara el dato y lo metera ahi en objeto
    let hash=0
    
    for (let i = 0; i < key.length; i++) {
        hash+=key.charCodeAt(i)   
    }
    return hash % this.buckets

}

//  AGREGA EL VALOR EN EL ARRAY EN LA POSICION CORRECTA

hashTable.prototype.set=function(key,value){
    let index=this.hash(key)
    if(this.array[index]==null){
        this.array[index]={}
    }
    this.array[index][key]=value
   
    

}
hashTable.prototype.get=function(key){
    let index=this.hash(key)
        return this.array[index][key]
}
hashTable.prototype.haskey=function(key){
    let index=this.hash(key)
    if(this.array[index]!=null)return true
    return false

}

let nueva=new hashTable
nueva.hash("xavier")  //Hash de la palabra --->

nueva.set("xavier",123)
console.log(nueva.get("xavier"))
console.log(nueva.haskey("xavier"))


console.log(nueva)