//definicion funcion constructor mascota
function mascota(nombre, edad, vivo, poderes){
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
    this.poderes = poderes;
}
//definicion funcion constructor poder
function poder (nombre,ataque, eficacia, stamina, mana){
    this.nombre = nombre;
    this.ataque = ataque;
    this.eficacia = eficacia;
    this.stamina = stamina;
    this.mana = mana;
}

//definicion de poderes
const golpeDebil = new poder('Golpe Debil', 7, 6, 4, 0)
const golpeFuerte = new poder('Golpe Fuerte', 10, 8, 9, 0)
const patada = new poder('Patada', 4, 10, 4, 0)
const maullido = new poder('Maullido', 6, 8, 0, 5)

//definicion mascotas
const perrito = new mascota('punky', 14, false, [golpeDebil, golpeFuerte])
const gatito = new mascota('ganesha', 8, false, [patada, maullido])

//impresion en consola del objeto perrito
console.log(perrito)
//Destructuring object sobre atributos nombre y edad del objeto perrito
const {nombre, edad} = perrito;
console.log(nombre, edad)

//impersion en consola del objeto gatito
console.log(gatito)
//Destructuring object sobre atributos vivo y array poderes del objeto gatito
const {vivo, poderes} = gatito;
console.log(vivo, poderes)




