import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { basicservice } from '../../services/basic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { accountservice } from '../../services/account.service';
import { apiservice } from 'src/app/services/api.service';
NgModel
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class loginComponent {
  constructor(public basicservice:basicservice,public accountservice:accountservice,public apiservice:apiservice,private router:Router,private route:ActivatedRoute){}
    username:string='';
    password:string='';
    onsubmit(){
      if(this.username && this.password){
        let finduser=this.apiservice.userdata.find((user)=>
        user.username == this.username)
        if(finduser){
            if(finduser.password == this.password){
                alert("logged in")
                this.accountservice.senduserdata(finduser);
               this.router.navigate(['head/home'])
               this.accountservice.onflag(true);
            }else{
                alert("password invalid")
            }
        }else{
            alert("user not found")
        }
}
    }
    onsignup(){
      this.router.navigate(['signup'])
    }
    onback(){
      this.router.navigate(['head/home'])
    }
}