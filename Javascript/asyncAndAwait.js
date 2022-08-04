//Async and await
import fetch from "node-fetch";

const obtenerFact = async() => {
    try{
        //esperemos la respuesta de fetch
        const res = await fetch('https://catfact.ninja/facts')
        const data = await res.json()
        console.log(data.data)
        data.data.forEach(element => {
            console.log(element)
        });
    }catch(error){
        console.log(error)
    }
}
obtenerFact()