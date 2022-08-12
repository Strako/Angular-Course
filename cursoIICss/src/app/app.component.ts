import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoIICss';
  mode = 1;
  arrMdTex = ['Light','Dark'];
  switch(){
    if (this.mode === 1){
      this.mode = 0
      console.log(this.mode)
      
    }else{
      this.mode = 1
            console.log(this.mode)
    }
  }
}
