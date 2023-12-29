import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from "./user.modal";
import { productmodal } from "./product.modal";
import { basicService } from '../../../task/src/app/basic.service';

@Injectable({providedIn: 'root'})
export class basicservice{
    auth:boolean=false
    totalamount:number=0
    ac:number[]=[]
    cart: productmodal[] = [];
    product:productmodal[]=[];
    userdata :usermodals[]=[
        {username:'krutik',password:"1234"},
        {username:'abc',password:"1234"},
        {username:'def',password:"1234"},
        {username:'hij',password:"1234"}
    ]
    cartisempty: boolean=false;
    constructor(private router:Router,private route:ActivatedRoute){}
    isempty(){
        if(this.cart.length == 0){this.cartisempty=true}
        return this.cartisempty;
    }
    createcart(){
        for (let object of this.product) {
            let isin = this.cart.filter((obj) => {
              return obj.product_id == object.product_id;
            });
            if (isin.length == 0) {
              this.cart.push(object);
            }
          }
          return this.cart
    }
    getquantity(){
        this.ac=[]
        for (let obj of this.cart) {
            let counter = 0;
            for (let i = 0; i < this.product.length; i++) {
              if (this.product[i].product_id === obj.product_id) counter++;
            }
            this.ac.push(counter)
          }
          return this.ac;
    }
    remove(i:number){
        this.ac.splice(i,1);
        this.cart.splice(i,1);
        if(this.cart.length == 0){this.cartisempty=true;}
        return this.cartisempty
    }
    total(){
        this.totalamount=0
        for(let j=0 ; j <this.product.length;j++ ){
            this.totalamount+=this.product[j].product_price;
          }
          return this.totalamount
    }
    passidi(id:string){
        let find=this.product.find((pr)=>{return pr.product_id == id});
        if(find){ this.product.push(find)}
    }
    passidd(id:string){
        let index = this.product.findIndex(item => item.product_id == id);
        this.product.splice(index,1);
    }
    onAuths(){
        this.router.navigate(["/login"])
    }
    onflag(f:boolean){
        this.auth=f;
    }
    onsignup(un:string,ps:string,psc:string){
        if(un && ps && psc){
           let user:usermodals={username:un,password:ps};
        let userexist =this.userdata.find((usere)=> usere.username == un)
        console.log(userexist)
        console.log(this.userdata)
        if(userexist){
            alert('username already exist')
            this.router.navigate(["/login"])
        }else{
            if(user.password==psc){
                this.userdata.push(user);
                alert("user registered")
                this.router.navigate(["/login"])
            }else{
                alert("password mismatched")
            }
            } 
    }}
    oncart(product:productmodal){
        this.product.push(product);
        this.cartisempty=false;
    }
}