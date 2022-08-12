import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titleHeader: string = "$ echo $'Strako portfolio'"

  constructor() { }

  ngOnInit(): void {
  }

}
