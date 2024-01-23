import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { apiservice } from './api.service';
import { productmodal } from '../modals/product.modal';

@Injectable({ providedIn: 'root' })
export class accountservice {
  auth: boolean = false;
  user: usermodals | null = null;
  wishlistid:string[]=[]
  constructor(public apiservice: apiservice, private router: Router) {}
  addwishlist(w:productmodal){   
    this.apiservice.userdata.find((u)=>{
      if(u.username==this.user?.username){
        u.wishlist.push(w);
        
        //this.wishlistid.push(w.product_id)
      }
    })
    //console.log(this.wishlistid)
  }
  removewishlist(id:string){
    
    this.apiservice.userdata.find((u)=>{
      if(u.username==this.user?.username){
        let i = u.wishlist.findIndex((e)=> e.product_id==id)
        u.wishlist.splice(i,1)
        this.wishlistid.splice(i,1)
      }
    })  
   // console.log(this.wishlistid)
  }
  senduserdata(u: usermodals) {
    this.wishlistid=[]
    this.user = u;
  }
  sendemail(email:string){
    if(this.user?.email){this.user.email=email } 
    this.apiservice.userdata.find((u)=>{
      if(u.username==this.user?.username){
        u.email=email;
      }
    })  
  }
  onAuths() {
    this.router.navigate(['/login']);
  }
  onsignup(
    un: string,
    ps: string,
    psc: string,
    n: string,
    pn: number | null,
    adr: string
  ) {
    this.wishlistid=[]
    if (un && ps && psc && n && pn && adr) {
      if (pn.toString().length == 10) {
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
        console.log(userexist);
        console.log(this.apiservice.userdata);
        if (userexist) {
          alert('username already exist');
          this.router.navigate(['/login']);
        } else {
          if (user.password == psc) {
            this.apiservice.userdata.push(user);
            alert('user registered');
            this.router.navigate(['/login']);
          } else {
            alert('password mismatched');
          }
        }
      } else {
        alert('number must be 10 digit');
      }
    } else {
      alert('fill data properly');
    }
  }
  onflag(f: boolean) {
    this.auth = f;
  }
}
