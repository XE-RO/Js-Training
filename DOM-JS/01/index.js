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

// const $Cards=document.querySelector(".Cards")
// $template=document.getElementById("template-Card").content,
// $fragment=document.createDocumentFragment(),
// cardContent=[
//     {
//         title:"6",
//         img:"https://picsum.photos/200/200?6"
//     },
//     {
//         title:"7",
//         img:"https://picsum.photos/200/200?7"
//     },
//     {
//         title:"8",
//         img:"https://picsum.photos/200/200?8"
//     },
//     {
//         title:"9",
//         img:"https://picsum.photos/200/200?9"
//     }
// ];
// cardContent.forEach((el) => {
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     $template.querySelector("figcaption").textContent=el.title;


//     let $clone=document.importNode($template,true);
//     $fragment.appendChild($clone);

// });
// $Cards.appendChild($fragment);


//                                                                  MODIFICANDO ELEMENTOS (OLD)

// const $Cards=document.querySelector(".Cards"),
// $newCard=document.createElement("figure");
// $cloneCards=$Cards.cloneNode(true);
// $newCard.innerHTML=`<img src="https://picsum.photos/200/200?6" alt 6> <figcaption>6</figcaption>`;

// $newCard.classList.add("Card")
// // $Cards.replaceChild($newCard,$Cards.children[2]);
// // $Cards.insertBefore($newCard,$Cards.firstElementChild)
// // $Cards.removeChild($Cards.lastElementChild)
// document.body.appendChild($cloneCards);



//                                                 MODIFICANDO ELEMENTOS (NEW)

// const $Cards=document.querySelector(".Cards"),
// $newCard=document.createElement("figure");
// let $contentCard=`<img src="https://picsum.photos/200/200?6" alt 6> <figcaption></figcaption>`;
// $newCard.classList.add("Card")
// $newCard.insertAdjacentHTML("beforeend",$contentCard)
// // $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","6")
// // $Cards.insertAdjacentElement("afterbegin",$newCard)
// //$Cards.before($newCard)
// // $Cards.append($newCard)
// // $Cards.prepend($newCard)
// // $Cards.after($newCard)



//                                                     MANEJADORES DE EVENTOS

// function holaMundo(){
//     alert(`Hola Mundo`);
//     console.log(event)
// }
// function Saludar(nombre="Desonocid@"){
//     alert(`Hola ${nombre}`)
// };



// const $eventoSemantico=document.getElementById("evento-semantico")
// const $eventoMultiple=document.getElementById("evento-multiple")
// const $eventoRemover=document.getElementById("evento-remover")
// $eventoSemantico.onclick=holaMundo
// $eventoSemantico.onclick=function(e){
//     alert(`Hola mundo, manejador de eventos semántico`)
//     console.log(e)
//     console.log(event)
// }
// $eventoMultiple.addEventListener("click",holaMundo)
// $eventoMultiple.addEventListener("click",(e)=>{
//     alert(`Hola mundo, manejador de eventos multiple`)
//     console.log(e)
//     console.log(e.type);
//     console.log(e.target);
//     console.log(event);
// })
// $eventoMultiple.addEventListener("click",()=>{Saludar();
// Saludar("Xavier")
// });
// const removerDobleClick=(e)=>{
//     alert(`Removiendo el evento de tipo ${e.type}`);
//     console.log(e)
//     $eventoRemover.removeEventListener("dblclick",removerDobleClick)
//     $eventoRemover.disabled=true
// }

// $eventoRemover.addEventListener("dblclick",removerDobleClick);

//                                                                   FLUJO DE EVENTOS

// const $divsEventos=document.querySelectorAll(".eventos-flujo div")
// $linkEventos=document.querySelector(".eventos-flujo a");

// function flujoEventos(e){
//     console.log(`Hola te saluda ${this.className},el click lo origino ${e.target.className}`);
//     // e.stopPropagation()

// }
// console.log($divsEventos)

// $divsEventos.forEach(div=>{
//     //Fase de borbuja
//     div.addEventListener("click",flujoEventos)
//     //div.addEventListener("click",flujoEventos,false)
//     //Fase de captura
//     // div.addEventListener("click",flujoEventos,true)
//     // div.addEventListener("click",flujoEventos,{
//     //     capture:true,
//     //     once:true
//     // })
// }) 
// document.addEventListener("click",(e)=>{
//     console.log(`Click en `,e.target);
//     if(e.target.matches(".eventos-flujo div")){
//         flujoEventos(e)
//     }

//     if(e.target.matches(".eventos-flujo a")){
//         alert("hola desde el add event listener")
//         e.preventDefault

//     }
// })

// $linkEventos.addEventListener("click",e=>{
//     alert("hola")
//     e.preventDefault();
//     e.stopPropagation()
// })
//                                                             MANIPULACION DEL BOM (BROWSER OBJECT MODEL)
//   
// window.addEventListener("resize",e=>{
//     console.clear()
//     console.log("***********Evento resize**********")
    
//     console.log(window.innerWidth)
//     console.log(window.innerHeight)
//     console.log(window.outerWidth)
//     console.log(window.outerHeight)
//     console.log(window.scrollX)
//     console.log(window.scrollY)
//     console.log(e)
    
// });

// window.addEventListener("scroll",e=>{
//     //console.clear()
//     console.log("********Evento Scroll*******")
//     console.log(window.scrollX)
//     console.log(window.scrollY)
//     console.log(e)

// });

// window.addEventListener("load",(e)=>{
//     console.log("*****Evento Load*****")
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })
// //
// document.addEventListener("DOMContentLoaded",(e)=>{ 
//     console.log("*****Evento DOMContentLoaded*****")
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })

//                                                      METDODOS DEL BOM

// const $btnAbrir=document.getElementById("abrir-ventana"),
// $btnCerrar=document.getElementById("cerrar-ventana"),
// $btnImprimir=document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click",e=>{
//     ventana=window.open("www.youtube.com")
// });
// $btnCerrar.addEventListener("click",e=>{
//     //window.close()
//     ventana.close()
// });
// $btnImprimir.addEventListener("click",e=>{
//     window.print()
// });

//                                                OBJETOS: URL,HISTORIAL Y NAVEGADOR

console.log("***********Objeto URL (location)*******")

console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.pathname)

console.log(history)
