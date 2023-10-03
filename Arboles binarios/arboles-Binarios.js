function binarySearchTree(value){
    this.root=value
    this.left=null
    this.right=null
}

binarySearchTree.prototype.insert=function(value){
    if(value<this.root){
        if(this.left!=null){
            this.left.insert(value)
        }else{
            this.left=new binarySearchTree(value)
        }
    }else{
        if(this.right!=null){
            this.right.insert(value)
        }else{
            this.right=new binarySearchTree(value)
        }
    }
}

binarySearchTree.prototype.size=function(){
    let contador=0
    if(this.root!=null){
       contador++
    }if(this.left!=null){
        contador+=this.left.size()
    }if(this.right!=null){
        contador+=this.right.size()
        
    }
    return contador
}

binarySearchTree.prototype.contains=function(value){
    if(value==this.root)return true
    if(value>this.root){
        if(this.right===null)return false
        return this.right.contains(value)
    }
    if(value<this.root){
        if(this.left===null)return false
        return this.left.contains(value)
    }
    

}

let myList =new binarySearchTree(8)
myList.insert(3)
myList.insert(4)
myList.insert(9)
myList.insert(10)


console.log(myList)
console.log(myList.size())
console.log(myList.contains(9))