import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { apiservice } from './api.service';
import { productmodal } from '../modals/product.modal';
import { PopupService } from './popup.service';
import { loadingService } from './loading.service';

@Injectable({ providedIn: 'root' })
export class accountservice {
  user: usermodals = JSON.parse(localStorage.getItem('user')!);
  wishlistid:string[]=[]
  auth:boolean=localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')!):false;
  constructor(public apiservice: apiservice, private router: Router ,private PopupService:PopupService,public loadingService:loadingService) {}
  addwishlist(w:productmodal){ 
    this.loadingService.loading();
    this.apiservice.getuser().subscribe(data=>{
      
      data.find((u)=>{
      
        if(u.username==this.user?.username){
          u.wishlist.push(w); 
          console.log(u)      
           localStorage.setItem('user',JSON.stringify(u))
           this.user=JSON.parse(localStorage.getItem('user')!)
        }
        
        this.apiservice.updateuser(u);
      })    
    })   
    this.loadingService.stoploading();
  }
  liked(id:string){
    let temp=this.user.wishlist.find((p)=> p.product_id == id)
    if(temp){
      return true;
    }
    return false
  }
  removewishlist(id:string){ 
    this.loadingService.loading();
    this.apiservice.getuser().subscribe(data=>{
      
      data.find((u)=>{
        if(u.username==this.user?.username){
          let i = u.wishlist.findIndex((e)=> e.product_id==id)
          u.wishlist.splice(i,1)
          this.wishlistid.splice(i,1)
          this.apiservice.updateuser(u);
          localStorage.setItem('user',JSON.stringify(u))
          this.user=JSON.parse(localStorage.getItem('user')!)
        }
      })
       
    })
    this.loadingService.stoploading();
   
  }
  senduserdata(u: usermodals) {
    this.wishlistid=[]
    this.user = u;
    this.apiservice.updateuser(u);
    localStorage.setItem('user',JSON.stringify(u))
    this.user=JSON.parse(localStorage.getItem('user')!)
  }
  sendemail(email:string){
    if(this.user?.email){this.user.email=email } 
    this.apiservice.getuser().subscribe(data=>{
      this.loadingService.loading();
      data.find((u)=>{
        if(u.username==this.user?.username){
          u.email=email;
        this.apiservice.updateuser(u);
          localStorage.setItem('user',JSON.stringify(u))
        this.user=JSON.parse(localStorage.getItem('user')!)
        }
      })  
    })
    this.loadingService.stoploading();
  }
  onAuths() {
    this.router.navigate(['/login']);
  }
  onsignup(
    un: string,
    ps: string,
    psc: string,
    n: string,
    pn: string,
    adr: string[]
  ) {
    this.wishlistid=[] 
        let user: usermodals = {
          username: un,
          password: ps,
          name: n,
          pnumber: pn,
          address: adr,
          order: [],
          wishlist:[]
        };
        let userexist = this.apiservice.userdata.find(
          (usere) => usere.username == un
        );
        if (userexist) {
          this.PopupService.openPopup('Authentication','Username already exist');
          this.router.navigate(['/login']);
        } else {
          if (user.password == psc) {
            this.apiservice.setuser(user);
            this.PopupService.openPopup('Authentication','Successfully Registered');
            this.router.navigate(['/login']);
          } else {
            this.PopupService.openPopup('Authentication','Password mismatched');
          }
        }   
  }
  onflag(f: boolean) {
    this.auth=f;
      localStorage.setItem('token',JSON.stringify(f));
        localStorage.setItem('user',JSON.stringify(this.user))
        this.user=JSON.parse(localStorage.getItem('user')!)
  }
}
