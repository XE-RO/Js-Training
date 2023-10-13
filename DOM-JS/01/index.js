// console.log(window)
// console.log(document)
// let texto="Hola soy tu amigo y docente digital... Jonathan MirCha"
// const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// //hablar(texto)

// console.log("***********ELEMENTOS DEL DOCUMENTO***********")
// console.log(window.document);
// console.log(document);
// console.timeLog(document.head);
// console.log(document.body);
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.characterSet)
// console.log(document.title)
// console.log(document.scripts)
// setTimeout(()=>{
//     console.log(document.getSelection().toString())
// },3000)
// document.write("<h2>Hola mundo desde el DOM</h2>")

// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("Card"))
// console.log(document.getElementsByName("nombre"))
// console.log(document.getElementById("menu"))
// console.log(document.querySelector("#menu"))
// document.querySelectorAll("a").forEach((element)=>{console.log(element)})

// console.log(document.documentElement.lang)
// console.log(document.documentElement.getAttribute("lang"))
// console.log(document.querySelector(".link-dom").href)
// document.documentElement.lang="en";
// console.log(document.documentElement.lang);

// document.documentElement.setAttribute("lang","ex-MX")
// console.log(document.documentElement.lang)

// const $linkDOM= document.querySelector(".link-dom")
// $linkDOM.setAttribute("target","_blank")
// $linkDOM.setAttribute("rel","noopener")
// $linkDOM.setAttribute("href","https://youtube.com")
// $linkDOM.removeAttribute("rel")
// console.log($linkDOM.hasAttribute("rel"))

// //                                                                    Data attributes

// console.log($linkDOM.getAttribute("data-description"))
// console.log($linkDOM.dataset)
// console.log($linkDOM.dataset.description)
// $linkDOM.setAttribute("data-description","Modelo de objeto del documento")
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description="Nueva descripcion"
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"))

//                                                                       ESTILOS Y VARIABLES CSS

// const $linkDOM=document.querySelector(".link-dom");
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM))
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width="50%";
// $linkDOM.style.textAlign="center";
// $linkDOM.style.marginLeft="auto";
// $linkDOM.style.marginRight="auto";
// $linkDOM.style.padding="1rem";
// $linkDOM.style.borderRadius="2rem";


// console.log($linkDOM.getAttribute("style"))

// console.log("******************")
// console.log(`Get computed style ${getComputedStyle($linkDOM)}`)
// console.log(`Normal style ${$linkDOM.style}`)
// //                                                                  Variables CSS - Custom properties css
// const $html=document.documentElement,
// $body=document.body;

// let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
// let varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor,varYellowColor);
// $body.style.backgroundColor=varDarkColor
// $body.style.color=varYellowColor
// $html.style.setProperty("--dark-color","pink");
// varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
// $body.style.setProperty("background-color",varDarkColor)

//                                                                       CLASES CSS

// const $Card=document.querySelector(".Card");
// console.log($Card)
// console.log($Card.className)
// console.log($Card.classList.contains("rotate-45"));
// $Card.classList.add("rotate-45")
// console.log($Card.classList.contains("rotate-45"));
// $Card.classList.remove("rotate-45")
// console.log($Card.classList.contains("rotate-45"));
// $Card.classList.toggle("rotate-45");
// $Card.classList.replace("rotate-45","rotate-135");
// $Card.classList.add("opacity-80","sepia");
// $Card.classList.remove("opacity-80","sepia")
// $Card.classList.toggle("opacity-80","sepia")


//                                                                   DOM TEXTO Y HTML

// const $whatIsDOM=document.getElementById("que-es")

// let text=`
// <p>El modelo de Objeto del Documento(<b><i>DOM-Document Object Model</i></b>)es un API para documentos HTML y XML</p> <mark>El DOM no es parte de la especificacion de JavaScript es una API parra los navegadores</mark>`

// //$whatIsDOM.innerText=text; //iNTERNET EXPLORER (DEPRECATED)
// $whatIsDOM.textContent=text;// ACTUAL (no respeta las etiquetas)
// //ejemplo de uso: Chat que no permite imagenes como input
// $whatIsDOM.innerHTML=text;// ACTUAL
// $whatIsDOM.outerHTML=text;// ACTUAL


//                                                              RECORRIENDO EL DOM

// const $Cards=document.querySelector(".Cards");
// console.log($Cards)
// console.log($Cards.parentElement);
// console.log($Cards.lastElementChild);
// console.log($Cards.nextElementSibling)
// console.log($Cards.closest("div"));
// console.log($Cards.closest("body"));
// console.log($Cards.children[3].closest("section"));

//                                                                    ELEMENTOS Y FRAGMENTOS
 
// const $figure=document.createElement("figure");
// $img=document.createElement("img");
// $figCaption=document.createElement("figcaption");
// $figCaptionText=document.createTextNode("6");
// $Cards=document.querySelector(".Cards");
// $figure2=document.createElement("figure")

// $img.setAttribute("src","https://picsum.photos/200?7");
// $img.setAttribute("alt","7");
// $figure.classList.add("Card");

// $figCaption.appendChild($figCaptionText)
// $figure.appendChild($img);
// $figure.appendChild($figCaption);
// $Cards.appendChild($figure);

// $figure2.innerHTML=`<img src="https://picsum.photos/200?7" alt="7">
// <figcaption>7</figcaption>`;
// $figure2.classList.add("Card");
// $Cards.appendChild($figure2)

// const estaciones=["Primavera","Verano","Otoño","Invierno"],
// $ul=document.createElement("ul");

// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);
// estaciones.forEach((el)=>{
//     const $li=document.createElement("li")
//     $li.textContent=el
//     $ul.appendChild($li)
// })

// // insercion lenta peor rendimiento

// const continentes=["Africa","America","Asia","Europa","Oceania"],
// $ul2=document.createElement("ul");

// document.write("<h3>Continentes del mundo </h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML="";
// continentes.forEach((el)=>{
//     $ul2.innerHTML+=`<li>${el}</li>`
// })
// //insercion de una sola vez Mejor rendimiento
// const meses=[
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ],
// $ul3=document.createElement("ul"),
// $fragment=document.createDocumentFragment();
// meses.forEach((el)=>{
//     const $li = document.createElement("li");
//     $li.textContent=el
//     $fragment.appendChild($li);
// });
// document.write("<h3>Meses del año </h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

const $Cards=document.querySelector(".Cards")
$template=document.getElementById("template-Card").content,
$fragment=document.createDocumentFragment(),
cardContent=[
    {
        title:"6",
        img:"https://picsum.photos/200/200?6"
    },
    {
        title:"7",
        img:"https://picsum.photos/200/200?7"
    },
    {
        title:"8",
        img:"https://picsum.photos/200/200?8"
    },
    {
        title:"9",
        img:"https://picsum.photos/200/200?9"
    }
];
cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;


    let $clone=document.importNode($template,true);
    $fragment.appendChild($clone);

});
$Cards.appendChild($fragment);






