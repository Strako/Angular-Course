import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
//Abreviatura del componente
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],


})
//se crea la clase del componente e implementa interfaz OnInit para ejecutar codigo una vez sea
//crado el componente
export class HeaderComponent implements OnInit {

//Constructor componente
  constructor() {
    console.log('creando comoponente header')
  }
  //ngOnInit se ejecuta al crearse el componente
  ngOnInit() {
    console.log('componente header creado')
  }
  //Definicion variables
  titulo: string = 'agregar palabras'; 
  listaPalabras: string[] = ['una', 'dos', 'tres', 'cuatro']
  inputPalabra: string = '';

  //Defincion funciones
  add() {
    if ((<HTMLInputElement>document.getElementById('palabra')).value != this.listaPalabras[this.listaPalabras.length - 1]) {
      this.inputPalabra = (<HTMLInputElement>document.getElementById('palabra')).value;
      this.listaPalabras.push(this.inputPalabra);
    } else {
      console.log('la palabra es igual a la ultima')
    }

  }
}
