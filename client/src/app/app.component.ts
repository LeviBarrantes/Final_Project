import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'budget';
  sideBarOpen = true;
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {}

  // tslint:disable-next-line: typedef
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
