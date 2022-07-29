//Objetos

//se define una funcion constructora para instancia objetos de tipo persona
function persona(nombre, nivel){
    this.nombre = nombre;
    this.nivel = nivel;
}
//se define un objeto tipo persona
const raul = new persona('Raul', 5);
const roberto = new persona('Roberto', 2);

//se define un objeto de nombre mascota
const mascota = {
    //nombrePropiedad: tipodedato o '', propiedadDos: '', ...
    nombre: 'pet Petter', 
    edad: 10,
    vivo: true,
    entrenador: raul
}
//definicion objetos poderes con function constructor
function poder(ataque, eficacia, stamina, mana){
    this.ataque = ataque;
    this.eficacia = eficacia;
    this.stamina = stamina;
    this.mana = mana;
}
const golpe = new poder('golpe', 10, 7, 5, 0);

const patada = new poder('patada', 5, 4, 3, 0);

const golpeFuerte = new poder('golpeFuerte', 10, 9, 7, 0);

const ladrido = new poder('ladrido', 4, 8, 0, 3);

//se agrega una nueva propiedad 'id' y 'poderes[]' y para asignar el valor se usa '=' 
mascota.id = 1
mascota.poderes = [golpe, golpeFuerte]

//instancia objeto mascota
const mascotaDos =  Object.create(mascota);
mascotaDos.edad = 20
mascotaDos.vivo = false
mascotaDos.nombre = 'pet Artur'
mascotaDos.id = 2
mascotaDos.poderes = [patada, ladrido]
mascotaDos.entrenador = roberto

//impresion en pantalla de propiedades
console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)
console.log(mascota.id)
console.log(mascota.poderes)
//Accedemos a un elemento especifico de la propiedad de tipo array 'poderes'
console.log(mascota.poderes[0])
console.log(mascota.poderes[1])
console.log(mascota.entrenador)
console.log(mascota.entrenador.nombre)
console.log(mascota.entrenador.nivel)



console.log(mascotaDos)
console.log(mascotaDos.nombre)
console.log(mascotaDos.edad)
console.log(mascotaDos.vivo)
console.log(mascotaDos.id)
console.log(mascotaDos.poderes)
//Accedemos a un elemento especifico de la propiedad de tipo array 'poderes'
console.log(mascotaDos.poderes[0])
console.log(mascotaDos.poderes[1])
console.log(mascotaDos.entrenador.nombre)
console.log(mascotaDos.entrenador.nivel)
