/*Modelos arrowFunction
more line
async (param1, param2, ...paramN) => {
  statements
}
One line
(a, b) => a + b + 100;

*/
// // Exercise one,Chapter 3

// let min = function(a,b){
//     if(a<b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(min(0,10));
// console.log(min(0,-10));

// // Exercise 2, Chapter 3

// function esPar(num,historia){
// if(num>-1){
//     if(num===0){
//         historia+= ` Es par`;
//         return historia;
//     }
//     else if(num===1){
//         historia+= ` Es impar`;
//         return historia;
//     }
//     else{
//         return esPar(num - 2, `(${historia} - 2)`);
//     }
// }
// else{
//     return null;
// }
// }
// console.log(esPar(10,"10"));

// // Exercise 3, Chapter 3

// let contarFs = txt =>{
//     let j = txt.length;
//     let numF=0;
//     for(let i=0;i<j; i++){
//         if(txt[i] == "F"){
//             numF+=1;
//         }
//     }
//     return numF;
// }
// contarFs("FFF");

// let contarCaracteres = (txt,abc) =>{
//     let j = txt.length;
//     let numAbc=0;
//     for(let i=0;i<j; i++){
//         if(txt[i] == abc){
//             numAbc+=1;
//         }
//     }
//     return numAbc;
// }
// contarCaracteres("Hola","H");

// // Execise 1, Chapter 4

// let rango = (inicio , final , paso) =>{
//     let num = [];
//     if(final > inicio){
//         for(let i = inicio ; i <= final ; i += paso ) {
//             num.push(i)
//             // console.log(num);
//         }
//     }
//     else{
//         for(let i = inicio ; i >= final ; i += paso ) {
//             num.push(i)
//             // console.log(num);
//         }
//     }
//     return num;
// }
// // rango(5,2,-1);
// // let lista = [1,2,3];
// let suma = (numeros) =>{
//     let a = 0;
//     for(let i=0; i < numeros.length; i++){
//         console.log(numeros[i])
//         console.log(a += i)
//     }
// }
// suma(lista);

// console.log(suma(rango(1, 10)));

// // Execise 2, Chapter 4
// // nose=['A','B','C'];

// let revertirArray =(lista) =>{
//     let reversed = [];
//     for(let i = lista.length-1; i >= 0; i--){
//         reversed += lista[i];
//     }
//     return reversed
// }
// console.log(revertirArray(nose))

// nose=['A','B','C'];

// let revertirArrayEnSuLugar =(lista) =>{
//     for(let i = lista.length-2 ; i >= 0; i--){
//         lista.push(lista[i]);
//     }
//     j = lista.length - 3;
//     for(let i =0; i < j; i++ ){
//         lista.shift(lista[i]);
//     }
//     return lista
// }
// console.log(revertirArrayEnSuLugar(nose))
// //exercise 3, chapter 4

// function arrayALista(array) {
//     let lista = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       lista = {valor: array[i], resto: lista};
//     }
//     return lista;
//   }
//   let nose = ['A','B','C']
//     arrayALista[nose];
// function listaAArray(lista) {
//         let array = [];
//         for (let index = lista; index; index = index--) {
//           array.push(index.valor);
//         }
//         return array;
//       }
// //POO With Jonmircha
// /*
// Clases - Modelo a seguir
// Objetos - Es una instancia de una clase
//     Atributos - Es una caracteristica o propiedad del
//     objeto (son variables dentro de un objeto)
//     Metodos - son las acciones que un objeto puede realizar (funciones dentro de un objeto)
// */

// /*--------------FORMA 1---------------------
// const animal = {
//     nombre :'Snoopy',
//     sonas(){
//     console.log('Hola')
//     }
// }
// const animal2 = {
//     nombre :'Lola Bunny',
//     sonas(){
//     console.log('Hola')
//     }
// }
// console.log(animal)
// console.log(animal2)*/

// //Funcion Constructora
// /*function Animal(nombre,genero) {
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Metodos
//     this.saludar = function(){
//         console.log(`yo soy ${this.nombre}`)
//     }
// }
// const lola = new Animal('Lola Bunny','Hembra'),
//       snoopy = new Animal('Snoopy', 'Macho');
// console.log(lola)
// console.log(snoopy)*/

// /* --------------FORMA 2---------------------
// //La misma Funcion Constructura, pero ahora con el metodo agregado al prototipo de la funcion constructora(esto para ahorrar recursos)
// function Animal(nombre,genero) {
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;
//     }

// //Metodo agregado al prototipo de la Funcion Constructora
// Animal.prototype.saludar = function(){
//     console.log(`yo soy ${this.nombre}`)
// }
// //Herencia Prototipica
// function Perro(nombre,genero,tamanio){
//     this.super = Animal
//     this.super(nombre,genero)
//     this.tamanio = tamanio
// }
// //Perro esta heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro

// //Sobreescritura de metodo del prototipo padre en el hijo
// Perro.prototype.saludar = function(){
//     console.log('Soy un perro XD');
// }
// Perro.prototype.ladrar = function(){
//     console.log('guau guau')
// }

// const lola = new Animal('Lola Bunny','Hembra'),
//       snoopy = new Perro('Snoopy', 'Macho','Mediano');
// console.log(lola)
// console.log(snoopy)
// snoopy.ladrar()*/

// //Clases
// class Animal{
//     //El constryctor es un metodo especial que se
//     //ejecuta en el momento de instanciar la clase
//     constructor(nombre,genero){
//         this.nombre = nombre
//         this.genero = genero
//     }
//     //Metodos
//     saludarChupapija(){
//         console.log(`Qiuvo perro, yo soy ${this.nombre} XD`);
//     }
//     sonar(){
//         console.log('Me la chupan porque estoy vivo');
//     }

// }
// //Herrencia
// class Perro extends Animal{
//     constructor (nombre,genero, tamanio){
//     //super es un metodo que manda a llamar al constructor de la clase padre
//     super(nombre,genero);
//     this.tamanio = tamanio;
//     this.raza = null;
//     }
//     sonar(){
//         console.log(`Soy ${this.nombre} y muerdo`);
//     }
//     ladrar(){
//         console.log('Miau');
//     }
//     //Another Metodos
//         /*----------STATIC-------------
//     Un metodo estatico se puede ejecutar sin necesidad de
//     instanciar la clase.*/
//     static queEres(){
//         console.log('Mucho texto XD')
//     }
//    /*-----------------GETTER Y SETTER------------------
//    Los setters y getters son metodos especiales que nos
//    permite estableces y obtener los valores de atributos de nuestra clase.*/

//    //GET obtiene la this.raza
//    get getRaza(){
//         return this.raza;
//    }
//    //para luego asignarle el valord
//    set setRaza(raza){
//         this.raza=raza;
//    }
// }
// Perro.queEres();

// const LOLA = new Animal('Lola','Hembra'),
//     SCOOBY = new Perro('Scooby doo','Macho','Grande'),
//     USER = new Animal('Fernando','Macho Pecho peludo');

// USER.saludarChupapija();
// LOLA.sonar();
// SCOOBY.sonar();
// SCOOBY.ladrar();
// //Es un metodo pero se utiliza como si fueran atributo
// SCOOBY.setRaza = 'Gran Danese'
// SCOOBY.raza;

// // Metodo Date()
// console.log(Date())
// const fecha = new Date();
// //Obtenemos el dia del mes
// console.log(fecha.getDate());
// //Obtenemos el dia de la semana (Domingo = 0 ; sabado 6)
// console.log(fecha.getDay());
// //Obtenemos el mes
// console.log(fecha.getMonth());
// /*
// .getFullYear = obtenemos el a;o 2022
// .toLocaleString = obtenemos la fecha y hora local
// .toLocaleDateString = Obtenemos la fecha local
// .toLocalTimeString = Obtenemos la hora local
// !!La hora 0 es la hora del meridiano
// getTimezoneoffser = los minutos de diferencia con la hora 0
// getUTCDate=dia del mes del meridiano
// */
// //segundos de la Time stamp
// console.log(Date.now())

//Ejercicios Jonmircha
// {
//     //#1
//     let saludar= 'Hola Mundo'

//    function miFunction(a='') {
//         if(typeof a === 'string'){
//             let contar = a.length
//             return contar;
//         }
//         return 'Is not a string';
//     }
//     console.log(miFunction(saludar));

//     //#2
//     function miFunction2(a,b){
//         if(typeof a === 'string' && typeof b === 'number' ){
//             let resultado = null;
//             for(i=0 ; i < b ; i++){
//                 resultado += a[i]
//             }
//             return resultado;
//         }
//         return 'Tokens invalid';
//     }
//     /*OTRA FORMA
//     slice devuelve una copia de la parte del array dentro de un array empezando
//     por inicio hasta fin, el array original no se modifica*/
//     function otraFormaDeMiFunction2(text,num){
//         if(typeof text !== 'string' && typeof num !== 'number'){
//             console.error('Datos incorrectos')
//         }
//         else{
//             return text.slice(0, num)
//         }
//     }
//     otraFormaDeMiFunction2('Hola mundo',4)
//     //#3
//     function miFunction3(a,b){
//         if(typeof a === 'string' && typeof b === 'string'){
//             let valor = '';
//             let list = [];
//             for(i=0; i<a.length ; i++){
//                 if(a[i] != b){
//                     valor += a[i];
//                 }
//                 else{
//                     list.push(valor);
//                     valor='';
//                 }
//             }
//             list.push(valor);
//             return list;
//         }
//         return 'Deprecated'
//     }
//     /*OTRA FORMA
//     .split es un metodo que divide un objeto de tipo string en un array(vector) de
//     cadena,mediante la separacion de la cadena en subcadena
//     */
//    function otraFormaDeMiFunction3(text,separador){
//         if(typeof text !== 'string' && typeof separador !== 'string'){
//            console.error('Datos incorrectos')
//         }
//         else{
//             return text.split(separador)
//         }
//    }
//     // #4
//     let miFunction4 = (a,b) =>{
//         if(typeof a === 'string' && typeof b === 'number'){
//             num=a.length -1;
//             if( a[num] != ' '){
//                 a+=' '
//             }
//             let resultado = a.repeat(b);
//             return resultado;
//         }
//         return 'La surre';
//     }
    //#5
//     const miFunction5 = (text) =>{
//         if(typeof text !== 'string'){
//             return 'El valor ingresado no es valido';
//         }
//         else{
//             let rev = new String;
//             for(i = text.length; i >= 0 ; i--){
//                 rev += text[i];
//             }
//             return console.log(rev)
//         }
//     }
//     miFunction5('Hola Juan Carlos Como estas Chupapija');
//     const otraFormaDeMiFunction5 = (cadena = "") =>
//     (!cadena)
//     ?console.warn('No ingresaste una cadena de texto')
//     //Split separa y lo vuelve un array, join lo une otra vez a string
//     :console.info(cadena.split('').reverse().join(''));
// otraFormaDeMiFunction5('Hola Juan Carlos Como estas Chupapiija');
//     // #6
//     const miFunction6 = (text,sr)=>{
//         if(typeof text , typeof sr !== 'string'){
//             return 'Jala'
//         }
//     }
// }


/*const miFunction7 = (txt,text)=>{
    let cont = 0
    let contRound = 0
    if(typeof txt !== 'string' || typeof text !== 'string'){
        alert('No es una cadena de texto esa mmda');
    }
    else{
        txtLower = txt.toLowerCase()
        textLower = text.toLowerCase()
        for(i = 0; i<txt.length ; i++){
            if(txtLower[i] == textLower[0]){
                for(j = 0 ; j<text.length; j++){
                    if(txtLower[i+j] == textLower[j]){
                        cont++
                    }
                }
            }
        }
        cont= cont/text.length
        contRound=Math.floor(cont)
        return console.log(`La palabra "${textLower}" se repite ${contRound} veces`)
    }
}
let a = 'holA COMO ESTAS chupPIJA hola hola hola' ;
let b = 'hOla';

miFunction7(a,b)

const miFuncion8 = (txt) =>{
    txtLower = txt.toLowerCase();
    let cont = 0, j=0;
    for(i=txt.length-1 ; i>=0; i--){
        if(txtLower[i] === txtLower[j] ){
            cont++
        }
        j++
    }
    cont=cont/txt.length
    return cont == 1 ? console.log(true) : console.log(false);
}
let a = 'oso'
miFuncion8('Salas');

const miFuncion9 = (txt, text) => {
    let cont = 0
    let newString = new String
    if (typeof txt !== 'string' || typeof text !== 'string') {
        alert('valores invalidos')
    }
    else {
        for (i = 0; i < txt.length;) {
            cont = 0
            if (txt[i] == text[0]) {
                for (j = 0; j < text.length; j++) {
                    if (txt[i + j] == text[j]) {
                        cont++
                    }
                }
            }
            if(cont == 3 && txt.length >= i+3){
                i+=3    
            }
            newString+=txt[i]
            i+=1
        }

        return console.log(`return ${newString}`)
    }
    return console.log('Aveces no se en que la cago')
}
miFuncion9("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

const miFuncion10 =() => console.log(Math.floor(Math.random()*(600-501)+501))

miFuncion10()

const miFuncion11 = (num) =>{
    if(typeof num !== 'number'){
        return 'Valor invalido'
    }
    else{
        let numInv = new Number
        let numStr = num.toString()
        for(i=numStr.length-1; i>=0;i--){
            numInv+=numStr[i];
        }
        return numInv == num ? console.log(true) : console.log(false);
    }
}
miFuncion11(2002);

const miFuncion12 =(num)=>{
    if(typeof num !== 'number' || num < 0){
        return alert('Valor invalido');
    }
    else{
        let numFac = 1;
        for(i=1; i<=num;i++){
            numFac*=i;
        }
        return console.log(`La Factorial del numero ${num} es ${numFac}`);
    }
}
miFuncion12(5);

const miFuncion13 = (num) =>{
    let cont = 0
    if(typeof num != 'number'){
        return 'valor invalido'
    }
    else{
        for(i=1; i<=num ; i++){
            if(num % i == 0){
                cont++
            }
        }
    }
    return cont == 2 ? console.log(true) : console.log(false);
}
miFuncion13(11);
Arrow Function OneLine
const miFuncion14 = (num) => num % 2 == 0? console.log('Par') : console.log('Impar');

miFuncion14(120);

const miFuncion15 = (num,cov) =>{
    if(typeof num !== 'number' || typeof cov !== 'number'){
        console.error('Valores invalidos')
        return
    } 
    if(cov === 10){
        PARSEINT Sirve para hacer conversiones en base mayor o igual a 8
        return console.info(`La convercion es = ${parseInt(num,cov)} base 10`)
    }else if(cov === 2){
            TOSTRING Sirve para hacer conversiones en base mayor o igual a 10
        return console.info(`La convercion es = ${num.toString(cov)} base 2`)
    }else{
        return console.warn('Base invalida')
    }
}
miFuncion15(4,2);
miFuncion15(100,10);

const miFuncion16 = (num=undefined,nume=undefined) =>{
    let desc = (num * nume) / 100
    if(typeof num !== 'number' || typeof nume !== 'number'){
        return console.error('Valores invalidos')
    }else{
        return console.info(`Total ${num}, porcentade de descuento ${nume}%, total con descuento ${num-desc}`)
    }
}
miFuncion16(1000,20);

const miFuncion17 = (tiempo = undefined) => {
    if(tiempo === undefined) return console.error('no ingresaste fecha');
    // lo mismo que typeof pero este sirve para object
    if(!(tiempo instanceof Date)) return console.error('El valor ingresado no es una fecha');
    let todayLessTiempo = new Date().getTime() - tiempo.getTime();
    // F to get years
    let hrs = 1000 * 60 * 60 * 24 * 365
    let year = Math.round(todayLessTiempo / hrs)
    return (Math.sign(year) === -1)
    ? console.info(`Faltan ${Math.abs(year)} años para llegar a la fecha`)
    :(Math.sign(year) === 1)
    ? console.info(`Han pasado ${year} años`): console.info(`Fecha actual`) 
}
miFuncion17(new Date(2004,5,28));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const miFuncion18 = (str) =>{
    let voc = 0,con = 0;
    if (!(typeof str === 'string')){
        return console.error('it is not a string')
    }
    let strGrd=str.toUpperCase();
    let ltr = (strGrd.split(''));
    for(i=1; i<str.length; i++){
        if(ltr[i] == 'A' || ltr[i] == 'E' || ltr[i] == 'I' || ltr[i] == 'O' || ltr[i] == 'U'){
            voc++
        }else if(ltr==''){

        }else{
            con++
        }
    }
    return console.info(`La cadena de texto '${str}' cuenta con ${voc} vocales y con ${con} consonantes`)
}
miFuncion18("Hola Mundo")
miFuncion18(5)

19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const miFuncion20 = (correo) =>{
    let dr = '@gmail.com';
    let drc = correo.split('@')
    let dr2 = '@' + drc[1]
    return dr2 === dr? console.info("yes, it's a valid email"):console.error('not valid')
}
let cro = 'Juanfher.255@gmail.com';
miFuncion20(cro);*/
/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const miFuncion21=(nums)=>{
    if (!(nums instanceof Array)){
        return console.error('this is an array')
    }
    else{
        console.warn('you are bad')
        let numsCopy = nums.map(function(num){
            return Math.pow(num,2);
        })
        return console.info(numsCopy)
    }
}
miFuncion21([1,4,5]) 
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const miFuncion22 = (nums) =>{
    if(!(nums instanceof Array)){
        return console.error("You aren't adding an array")
    }
    else{
        console.warn('Fine')
        let numMay = -9999
        let numMen = 9999 
        let funcNum = nums.map(function(num){
            console.log(num)
        })
    }
}
miFuncion22([1, 4, 5, 99, -60])
/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


*/