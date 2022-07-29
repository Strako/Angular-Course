//funciones

function sumar(num3, num4){
    console.log(num3 + num4)
    return (num3 + num4)
}


const SumarDos = (num1, num2) => {
//    console.log(num1 + num2)
    return (num1 + num2)
}

const resultado = SumarDos(50, 100)
console.log(resultado)

let resultadoDos = sumar(20, 20)
console.log(resultadoDos)

//mensaje
const mensaje = argumento => ('Hola '+ argumento + ', este es el retorno de la funcion flecha')

resultadoTres = mensaje('armando')
console.log(resultadoTres)

//suamTres
// cuando el argumento no se envia, el argumento sera igual a 0
const suamTres = (num = 0) => {
    console.log(num + 3)
}

suamTres(12)