import { Component } from '@angular/core';
import { basicservice } from '../basic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./cart.component.css']
})
export class profileComponent {
    constructor(public basicservice:basicservice,private router:Router){}
    onLogout(){
        this.basicservice.onflag(false);
        this.router.navigate(['head'])
    }
}