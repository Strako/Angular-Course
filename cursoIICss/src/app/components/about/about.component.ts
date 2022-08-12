import { Component, OnInit } from '@angular/core';
//services
import { AboutExperienceService } from './../../about-experience.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  arrExp: any[]=[];
  auxSelected: number = 1;

  constructor(private _ExService:AboutExperienceService) { 
    
  }

  ngOnInit(): void {
    this.arrExp = this._ExService.getArray();
  }

}
