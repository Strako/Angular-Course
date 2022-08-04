//tipos de dato en typescript

//string
let texto: string;
texto = 'hola soy un texto ';

let numero:number;
numero = 123;

let verdadOFalso: boolean;
verdadOFalso = true;

let cualquiera: any;
cualquiera = 'texto';
console.log(cualquiera);
cualquiera = true;
console.log(cualquiera);
cualquiera =  123;
console.log(cualquiera);

let arrayCaracter: string[] = ["texto1", "texto2", "texto3"];
let arraynumero: number[] =  [1,2,3,4,5,6];
let arrayBoolean: boolean[] = [true,false,false,true];
let arrayTodos: any[] = [1,2,3,true,false,true,"textoOtro", "OtroTexto"];
console.log(arrayCaracter);
console.log(arraynumero);
console.log(arrayBoolean);
console.log(arrayTodos);


console.log(texto + ' -- ' + numero + ' -- ' + verdadOFalso)