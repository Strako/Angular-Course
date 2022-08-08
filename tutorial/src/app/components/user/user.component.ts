import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  level: number = 0;
  isLogged: boolean = false;
  constructor() {

  }

  loggin() {
    try{
    this.isLogged = true;
    console.log(this.isLogged.toString())
    }catch(error){
      console.log(error)
    }
  }
  logout(){
    this.isLogged = false;
    console.log(this.isLogged.toString())  
  }
  levelUp(){
    this.level ++;
  }

}
