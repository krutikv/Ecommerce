import { PopupService } from './../../services/popup.service';
import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { Router } from '@angular/router';
import { accountservice } from '../../services/account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  //styleUrls: ['./signup.component.css']
})
export class signupComponent {
  username:string=''
  password:string=''
  passwordc:string=''
  dguardtoggle:boolean=false;
  name:string='';
  address:string[]=[];
  pnumber:string='';
  togglenumerror:boolean=false;
  check=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  x=/[a-z]+/;
  y=/[A-Z]+/;
  z=/[0-9]+/;
  w=/[$@#&!]+/;
  signupForm = new FormGroup({
    username: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    name:new FormControl('',Validators.required),
    pnumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl('',Validators.required),
   password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(this.check)]),
   cpassword:new FormControl('',Validators.required)
  });
  constructor(public basicservice:basicservice,public accountservice:accountservice,private router:Router,private PopupService:PopupService){}
  onregister(){
    if(this.signupForm.controls.username.value){this.username=this.signupForm.controls.username.value;}
    if(this.signupForm.controls.name.value){this.name=this.signupForm.controls.name.value;}
    if(this.signupForm.controls.pnumber.value){this.pnumber=this.signupForm.controls.pnumber.value ;}
    if(this.signupForm.controls.address.value){this.address.push(this.signupForm.controls.address.value);}
    if(this.signupForm.controls.password.value && !this.signupForm.controls.password.errors?.['pattern']){this.password=this.signupForm.controls.password.value;}
    if(this.signupForm.controls.cpassword.value){this.passwordc=this.signupForm.controls.cpassword.value;}
    if (this.username && this.name && this.password && this.pnumber && this.passwordc && this.address) {
      if (this.pnumber.length == 10) {
        this.dguardtoggle=true;
    this.accountservice.onsignup(this.username,this.password,this.passwordc,this.name,this.pnumber,this.address);
  } else {
    this.PopupService.openPopup('Error','Phone number must be 10 digit');
  }
  }else {
    this.PopupService.openPopup('Error','Fill data properly');
    }
  }
  onback(){
    if(this.signupForm.controls.username ||
      this.signupForm.controls.address ||
      this.signupForm.controls.cpassword ||
      this.signupForm.controls.name ||
      this.signupForm.controls.pnumber ||
      this.signupForm.controls.password
      ){
        this.PopupService.openPopup('SignUp','Are you sure? you will lose unsaved data');
        this.dguardtoggle=this.PopupService.replyget();
      }
      if(this.dguardtoggle){ this.router.navigate(['login'])}
  }
}