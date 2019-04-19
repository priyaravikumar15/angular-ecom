import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { productsinterface } from './products';
//import { Observable } from 'rxjs/Observable';

@Injectable({providedIn:'root'})

export class MainServices{

//private productinfo = products[];

private heroesUrl = './product'; 

  constructor(public http:HttpClient){
    this.getjsondata().subscribe( data =>this.heroesUrl );
  }

  getjsondata(){
    console.log("getjsondata working");
    return this.http.get(this.heroesUrl);
  }
}
