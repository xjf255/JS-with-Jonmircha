export * from exercise;
/*            -------------------------Ejercicios Jonmircha-------------------------

let saludar = 'Hola Mundo'

function miFunction(a = '') {
    if (typeof a === 'string') {
        let contar = a.length
        return contar;
    }
    return 'Is not a string';
}
console.log(miFunction(saludar));

function miFunction2(a, b) {
    if (typeof a === 'string' && typeof b === 'number') {
        let resultado = null;
        for (i = 0; i < b; i++) {
            resultado += a[i]
        }
        return resultado;
    }
    return 'Tokens invalid';
}
OTRA FORMA
slice devuelve una copia de la parte del array dentro de un array empezando
por inicio hasta el valor deseado, el array original no se modifica

const otraFormaDeMiFunction2 = (text, num) => {
    if (typeof text !== 'string' && typeof num !== 'number') {
        console.error('Datos incorrectos')
    }
    else {
        return text.slice(0, num)
    }
}
console.log(otraFormaDeMiFunction2('Hola mundo', 4))


function miFunction3(a, b) {
    // if (typeof a === 'string' && typeof b === 'string') {
    let valor = '';
    let list = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] != b) {
            valor += a[i];
        }
        else {
            list.push(valor);
            valor = '';
        }
    }
    list.push(valor);
    return list;
}


OTRA FORMA
.split es un metodo que divide un objeto de tipo string en un array(vector) de
cadena,mediante la separacion de la cadena en subcadena
function otraFormaDeMiFunction3(text,separador){
    if(typeof text !== 'string' && typeof separador !== 'string'){
       console.error('Datos incorrectos')
    }
    else{
        return text.split(separador)
    }
}


let miFunction4 = (a,b) =>{
    if(typeof a === 'string' && typeof b === 'number'){
        num=a.length -1;
        if( a[num] != ' '){
            a+=' '
        }
        let resultado = a.repeat(b);
        return resultado;
    }
    return 'La surre';
}


const miFunction5 = (text) =>{
    if(typeof text !== 'string'){
        return 'El valor ingresado no es valido';
    }
    else{
        let rev = new String;
        for(i = text.length; i >= 0 ; i--){
            rev += text[i];
        }
        return console.log(rev)
    }
}

Split separa y lo vuelve un array, join lo une otra vez a string 
miFunction5('Hola Juan Carlos Como estas Chupapija');

const otraFormaDeMiFunction5 = (cadena = "") =>(!cadena) ? console.warn('No ingresaste una cadena de texto') : console.info(cadena.split('').reverse().join(''));

otraFormaDeMiFunction5('Hola Juan Carlos Como estas Chupapiija');


const miFunction6 = (text,sr)=>{
        if(typeof text , typeof sr !== 'string'){
            return 'Jala'
        }
    }
}


const miFunction7 = (txt,text)=>{
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


18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
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
miFuncion20(cro);


21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

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

const miFuncion22 = (nums) =>{
    if(!(nums instanceof Array)){
        return console.error("You aren't adding an array")
    }
    else{
        let numMay = -9999
        let numMen = 9999 
        const IMPORTANT_NUMS = []
        const funcNum = nums.map(function(num){
            num > numMay ? numMay = num : num < numMen ? numMen = num : false ;
        })
        IMPORTANT_NUMS.push(numMay,numMen)    
    return console.info(IMPORTANT_NUMS)
    }
}
miFuncion22([1, 4, 5, 99, -60])


23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const miFuncion23 = (nums) =>{
const parNums = []
const imparNums = []
const parImpar = nums.map(num =>{
    num % 2 == 0? parNums.push(num):imparNums.push(num);
})
return {
    parNums,
    imparNums
}
}
console.log(miFuncion23([1,2,3,4,5,6,7,8,9,0]))


24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
.toReversed() revierte el array más no modifica el original a diferencia de reverse()

sort() = ordena numeros de forma ascendentemm


const miFuncion24 = (nums) =>{
    if(!(nums instanceof Array)){
        console.error("You aren't adding an array")
    }
    else{
        let numMay = -9999
        let numMen = 9999 
        const desc = []
        const funcNum = nums.map(function(num){
            num > numMay ? numMay = num : num < numMen ? numMen = num : false ;
        })
    desc.push(numMay)
    for(let i = numMay-1; i >= numMen ; i--){
        const ascDesc = nums.map(num =>{
        num == i? desc.push(num):false;
        })
    }
    const asc = desc.toReversed()
    return{
        asc,
        desc
    }
    }
}   
console.log(miFuncion24([7, 5,7,8,6]))


25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const miFuncion25 = (arr) =>{
    if(!(arr instanceof Object)){
        console.error(`${arr} no es un arreglo`)
    }
    else{
        if(arr.length == 0){
            console.error('arreglo vacio')
        }
        else{
            return console.info({
                original : arr,
                sinDuplicados :[...new Set(arr)]
            })
        }
    }
}
miFuncion25(["x", 10, "x", 2, "10", 10, true, true]);
miFuncion25([])
miFuncion25('Hola mundo')

26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const miFuncion26 = (arr) => {
    if (!(arr instanceof Object)) {
        console.error(`${arr} no es un arreglo`)
    }
    else {
        for (const iterator of arr) {
            if (typeof iterator != `number`){
                return console.error(`${iterator} no es un numero`)
            }
        }
        if (arr.length == 0) {
            console.error('arreglo vacio')
        }
        else {
            let i = arr.values();
            let suma = 0;
            const totalnum = arr.length

            for (let num of i) {
                suma = suma + num
            }

            return console.info({
                arr,
                promedio: suma / totalnum
            })
        }
    }
}
miFuncion26([9,8,7,6,5,4,3,2,1,0])
*/
// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class ClassPeliculas{
    constructor(id,titulo, director, anio, origen, genero, calificacion){
        this.idPelicula = id
        this.tituloPelicula = titulo
        this.directorPelicula = director
        this.anioEstreno = anio
        this.origenPelicula = origen
        this.generoPelicula = genero
        this.calificacionPelicula = calificacion
    }
    static generosAceptados(){
        console.info('Action',' Adult',' Adventure',' Animation','Biography','Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','Game-Show','History','Horror','Musical','Music','Mystery','News','Reality-TV','Romance','Sci-Fi','Short','Sport','Talk-Show','Thriller, War', 'Western')
    }
    fichaTecnica(){
        console.log('Id :',this.idPelicula)
        console.log('Nombre :',this.tituloPelicula)
        console.log('Director :',this.directorPelicula)
        console.log('Año de estreno :',this.anioEstreno)
        console.log('País(es) de Origen :',this.origenPelicula)
        console.log('Genero :',this.generoPelicula)
        console.log('Calificación :',this.calificacionPelicula)
    }
}
const generosAceptados = ['Action',' Adult',' Adventure',' Animation','Biography','Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','Game-Show','History','Horror','Musical','Music','Mystery','News','Reality-TV','Romance','Sci-Fi','Short','Sport','Talk-Show','Thriller, War', 'Western']

const verificador = (peliClass) =>{
    let ok = true
    const all = Object.values(peliClass)
    const allOb = all.map(ob => ob === undefined? ok = false : true )
    if (ok !== false) {
        for (let i = 0; i < all.length; i++) {
            switch (i) {
                case 0:
                    idArr = Array.of(all[i])
                    idSplit = idArr.join().split('')
                    if (idSplit.length >= 9) {
                        for(let i=0 ; i<idSplit.length; i++) {
                            if (i <= 1) {
                                if (typeof idSplit[i] !== 'string') {
                                    ok=false
                                } 
                            }
                            else {
                                idSplit[i] = parseInt(idSplit[i])
                                if (typeof idSplit[i] !== 'number' || Number.isNaN(idSplit[i]) === true) {
                                    ok=false
                                }
                            }
                        }
                        ok === false?console.error('ID INVALIDO'):console.info('ID VALIDO');
                    }
                    else console.error(false);
                    break;
                case 1:
                    nameArr = Array.of(all[i])
                    nameSplit = nameArr.join().split('')
                    nameSplit.length <= 100? console.info('Titulo Valido'):
                    console.error('Titulo INVALIDO')
                    ok = false;
                    break;
                case 2:
                    direArr = Array.of(all[i])
                    direSplit = direArr.join().split('')
                    direArr.length <= 50? console.info('Director Valido'):
                    ok = false
                    console.error('Director INVALIDO');
                    break;
                case 3:
                    Number.isSafeInteger(all[i])? all[i] > 999 && all[i]<10000? console.info('Año Valido'):console.error('Año INVALIDO'):console.error('Dato INVALIDO');
                    break;
                case 4:
                    all[i] instanceof Array? console.info('Origen Valido'):
                    ok = false
                    console.error('Origen INVALIDO');
                    break;
                case 5:
                    let verificacionGenero = generosAceptados.some((generosAceptados) => generosAceptados.toUpperCase == all[i].toUpperCase)
                    verificacionGenero != false ? console.log('Genero Valido'):
                    ok = false
                    console.error('Genero INVALIDO');
                    break;
                case 6:
                    all[i] > -1 && all[i] <11? console.info('Calificación Valida'):
                    ok = false
                    console.error('Calificación INVALIDA');
                    break;    
                default:
                    break;
            }
        }
    }
    else{
        console.error('all objects are required')
    }
}

const SPIDERMAN =new ClassPeliculas('ab3456689', 'The amazing Spider-man','Marvel', 2004,['GT','MXN','EEUU'],'Action','10')
const THOR = new ClassPeliculas('Thor','Marvel', 2004,null,'Action','10/10')

//console.log(THOR)
verificador(THOR);
// verificador(SPIDERMAN);
SPIDERMAN.fichaTecnica()