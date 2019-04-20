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
  posts;

  constructor(public mservice:MainServices){
   
}
getnamess(){
  console.log("inside getnamess");
    this.name = this.mservice.getjsondata();
     this.posts = this.mservice.postdata;
    console.log("exit getnamess");

}
}
