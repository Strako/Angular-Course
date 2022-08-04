import fetch from "node-fetch";

const getFact = async (web) => {
    try {
        const res = await fetch(web)
        const data = await res.json()
//map crea un array con los resultados de la llamada a la funcion indicada
        let aLenght = await data.data.map(fact => fact.length)
        let aFact =  data.data.map(fact => fact.fact)
        console.log(aFact)
        console.log(aLenght)
        console.log(data.data)

    } catch (error) {
        console.log(error)
    }
}

getFact('https://catfact.ninja/facts')


