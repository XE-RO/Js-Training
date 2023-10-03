function closure(){
    let array=[]
    return function(item){
        array.push(item)
        return array
    }
}

let miCaja=closure()
//en la variable esta la funcion retornada "miCaja" ---> function(item){...}

miCaja(1)
miCaja(2)
miCaja(3)
console.log(miCaja(4))

function counter() {
    counter=0
    return function(){
      return counter ++
  
    }
  }

  contar=counter()

  console.log(contar())
  console.log(contar())
  console.log(contar())
  console.log(contar())
  console.log(contar())

function multi(a){
  return a*2
}

function cache(cb){
  let cache={}
  return function(arg){
    if(cache.hasOwnProperty(arg)){
      return cache[arg]
    }else{
      return cache[arg]=cb(arg)
    }
  }
}
let test=cache(multi)

console.log(test(2))
console.log(test(2))
console.log(test(3))


