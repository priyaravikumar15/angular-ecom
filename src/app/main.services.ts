import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
//import { productsinterface } from './products';
//import { Observable } from 'rxjs/Observable';

@Injectable({providedIn:'root'})

export class MainServices{

//private productinfo = products[];

//prod: Observable <productsinterface[]>;
//private heroesUrl = "https://jsonplaceholder.typicode.com"; 

  constructor(public http:HttpClient){
    //this.getjsondata().subscribe( data => console.log(this.heroesUrl) );
  }

  getjsondata(){
    console.log("getjsondata working");
    //return this.http.get<productsinterface[]>(this.heroesUrl);
  }
}
