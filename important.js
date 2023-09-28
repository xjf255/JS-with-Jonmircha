export * from (impotants.js);
/*Modelos arrowFunction
more line
async (param1, param2, ...paramN) => {
  statements
}
One line
(a, b) => a + b + 100;
POO With Jonmircha

Clases - Modelo a seguir
Objetos - Es una instancia de una clase
    Atributos - Es una caracteristica o propiedad del
    objeto (son variables dentro de un objeto)
    Metodos - son las acciones que un objeto puede realizar (funciones dentro de un objeto)


--------------FORMA 1---------------------
const animal = {
    nombre :'Snoopy',
    sonas(){
    console.log('Hola')
    }
}
const animal2 = {
    nombre :'Lola Bunny',
    sonas(){
    console.log('Hola')
    }
}
console.log(animal)
console.log(animal2)

Funcion Constructora
function Animal(nombre,genero) {
    Atributos
    this.nombre = nombre;
    this.genero = genero;

    Metodos
    this.saludar = function(){
        console.log(`yo soy ${this.nombre}`)
    }
}
const lola = new Animal('Lola Bunny','Hembra'),
      snoopy = new Animal('Snoopy', 'Macho');
console.log(lola)
console.log(snoopy)

--------------FORMA 2---------------------
La misma Funcion Constructura, pero ahora con el metodo agregado al prototipo de la funcion constructora(esto para ahorrar recursos)
function Animal(nombre,genero) {
    Atributos
    this.nombre = nombre;
    this.genero = genero;
    }

Metodo agregado al prototipo de la Funcion Constructora
Animal.prototype.saludar = function(){
    console.log(`yo soy ${this.nombre}`)
}
Herencia Prototipica
function Perro(nombre,genero,tamanio){
    this.super = Animal
    this.super(nombre,genero)
    this.tamanio = tamanio
}
Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro

Sobreescritura de metodo del prototipo padre en el hijo
Perro.prototype.saludar = function(){
    console.log('Soy un perro XD');
}
Perro.prototype.ladrar = function(){
    console.log('guau guau')
}

const lola = new Animal('Lola Bunny','Hembra'),
      snoopy = new Perro('Snoopy', 'Macho','Mediano');
console.log(lola)
console.log(snoopy)
snoopy.ladrar()

Clases
class Animal {
    El constryctor es un metodo especial que se
    ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }
    Metodos
    saludarChupapija() {
        console.log(`Qiuvo perro, yo soy ${this.nombre} XD`);
    }
    sonar() {
        console.log('Me la chupan porque estoy vivo');
    }

}
Herrencia
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super es un metodo que manda a llamar al constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }
    sonar() {
        console.log(`Soy ${this.nombre} y muerdo`);
    }
    ladrar() {
        console.log('Miau');
    }
    Another Metodos
    ----------STATIC-------------
Un metodo estatico se puede ejecutar sin necesidad de
instanciar la clase.
    static queEres() {
        console.log('Mucho texto XD')
    }
   -----------------GETTER Y SETTER------------------
Los setters y getters son metodos especiales que nos
permite estableces y obtener los valores de atributos de nuestra clase.

   GET obtiene la this.raza
   get getRaza(){
    return this.raza;
}
   para luego asignarle el valord
   set setRaza(raza){
    this.raza = raza;
}
}
Perro.queEres();

const LOLA = new Animal('Lola', 'Hembra'),
    SCOOBY = new Perro('Scooby doo', 'Macho', 'Grande'),
    USER = new Animal('Fernando', 'Macho Pecho peludo');

USER.saludarChupapija();
LOLA.sonar();
SCOOBY.sonar();
SCOOBY.ladrar();
Es un metodo pero se utiliza como si fueran atributo
SCOOBY.setRaza = 'Gran Danese'
SCOOBY.raza;

Metodo Date()
console.log(Date())
const fecha = new Date();
Obtenemos el dia del mes
console.log(fecha.getDate());
Obtenemos el dia de la semana(Domingo = 0 ; sabado 6)
console.log(fecha.getDay());
Obtenemos el mes
console.log(fecha.getMonth());

.getFullYear = obtenemos el a;o 2022
.toLocaleString = obtenemos la fecha y hora local
.toLocaleDateString = Obtenemos la fecha local
.toLocalTimeString = Obtenemos la hora local
!!La hora 0 es la hora del meridiano
getTimezoneoffser = los minutos de diferencia con la hora 0
getUTCDate=dia del mes del meridiano

segundos de la Time stamp
console.log(Date.now())

*/
