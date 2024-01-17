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
  orders:ordermodal[]=[
    {order_amount: 49860,
    order_date:new Date(),
    order_number: 1,
    order_status: "delivered",
    products: [ 
    {product_id: '1FDF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_1', product_price: 10430, product_type: 'type A',product_quantity:1}, 
    {product_id: '2FDSF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_2', product_price: 14500, product_type: 'type B',product_quantity:1}]},
    {order_amount: 49860,
      order_date:new Date(),
      order_number: 2,
      order_status: "delivered",
      products: [ 
      {product_id: '1FDF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_1', product_price: 100, product_type: 'type A',product_quantity:1}, 
      {product_id: '2FDSF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_2', product_price: 14500, product_type: 'type B',product_quantity:1},
      {product_id: '2FDSF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_2', product_price: 14500, product_type: 'type B',product_quantity:1},
      {product_id: '2FDSF', product_img: 'https://picsum.photos/150/100/', product_name: 'Product_2', product_price: 14500, product_type: 'type B',product_quantity:1}]}
    
  ]
  constructor(private basicservice:basicservice,public accountservice:accountservice){
      if(this.accountservice.user){
        this.orders=this.accountservice.user.order
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