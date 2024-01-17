import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { basicservice } from 'src/app/services/basic.service';
import { accountservice } from '../../services/account.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
})
export class logoutComponent {
    constructor(public basicservice:basicservice,private router:Router,public accountservice:accountservice){}
    onLogout(){
      this.accountservice.onflag(false);
      this.router.navigate(['head/home'])      
    }
    oncancel(){
        this.router.navigate(['../head/profile']) 
    }
}