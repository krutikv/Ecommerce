import { Component } from '@angular/core';
import { basicservice } from '../services/basic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { accountservice } from '../services/account.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styles:[
    '.nav-item:hover{ background-color:#8cb6d1}'
  ]
})
export class profileComponent {
  user:usermodals|null=null
  data:string=''
    constructor(public basicservice:basicservice,public accountservice:accountservice,private router:Router, private  route:ActivatedRoute){
     
    }
    ngOnInit(){
        this.user=this.accountservice.user;
        this.ondashboard()
    }
    ondashboard(){
      this.router.navigate(['dashboard'],{relativeTo:this.route})  
    }
    onwish(){
      this.router.navigate(['wishlist'],{relativeTo:this.route})  
    }
    onhis(){
      this.router.navigate(['orderhistory'],{relativeTo:this.route})  
    }
    ontrack(){
      this.router.navigate(['track'],{relativeTo:this.route})  
    }
    onedit(){
      this.router.navigate(['editprofile'],{relativeTo:this.route})  
    }
    onLogout(){
      this.router.navigate(['../../logout'],{relativeTo:this.route})      
    }

}