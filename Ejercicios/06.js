// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
function Words(string){
    let re=/[aeiouAEIOU]/g
    re.lastIndex=0
    let counterV= string.match(re).length
    let reC=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g
    reC.lastIndex=0
    let counterC=string.match(reC).length

    return `Numeros de Vocales: ${counterV}, Numero de Consonantes:${counterC}`
}
console.log(Words("Lorem ipsum dolor sit amet,consectetur adipiscing elit"))
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function validateName(Name){
    let re=/^[A-Za-zÁÉÍÓÚáéíóúüÜ\s]+$/g
    if(re.test(Name)==true)return `${Name} Es un nombre valido`
    return `${Name} No es un nombre valido`
}
console.log(validateName("Xavier"))
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function validateMail(mail){
    let re=/@gmail.com/g
    if(mail.match(re))return `${mail} Es un mail valido`
    return `${mail} No es un mail valido`
}
console.log(validateMail("xavier_777@gmail.com"))


// Expresiones regulares:

// let str1="abcdeff"
// let re=/[aeiouAEIOU]/g; 
// let result=str1.match(re)
// console.log(result)         //   :::::::::::: ['a','e']