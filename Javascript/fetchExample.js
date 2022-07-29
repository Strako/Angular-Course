//fetch
//importamos libreria fetch de node-fetch
import fetch from "node-fetch";

//pasamos al metodo fetch la url que alberga el JSON
fetch ('https://pokeapi.co/api/v2/pokemon')
//Try con funcion flecha, el argumento de entrada es el JSON de la web
//se parsea a JSON reconocible por JS
.then(respuesta => respuesta.json())
//Try con funcion flecha que toma como argumento el JSON formateado y accede al atributo
//Results de tipo array, lo recorre e imprime cada elemento en consola
.then(datos => {
    datos.results.forEach(elemento =>{
        console.log(elemento)
    });  
})
//si detecta una excepcion la toma como argumento y la imprime en consola
.catch(error => console.log(error))