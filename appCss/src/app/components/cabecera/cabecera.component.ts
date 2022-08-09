import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
//Definicion variables (arrays, auxiliares y offset)  
  titleCabecera: string = "Cabecera"

  arrayPokemon: Array<any> = [];
  arrayPokeImg: Array<any> = [];

  offset: number = 20;
  aux:number = 0;
  currentPage:number;
//se inicializa en la primera pagina
  constructor() {
    this.currentPage = 1;
  }

//Se obtienen los pokemons (name, url e imagen)
  ngOnInit(): void {
    this.getPoke()
  }

//funcion asincrona recuperar pokemons
  async getPoke() {
//Se obtiene el JSon de la API con el offset proporcionado (incia en 0)
   await fetch('https://pokeapi.co/api/v2/pokemon/?offset='+ this.aux +'&limit=20')
      .then(res => res.json())
      .then(data => {
        console.log(data)
//Se limpian  los array auxiliares para guardar el nuevo contenido
        this.arrayPokemon = []
        this.arrayPokeImg = []
//Se llena un array con atributos nombre y url de cada pokemon
        data.results.map((poke: any) => {
          this.arrayPokemon.push(poke)
        })
//Se recorre el array anteriormente creado y se obtiene el JSon dle atributo URL
        this.arrayPokemon.forEach((imgPoke:any)=> {
          fetch(imgPoke.url)
          .then(imgRes => imgRes.json())
          .then(imgData =>{
//Se llena el array de imagenes
            this.arrayPokeImg.push(imgData.sprites.front_default)
          })
        })
      })
    }

    newPage(){
//Si el valor ingresado es menor o igual a uno el auxiliar se resetea a 0, pagina actual = 1
      if(parseInt((<HTMLInputElement>document.getElementById('page')).value) <= 1){
        this.aux = 0;
        this.currentPage = 1;
//Se actualiza la lista de pokemons
        this.getPoke();
      }else{
//Si el valor ingresado es mayor a 1 se almacena el valor actual (indices) y se calcula el offset
        this.currentPage = parseInt(((<HTMLInputElement>document.getElementById('page')).value)) 
        this.aux = this.offset * (parseInt(((<HTMLInputElement>document.getElementById('page')).value)) -1)
        console.log(this.aux)
//Se actualiza la lista de pokemons
        this.getPoke();
      }
    }

}

