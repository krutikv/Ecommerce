import { Component, EventEmitter, Output } from '@angular/core';
import { basicservice } from '../services/basic.service';
import { ActivatedRoute } from '@angular/router';
import { accountservice } from '../services/account.service';
import { apiservice } from '../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'head-app',
  templateUrl: './header.component.html',
 // styleUrls: ['./head.component.css']
 styles: [".is-active {text-decoration: underline solid 15%; }"]
})
export class headComponent {
  loggedin:boolean=false;
  email:string='';
  check=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  emailForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern(this.check)])
  })
  constructor(public basicservice:basicservice,private route: ActivatedRoute,public accountservice:accountservice,public apiservice:apiservice,private PopupService:PopupService) { 
  }
ngOnInit(){
  this.loggedin=JSON.parse(localStorage.getItem('token')!) 
}
emailsend(){
  if(this.emailForm.controls.email.value && this.emailForm.controls.email.valid){
    this.email=this.emailForm.controls.email.value
    this.accountservice.sendemail(this.email)
    this.PopupService.openPopup('Email','Successfully Updated');
  }else{
    this.PopupService.openPopup('Email','Email Invalid');
  }
}
  onAuth(){
    this.accountservice.onAuths();
  }
}