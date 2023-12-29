import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { basicservice } from '../../basic.service';
import { ActivatedRoute, Router } from '@angular/router';
NgModel
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class loginComponent {
  constructor(public basicservice:basicservice,private router:Router,private route:ActivatedRoute){}
    username:string='';
    password:string='';
    onsubmit(){
      //this.basicservice.onlogin(this.username,this.password)
      if(this.username && this.password){
        let finduser=this.basicservice.userdata.find((user)=>
        user.username == this.username)
        if(finduser){
            if(finduser.password == this.password){
                alert("logged in")
               this.router.navigate(['head/home'])
               this.basicservice.onflag(true);
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