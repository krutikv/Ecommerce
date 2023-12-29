import { Component } from '@angular/core';
import { productmodal } from 'src/app/product.modal';
import { basicservice } from '../../basic.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
})
export class productComponent {
  massage:string=''
  products:productmodal[]=[
    {product_id:'1FDF',product_img:'https://picsum.photos/150/100/',product_name:'Product_1',product_price:10430,product_type:'type A'},
    {product_id:'2FDSF',product_img:'https://picsum.photos/150/100/',product_name:'Product_2',product_price:14500,product_type:'type B'},
    {product_id:'3FDF',product_img:'https://picsum.photos/150/100/',product_name:'Product_3',product_price:10450,product_type:'type C'},
    {product_id:'4JHH',product_img:'https://picsum.photos/150/100/',product_name:'Product_4',product_price:10012,product_type:'type A'},
    {product_id:'5ASHF',product_img:'https://picsum.photos/150/100/',product_name:'Product_5',product_price:10450,product_type:'type B'},
    {product_id:'6GFDSD',product_img:'https://picsum.photos/150/100/',product_name:'Product_6',product_price:10240,product_type:'type C'},
    {product_id:'7SDFDH',product_img:'https://picsum.photos/150/100/',product_name:'Product_7',product_price:10250,product_type:'type A'},
    {product_id:'8SDSEDSD',product_img:'https://picsum.photos/150/100/',product_name:'Product_8',product_price:1200,product_type:'type B'},
    {product_id:'9SDDF',product_img:'https://picsum.photos/150/100/',product_name:'Product_9',product_price:1020,product_type:'type C'},
    {product_id:'20FDFD',product_img:'https://picsum.photos/150/100/',product_name:'Product_10',product_price:10075,product_type:'type A'},
  ];
  constructor(public basicservice:basicservice){}
  oncart(id:string){
    let findproduct = this.products.find((product)=>{
      return product.product_id == id;
    })
   
    if(findproduct){this.basicservice.oncart(findproduct);
       this.massage=findproduct.product_name}
    
  }
  massagehide(){
    this.massage='';
  }
}