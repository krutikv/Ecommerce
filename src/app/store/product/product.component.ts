import { Component, Input, SimpleChanges } from '@angular/core';
import { productmodal } from 'src/app/modals/product.modal';
import { basicservice } from '../../services/basic.service';
import { usermodals } from 'src/app/modals/user.modal';
import { apiservice } from '../../services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { accountservice } from '../../services/account.service';
@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class productComponent {
  @Input() search:string=''
  @Input() toggle:string=''
  @Input() category:string=''
  message:string[]=[]
  messagew:string[]=[]
  checkid:string=''
  index:string=''
  ispaginator:boolean=true;
  p1:productmodal|null=null;
  wishlistadded:boolean=false;
  haswishlist:string[]=[];
products: productmodal[] =[];
  constructor(public basicservice:basicservice,public apiservice:apiservice,private router: Router,public accountservice:accountservice,public ActivatedRoute:ActivatedRoute){
  }
  ngOnChanges(){ 
    if(this.search || this.toggle || this.category){
      this.ispaginator=false;
      this.products=this.apiservice.productsapi;
    }else{
      this.ispaginator=true
      this.products=this.apiservice.fetchdata(0,1);
    }
    let temp=[...this.products]
    this.products=temp
  }
  gotopagedetails(id:string){
    this.router.navigate(['product'],{queryParams:{id:id},relativeTo:this.ActivatedRoute})
  }
    onChangePage(pe:PageEvent) {
      if(this.search){
        this.products=this.apiservice.productsapi;
      }else{
        this.products=this.apiservice.fetchdata(pe.pageIndex,pe.pageIndex+1);
      }    
      let temp=[...this.products];
      this.products=temp;
      this.router.navigate(['/head/store'],{fragment:"page"+(pe.pageIndex+1)})
    }
  addtoWishlist(id:string){
    let temp = this.products.find((w)=>{return w.product_id==id}) 
    if(temp){
      this.messagew.push(temp.product_name);
      setTimeout(() => {
        this.messagew.splice(0,1);
      }, 2000);
      this.accountservice.addwishlist(temp);} 
  }
  removeWishlist(id:string){
    this.accountservice.removewishlist(id);
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
      }, 2000);
      this.basicservice.oncarts(this.p1); 
       if(this.p1.product_id == id){
        this.checkid=id
      }
  }
}
}