import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { Router } from '@angular/router';
import { accountservice } from '../../services/account.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  //styleUrls: ['./signup.component.css']
})
export class signupComponent {
  username:string=''
  password:string=''
  passwordc:string=''
  name:string='';
  address:string='';
  pnumber:number|null=null;
  togglenumerror:boolean=false
  constructor(public basicservice:basicservice,public accountservice:accountservice,private router:Router){}
  onregister(){
    
    this.accountservice.onsignup(this.username,this.password,this.passwordc,this.name,this.pnumber,this.address);
    
  }
  onback(){
    this.router.navigate(['login'])
  }

}