import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { productsinterface } from './products';
import { IPosts } from './products';
import { Observable } from 'rxjs/Observable';

@Injectable({providedIn:'root'})

export class MainServices{

//private productinfo = products[];

//prod: Observable <productsinterface[]>;
  private urls = "https://jsonplaceholder.typicode.com/todos"; 

  constructor(public http:HttpClient){
    //this.getjsondata().subscribe( data => console.log(this.heroesUrl) );
  }

  getjsondata():Observable<IPosts[]>{
    console.log("getjsondata working");
    return this.http.get(this.urls);
  }
}
