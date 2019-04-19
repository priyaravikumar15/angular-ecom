import { Component } from '@angular/core';
import { MainServices } from './main.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = [];

  constructor(public mservice:MainServices){
    this.name = this.mservice.getjsondata();

  }
}
