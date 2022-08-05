"use strict";
class Calculadora {
    constructor(valorA, valorB) {
        console.log('Iniciando nueva calculadora ! ');
        this.numberA = valorA;
        this.numberB = valorB;
        console.log("numero A:" + this.numberA + " Numero B: " + this.numberB);
    }
    sumar() {
        return this.numberA + this.numberB;
    }
}
let calcA = new Calculadora(3, 5);
console.log(calcA.sumar());
let calcB = new Calculadora(10, 20);
console.log(calcB.sumar());
