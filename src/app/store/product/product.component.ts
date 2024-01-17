import { Component, Input, SimpleChanges } from '@angular/core';
import { productmodal } from 'src/app/modals/product.modal';
import { basicservice } from '../../services/basic.service';
import { usermodals } from 'src/app/modals/user.modal';
import { apiservice } from '../../services/api.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
})
export class productComponent {
  @Input() search:string=''
  @Input() toggle:string=''
  @Input() category:string=''
  message:string[]=[]
  checkid:string=''
  p1:productmodal|null=null
  wishlistadded:boolean=false;
products: productmodal[] = [
    {
      product_id: '1FDF',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_1',
      product_price: 10430,
      product_type: 'type A',
      product_quantity:1
    },
    {
      product_id: '2FDSF',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_2',
      product_price: 14500,
      product_type: 'type B',
      product_quantity:1
    },
    {
      product_id: '3FDF',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_3',
      product_price: 10450,
      product_type: 'type C',
      product_quantity:1
    },
    {
      product_id: '4JHH',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_4',
      product_price: 10012,
      product_type: 'type A',
      product_quantity:1
    },
    {
      product_id: '5ASHF',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_5',
      product_price: 10450,
      product_type: 'type B',
      product_quantity:1
    },
    {
      product_id: '6GFDSD',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_6',
      product_price: 10240,
      product_type: 'type C',
      product_quantity:1
    },
    {
      product_id: '7SDFDH',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_7',
      product_price: 10250,
      product_type: 'type A',
      product_quantity:1
    },
    {
      product_id: '8SDSEDSD',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_8',
      product_price: 1200,
      product_type: 'type B',
      product_quantity:1
    },
    {
      product_id: '9SDDF',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_9',
      product_price: 1020,
      product_type: 'type C',
      product_quantity:1
    },
    {
      product_id: '20FDFD',
      product_img: 'https://picsum.photos/150/100/',
      product_name: 'Product_10',
      product_price: 10075,
      product_type: 'type A',
      product_quantity:1
    },
  ];
  constructor(public basicservice:basicservice,public apiservice:apiservice){}
  ngOnInit(){
    // console.log(this.basicservice.wishlist)
  }
  addtoWishlist(id:string){
    let temp = this.products.find((w)=>{return w.product_id==id})
    
    if(temp){
      this.basicservice.addwishlist(temp);} 
  }
  removeWishlist(id:string){
    this.basicservice.removewishlist(id);
  }
  oncart(id:string){
    this.products.find((p)=>{
      if(p.product_id == id){
        this.p1=p;
      }
    });
    if(this.p1){
       this.message.push(this.p1.product_name);
      setTimeout(() => {
        this.message.splice(0,1);
      }, 1000);
      this.basicservice.oncarts(this.p1); 
       if(this.p1.product_id == id){
        this.checkid=id
      }
  }
}
}