import { Component } from '@angular/core';
import { basicservice } from '../../basic.service';
import { productmodal } from 'src/app/product.modal';
import { cartmodal } from './cart.modal';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class cartComponent {
  cart: productmodal[] = [];
  ac:number[]=[];
  totalamount:number=0;
  cartisempty:boolean=false;
  constructor(public basicservice: basicservice) {
    this.cart=this.basicservice.createcart()
    this.ac=this.basicservice.getquantity()   
    this.totalamount=this.basicservice.total();  
    this.cartisempty= this.basicservice.isempty();
  }
  inc(i:number,id:string){
    this.ac[i]=this.ac[i]+1
    this.basicservice.passidi(id);
    this.totalamount=this.basicservice.total();
  }
  dcr(i:number,id:string){
    if(this.ac[i]>=1){
      this.basicservice.passidd(id);
      this.totalamount=this.basicservice.total();
      this.ac[i]=this.ac[i]-1;
      if(this.ac[i]==0){
        this.cartisempty=this.basicservice.remove(i)
      }
      }
      
  }
 
}
