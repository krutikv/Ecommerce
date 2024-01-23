import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { productmodal } from 'src/app/modals/product.modal';
import { accountservice } from 'src/app/services/account.service';
import { ordermodal } from 'src/app/modals/order.modal';

@Component({
  selector: 'orderhistory',
  templateUrl: './orderhistory.component.html',
  //styleUrls: ['./app.component.css']
})
export class orderhistoryComponent {
  //orders:ordermodal[]|null=null
  products:productmodal[]=[]
  seedetails:number=0;
  toggle:boolean=true;
  orderlistisempty:boolean=true;
  orders:ordermodal[]=[]
  constructor(private basicservice:basicservice,public accountservice:accountservice){
      if(this.accountservice.user){
        this.orders=this.accountservice.user.order
        if(this.orders.length > 0){
          this.orderlistisempty=false;
        }else{
          this.orderlistisempty=true
        }
        console.log(this.orders)
    }
    }
    onDetails(num:number){
      if(this.seedetails==num){
        this.toggle=false;
        this.seedetails=0
      }else{
        this.toggle=true;
      this.seedetails=num;    
    }}
    ngOnInit(){
    }
}