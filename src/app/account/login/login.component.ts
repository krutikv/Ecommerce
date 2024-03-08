import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { basicservice } from '../../services/basic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { accountservice } from '../../services/account.service';
import { apiservice } from 'src/app/services/api.service';
import { PopupService } from '../../services/popup.service';
import { usermodals } from 'src/app/modals/user.modal';
import { loadingService } from '../../services/loading.service';
NgModel
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class loginComponent {
  allusers:usermodals[]=[]
  constructor(public basicservice:basicservice,public accountservice:accountservice,public loadingService:loadingService,private PopupService:PopupService,public apiservice:apiservice,private router:Router,private route:ActivatedRoute){  }
    username:string='';
    password:string='';
    onsubmit(){
      this.apiservice.getuser().subscribe(data => {
        this.loadingService.loading()
        this.allusers = data;
        if(this.username && this.password){  
          let finduser=this.allusers!.find((user)=>
            user.username == this.username)  
          if(finduser){
              if(finduser.password == this.password){
                this.PopupService.openPopup('Authenticaton','Successfully logged in');
                  this.accountservice.senduserdata(finduser);
                 this.router.navigate(['head/home'])
                 this.accountservice.onflag(true);
              }else{
                this.PopupService.openPopup('Error','Password Invalid');
              }
          }else{
            this.PopupService.openPopup('Error','User not found');
          }}
      })
      this.loadingService.stoploading()
    }
    onsignup(){
      this.router.navigate(['signup'])
    }
    onback(){
      this.router.navigate(['head/home'])
    }
}