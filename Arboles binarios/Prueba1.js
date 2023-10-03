function BinarySearchtree (value){
    this.root=value
    this.right=null
    this.left=null
}


BinarySearchtree.prototype.insert=function(value){
    //Rigth
    if(value>this.root){
        if(this.right!=null){
            this.right.insert(value)
        }else{
            this.right=new BinarySearchtree(value)
        }
    }else if(value<this.root){
        if(this.left!=null){
            this.left.insert(value)
        }else{
            this.left=new BinarySearchtree(value)
        }
    }
}

BinarySearchtree.prototype.contains=function(value){
    if(this.root===value)return true
    if(value>this.root){
        if(this.right==null)return false
        return this.right.contains(value)
    }
    
    if(value<this.root){
        if(this.left===null)return false
        return this.left.contains(value) 
    }
}


nuevo=new BinarySearchtree(8)

nuevo.insert(9)
nuevo.insert(4)
nuevo.insert(10)
nuevo.insert(12)
nuevo.insert(2)
nuevo.insert(3)
nuevo.insert(5)

console.log(nuevo.contains(1))

console.log(nuevo)
