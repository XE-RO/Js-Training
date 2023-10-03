function recursiva(a){

    if(a==5)return a
    
    return recursiva(a+1)
}
console.log(recursiva(1))


function nFactorial(n) { //6
    if(n===0||n===1){
        return 1
    }else{
        
        return nFactorial(n-1)*n //6,5,4,3,2,1
    }
}
console.log(nFactorial(6))



function nFibonnacci(n){
    if(n===0 || n===1){
        console.log(n)
        return n
    }else{
        return nFibonnacci(n-1)+nFibonnacci(n-2)
    }
}


console.log(nFibonnacci(7))//13



