import { Component } from '@angular/core';
import { basicservice } from 'src/app/services/basic.service';
import { usermodals } from 'src/app/modals/user.modal';
import { apiservice } from '../../services/api.service';
import { accountservice } from 'src/app/services/account.service';
@Component({
  selector: 'editprofile',
  templateUrl: './editprofile.component.html',
  //styleUrls: ['./app.component.css']
})
export class editprofileComponent {
  username:string=''
  Name:string=''
  Address:string=''
  PhoneNumber:number=0
  fixedun:string=''
  user:usermodals|null=null;
    constructor(public basicservice:basicservice,public apiservice:apiservice,public accountservice:accountservice){}
    ngOnInit(){
      if(this.accountservice.user){
        this.Name=this.accountservice.user.name;
        this.username=this.accountservice.user.username;
        this.fixedun=this.username
        this.Address=this.accountservice.user.address;
        this.PhoneNumber=this.accountservice.user.pnumber;
      }
    }
    updateprofile(){
      if(this.username && this.Address && this.Name && this.PhoneNumber){
        if(this.accountservice.user){
          this.accountservice.user.name=this.Name;
          this.accountservice.user.username=this.username;
          this.accountservice.user.address=this.Address;
          this.accountservice.user.pnumber=this.PhoneNumber;
          this.apiservice.userdata.find((u)=>{
            if(u.username == this.fixedun && this.accountservice.user){
              u=this.accountservice.user
            }
          })
          alert("updated!!")
        }
      }else{
        alert('fill data properly')
      }
    }
}