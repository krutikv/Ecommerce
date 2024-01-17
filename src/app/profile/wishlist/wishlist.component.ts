import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { productmodal } from 'src/app/modals/product.modal';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  //styleUrls: ['./app.component.css']
})
export class wishlistComponent {
  wishlist:productmodal[]=[]
  message:string[]=[]
  checkid:string=''
  p1:productmodal|null=null
  constructor(public basicservice:basicservice){}
  ngOnInit(){
    this.wishlist=this.basicservice.wishlist;
  }
  oncart(id:string){
    this.wishlist.find((p)=>{
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