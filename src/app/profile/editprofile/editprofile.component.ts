import { Component } from '@angular/core';
import { basicservice } from 'src/app/services/basic.service';
import { usermodals } from 'src/app/modals/user.modal';
import { apiservice } from '../../services/api.service';
import { accountservice } from 'src/app/services/account.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '../../services/popup.service';
@Component({
  selector: 'editprofile',
  templateUrl: './editprofile.component.html',
  //styleUrls: ['./app.component.css']
})
export class editprofileComponent {
  username:string=''
  name:string=''
  address:string[]=[]
  pnumber:string=''
  fixedun:string=''
  existance:boolean=false
  user:usermodals|null=null;
  i:string=''
  editform = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    name:new FormControl('',Validators.required),
    pnumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormArray([
    ])
  });
    constructor(public basicservice:basicservice,public apiservice:apiservice,public accountservice:accountservice,private PopupService:PopupService){}
    ngOnInit(){
      if(this.accountservice.user){
      this.editform.patchValue({  
        username:this.accountservice.user.username,     
          name:this.accountservice.user.name, 
          pnumber:this.accountservice.user.pnumber        
      })
      this.fixedun=this.accountservice.user.username;
      for(let i=0;i < this.accountservice.user?.address.length;i++){
        this.existingaddr(i)
      }     
    }
  }
  existingaddr(i:number){
    const control1= new FormControl(this.accountservice.user?.address[i],Validators.required);
    this.classmates.push(control1)
  }
    get classmates() {
      return this.editform.get('address') as FormArray;
    } 
    get childform(){
      return this.classmates.get(this.i) as FormControl
    }
    deleteaddr(i:number){
      this.classmates?.removeAt(i);

    }
    moreaddr(){
      const control2= new FormControl('',Validators.required);
      this.classmates.push(control2)
    }
    updateprofile(){
      if(this.editform.controls.username.value){this.username=this.editform.controls.username.value;}
      if(this.editform.controls.name.value){this.name=this.editform.controls.name.value;}
      if(this.editform.controls.pnumber.value){this.pnumber=this.editform.controls.pnumber.value ;}
      for(let j=0;j<this.classmates.length;j++){
        this.i= ''+j
        if(!this.address.includes(this.childform.value)){this.address.push(this.childform.value)}
      }
      if(this.username && this.address && this.name && this.pnumber && this.editform.valid){
        if(this.classmates.length != 0){
          if(this.accountservice.user){
            let temp = this.apiservice.userdata.find((u)=>{
              return u.username == this.username;
            })
            if(temp){
              this.existance=true;
            }else{
              this.existance=false;
            }        
          if(!this.existance || this.username == this.fixedun){
            this.accountservice.user.name=this.name;
            this.accountservice.user.username=this.username;
            this.accountservice.user.address=this.address;
            this.accountservice.user.pnumber=this.pnumber;
            localStorage.setItem('user',JSON.stringify(this.accountservice.user))
              this.apiservice.updateuser(this.accountservice.user);            
            this.PopupService.openPopup('Profile','Successfully updated!!');
          }else{
            this.PopupService.openPopup('Profile','Username already exist');
          }
          }               
        }else{
          this.PopupService.openPopup('Profile','Add atleast 1 address');
        }
      }else{
        this.PopupService.openPopup('Profile','Fill data properly');
      }
    }
}