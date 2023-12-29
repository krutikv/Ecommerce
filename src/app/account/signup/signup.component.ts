import { Component } from '@angular/core';
import { basicservice } from '../../basic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  //styleUrls: ['./signup.component.css']
})
export class signupComponent {
  username:string=''
  password:string=''
  passwordc:string=''
  constructor(public basicservice:basicservice,private router:Router){}
  onregister(){
    this.basicservice.onsignup(this.username,this.password,this.passwordc);
  }
  onback(){
    this.router.navigate(['login'])
  }

}