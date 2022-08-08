import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   level: number = 0;
   isLogged: boolean = false;


  constructor() { }

  ngOnInit(): void {
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
