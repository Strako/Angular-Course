//filter crea un nuevo array con todos los elemntos que cumplan con una condicion
import fetch from "node-fetch";

const obtenerPokemon = async(web) => {
    try{
        const res = await fetch(web)
        const data = await res.json()

        const pokemonName = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')
        console.log(pokemonName)
    }catch(error){
        console.log(error)
    }
}
obtenerPokemon('https://pokeapi.co/api/v2/pokemon/')