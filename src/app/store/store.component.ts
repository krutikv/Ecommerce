import { Component, Input } from '@angular/core';
import { basicservice } from '../services/basic.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  //styleUrls: ['./store.component.css']
})
export class storeComponent {
  toggle:string=''
  category:string=''
  constructor( public basicservice:basicservice){   }
   productsearch:string='';
   sortlth(){
    this.toggle='lth'
   }
   sorthtl(){
    this.toggle='htl';
   }
   catAll(){this.category=''}
   catA(){this.category='type A'}
   catB(){this.category='type B'}
   catC(){this.category='type C'}

}