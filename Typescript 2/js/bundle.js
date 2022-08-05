(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
class Gato {
    constructor() {
        console.log('Linux 1- Hola, soy un soy un gato');
    }
}
exports.Gato = Gato;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import example
const gato_1 = require("./gato");
const perro_1 = require("./perro");
let gatoUno = new gato_1.Gato();
let perroUno = new perro_1.Perro();

},{"./gato":1,"./perro":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
class Perro {
    constructor() {
        console.log('Linux 2- Hola, soy un perro');
    }
}
exports.Perro = Perro;

},{}]},{},[2]);
