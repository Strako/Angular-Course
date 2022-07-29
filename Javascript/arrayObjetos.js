//array objetos
//Definicion objetos
const web = {
    nombre: 'Solopan',
    links: {
        enlace: 'www.solopan.net'
    },
    redesSociales: {
        youtube:{
        enlace: 'www.youtube.com',
        nombre: 'Youtube Web'
        },
        instagram:{
        enlace: 'www.instagram.com',
        nombre: 'Instagram Wweb'
        }
    }
}
const web2 = {
    nombre: 'Soundcloud Strako',
    links: {
        enlace: 'www.Soundcloud.com',
    },
    redesSociales: {
        youtube:{
        enlace: 'www.youtube.com/strako',
        nombre: 'Youtube Strako'
        },
        instagram:{
        enlace: 'www.instagram.com/strako',
        nombre: 'Instagram Strako'
        }
    }
}
//Definicion array de objetos 
const arrayObjetos = [web, web2];

//imprimeen consola el contenido del array de objetos
console.log(arrayObjetos);
//imprime en consola el segundo elemento dentro del array de objetos
console.log(arrayObjetos[1]);
//imprime en consola la propiedad nombre y youtube del objeto redes sociales 
//dentro del objeto web
console.log(web.redesSociales.youtube.nombre, web.redesSociales.youtube.enlace);
//imprime en consola la propiedad iNombre e instragram del objeto redes sociales
//dentro del objeto web2
console.log(web2.redesSociales.instagram.nombre, web2.redesSociales.instagram.enlace);
//guarda los atributos en variables e imprime en consola
const youtubeLink = web.redesSociales.youtube.enlace;
const instagramLink = web2.redesSociales.instagram.enlace;
console.log('Youtube web 1: ' + youtubeLink + ' - instagram web2: ' + instagramLink) 
//Destructuring object para acceder a atributos e imprime en pantalla la constante
const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace, nombre)
