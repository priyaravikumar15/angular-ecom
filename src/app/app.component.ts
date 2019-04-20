import { Component } from '@angular/core';
import { MainServices } from './main.services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:any = [];

  constructor(public mservice:MainServices){
   
}
getnamess(){
  console.log("inside getnamess");
   this.mservice.getjsondata().subscribe((data:any) => {
       this.name = JSON.stringify(data);
    });
    return name;
    console.log("exit getnamess");
}
}
