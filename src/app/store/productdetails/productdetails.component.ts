import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { apiservice } from '../../services/api.service';
import { productmodal } from 'src/app/modals/product.modal';
import { ActivatedRoute } from '@angular/router';
import { accountservice } from '../../services/account.service';

@Component({
  selector: 'product_details',
  templateUrl: './productdetails.component.html',
  //styleUrls: ['./app.component.css']
})
export class productdetailsComponent {
   message:string[]=[]
   messagew:string[]=[]
   checkid:string=''
    quantity:number=1;
    iswishlist:boolean=false
    productdetails:productmodal|undefined=undefined;
     constructor(public basicservice:basicservice,private apiservice:apiservice,private ActivatedRoute:ActivatedRoute,private accountservice:accountservice){}
     ngOnInit(){
        this.ActivatedRoute.queryParams.subscribe((params)=>{
            this.productdetails=this.apiservice.productsapi.find((e)=>{return e.product_id==params['id']})
        })
        if(this.productdetails && this.accountservice.user){
             this.iswishlist=this.accountservice.user.wishlist?.includes(this.productdetails)
            }
     }
     onaddtocart(){
      if(this.productdetails){
      this.message.push(this.productdetails.product_name);
      setTimeout(() => {
        this.message.splice(0,1);
      }, 2000);
         for(let i=0;i<this.quantity;i++){
            this.basicservice.oncarts(this.productdetails);
         }
      } 
     }
     onaddwishlist(){
      if(this.productdetails){ this.messagew.push(this.productdetails.product_name);}
      setTimeout(() => {
        this.messagew.splice(0,1);
      }, 2000);
     
        this.iswishlist=true
        if(this.productdetails){this.accountservice.addwishlist(this.productdetails)}
     }
     onremovewishlist(){
        this.iswishlist=false;
        if(this.productdetails){this.accountservice.removewishlist(this.productdetails.product_id);}
     }
}