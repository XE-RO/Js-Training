// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.✅
//   - Valida que el director no rebase los 50 caracteres.✅
//   - Valida que el año de estreno sea un número entero de 4 dígitos.✅
//   - Valida que el país o paises sea introducidos en forma de arreglo.✅
//   - Valida que los géneros sean introducidos en forma de arreglo.✅
//   - Valida que los géneros introducidos esten dentro de los géneros ✅
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.✅
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser ✅
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.✅
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula{
    constructor(idIMDb,Title,Director,Year,Countries,Gender,Score){
        this.idIMDb=idIMDb;
        this.Title=Title;
        this.Director=Director;
        this.Year=Year;
        this.Countries=Countries;
        this.Gender=Gender;
        this.Score=Score;
    }
    insertId(letter,nums){
        let result=""
        let re=/[a-zA-Z]/g
        let re1=/[0-9]/g
        if(letter.length<2||letter.length>2 || !re.test(letter))return `id must have 2 letters`
        result=letter
        if(nums.toString().length<7 || nums.toString().length>7 || !re1.test(nums))return `id must have 7 numbers after the letters`
        result+=nums
        this.idIMDb=result
        return `"${result}" assigned successfully`
    }
    insertTitle(title){
            if(typeof title!="string")return `title must be String `;
            if(title.length>100)return `title is too long`;
            this.Title=title;
            return `"${title}" assigned successfully`;
    }
    insertDirector(name){
        if(typeof name!="string")return `title must be String `;
        if(name.length>50)return `title is too long`;
        this.Director=name;
        return `"${name}" assigned successfully`
    }

    insertYear(year){
        if(typeof year != "number")return `year must be a number`
        if(year.toString().length>4 || year.toString().length<4)return `insert the year YYYY (4 Characters)`
        this.Year=year
        return `${year} assigned successfully`
    }
    insertCountries(array){
        if(typeof array != "object")return `Countries must be an array`
        this.Countries=array
        return `[${array}] added successfully`
    }
    insertGender(array){
        let re=/^Action+$|^Fantasy+$|^Adventure+$|^Drama+$|^Suspense+$|^Horror+$|^Adventure+$/ig
        let result=[]
        let notFound=""
        
        if(typeof array != "object"){
            return `Gender must be an array`
        }else{
            array.map(x=>{
                if(x.match(re)){
                    result.push(x)
                }
                if(!x.match(re))notFound=`this gender doesn't exist "${x}"`
            })
            if(notFound)return notFound;
            this.Gender=result
            return `${result} has been added successfully`
        }
    }
    insertScore(number){ 
        if(typeof number != "number")return `Score must be a number`;
        if(number<0 || number>10)return `insert a number between 1-10`;
        this.Score=number
        return `${number} added successfully`
    }
    consultData(){
        return this
    }
    autoInsert(array){
        if(!array){return `please insert the array in order...`
    }else{
        this.insertId(array[0],array[1])
        this.insertTitle(array[2])
        this.insertDirector(array[3])
        this.insertYear(array[4])
        this.insertCountries(array[5])
        this.insertGender(array[6])
        this.insertScore(array[7])
    }
    if(!this.idIMDb)return this.insertId(array[0],array[1])
    if(!this.Title)return this.insertTitle(array[2])
    if(!this.Director)return this.insertDirector(array[3])
    if(!this.Year)return this.insertYear(array[4])
    if(!this.Countries)return this.insertCountries(array[5])
    if(!this.Gender)return this.insertGender(array[6])
    if(!this.Score)return this.insertScore(array[7]) 
    return `Data has been inserted successfully `       
    }
}
// let nueva=new Pelicula
// console.log(nueva.insertId("TR",2124531))
// console.log(nueva.insertTitle("Terminator"))
// console.log(nueva.insertDirector("James Cameron"))
// console.log(nueva.insertYear(1984))
// console.log(nueva.insertCountries(["México","EEUU","Spain"]))
// console.log(nueva.insertGender(["Action","Suspense"]))
// console.log(nueva.insertScore(10))
// console.log(nueva.consultData())

let movie1=["BT","1231341", "Batman DR","Christopher Nolan",2012,["Mexico","EEUU","Spain"],["Action","Suspense","Drama"],5]
let movie2=[]
let movie3=[]

let nueva2=new Pelicula
console.log(nueva2.autoInsert(movie1))
console.log(nueva2)



