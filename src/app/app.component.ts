import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eshop';
  person : string = 'Firas';
  age:number =23 ;
  address: any ={street :'rue sfax',city:'megrine'};
  hide: boolean = false;
  activated: boolean =true;
  hideInter : boolean =false;
  getEmail(){
    return this.person + '@gmail.com';
  }
hideInterpolation(){
    return this.hideInter=true;
  }
}

