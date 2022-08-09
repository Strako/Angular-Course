import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Testing --appCss--';
  status: boolean = true;
    constructor(){
      
    }
    ngOnInit(){
    }

    switch(){
      this.status = !this.status
    }
}
