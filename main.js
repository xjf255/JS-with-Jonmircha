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

