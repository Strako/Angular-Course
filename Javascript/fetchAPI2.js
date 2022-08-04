//fetch https://catfact.ninja/ fact, facts, breeds
import fetch from "node-fetch";

fetch('https://catfact.ninja/facts')
.then(res => {
    return res.json()
})
.then(data => {
   data.data.forEach(a => {
    console.log(a)
   });
})
.catch(error => console.log(error))