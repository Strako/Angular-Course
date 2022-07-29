//template string
//concatena un string con un argumento
const numero = numero => ('El nuemero es: ' + numero)

//se guarda el valor de retorno de la funcion numero en una variable
const resultado =  numero(10)
//imprime la variable en consola
console.log(resultado)

//se define una funcion flecha, usa Template string " `` " para concatenar un String y logica JS
const numeroDos = (num1, num2) =>
  (`El numero es: ${(num1 * 10) - (2* num2)}`)

//alamacena el retorno de la funcion en una variable
const resultadoDos = numeroDos(10, 20)
//imprime la variable en consola
console.log(resultadoDos)