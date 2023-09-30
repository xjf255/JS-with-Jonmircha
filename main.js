// DOM
const $linkDOM = document.querySelector("#link-dom")
const $html = document.documentElement
const $body = document.body
const $text = document.getElementById("txt")
//obtener attributos
console.log(document.documentElement.getAttribute("lang"))
console.log(document.documentElement.lang)
//Modificar attributos
document.documentElement.lang = "en"
document.documentElement.setAttribute("lang","en")
//Para que no haya dependencia de links
$linkDOM.setAttribute("rel","noopener")
//Para saber si tiene el atributo return boolean
console.log($linkDOM.hasAttribute("x"))
//Para eliminar Atributo
$linkDOM.removeAttribute("x")
//data-attributes
console.log($linkDOM.getAttribute("data-document"));
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.document)
$linkDOM.setAttribute("data-document","Hola")
console.log($linkDOM.dataset.document)
//Style
console.log($linkDOM.style)
console.log($linkDOM.style.color)
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))
//asignar
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.display = "block"
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
//Almacenar custom propertys
// let varDarkColor = getComputedStyle($html).getPropertyValue('value')

//$body.style.color = varDarkColor
//$html.style.setProperty("value","asignar")
//Texto 
$text.textContent = `<h1>Puto<h1/>` 
$text.innerHTML = `<h1>Puto<h1/>` 
//remplaza el elemento seleccionado por el nuevo
$text.outerHTML = `<h1>Puto<h1/>` 
//Nodos y elementos
console.log($text.children)
console.log($text.children[2])
console.log($text.parentElement)
console.log($text.firstElementChild)
console.log($text.firstChild)
console.log($text.previousElementSibling)
console.log($text.previousSibling)
console.log($text.nextElementSibling)
//busca su ancestro mas cercano
console.log($text.closest("div"))
//Crea cualquier elementa valida HTML o XTML
const $figure = document.createElement("figure")
//nodo de text
const $figcaptionText = document.createTextNode("Hola")
//Agrega un nodo hijo
$figure.appendChild($figcaptionText)
//Usar fragmentos para no generar una gran demanda al dom, en sentido de meter todo en un fragment y luego agregarlo a un nodo, en lugar de estar haciendo incersiones al dom
// const $fragment = document.createDocumentFragment();

//Modificando elementos
/*
const $newCard = document.createElement("figure"),
    $cards = document.querySelector(".cards"),
    //se le pasa el valor booleano para que clone todo su interior
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `<h1>hola</h1>`
//remplazar un nodo hijo
$cards.replaceChild($newCard,$cards.children[2])
//insertar
$cards.insertBefore($newCard,$cards.firstElementChild);
//eliminar
$cards.removeChild($cards.lastElementChild);

/*Insertar adyacentes
    insertAdjacent..                    //alternativas nuevas de: 
    insertAdjacentElement(position,el) //append
    insertAdjacentHTML(position,html) //iner
    insertAdjacentText(position,text) //content

Posiciones                                  
    Beforebegin (hermano Anterios)          
    afterbegin(primer hijo)                 
    befordend(ultimo hijo)                  
    afterend(hermano siguiente)             
*/
//Eventos 
const saludo = (name = "Desconocido") =>{
    alert(`Hola ${name}`)
}
// Manejadores multiples
$linkDOM.addEventListener("click",() =>{
    saludo();
    saludo("Fernando");
    console.log(event)
})

//Quitar eventos por default
const $linkIg = document.querySelector(".eventos-flujo a")
$linkIg.addEventListener("click",(e) => {
    alert("Seguime puto");
    e.preventDefault();
    e.stopPropagation();
})
// delegacion de eventos

//de esta manera no se propaga y es mas eficiente
document.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.matches(".eventos-flujo div")){
        console.log("Hola te saluda ",e.target.className)
    }
})
//--------------BOM--------------
window.addEventListener("resize",() =>{
    console.clear() 
    //Tamaño Dom
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    //tamaño ventana Windows
    console.log(window.outerHeight)
    console.log(window.outerHeight)
})
window.addEventListener("scroll", ()=>{
    console.clear();
    console.log(window.scrollX)
    console.log(window.scrollY)
})
window.addEventListener("load", ()=>{
    // console.clear();
    console.log(window.screenX)
    console.log(window.screenY)
})
//Es igual que el de windows pero este es más rapido y eficiente
document.addEventListener("DOMContentLoaded", ()=>{
    // console.clear();
    console.log(window.screenX)
    console.log(window.screenY)
})
console.clear()
const $vuno = document.getElementById("vuno"),
 $vdos = document.getElementById("vdos"),
 $vtres = document.getElementById("vtres");
let url;

 $vuno.addEventListener("click", ()=>{
    url = open("https://github.com/xjf255")
 })
 $vdos.addEventListener("click", ()=>{
    url.close()
 })
 $vtres.addEventListener("click", ()=>{
    print();
 })