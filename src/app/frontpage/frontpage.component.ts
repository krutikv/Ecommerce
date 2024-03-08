import { Component } from '@angular/core';
import { accountservice } from '../services/account.service';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  //styleUrls: ['./frontpage.component.css']
})
export class frontpageComponent {
  auth:boolean=false
  constructor(public accountservice:accountservice){
    this.auth=JSON.parse(localStorage.getItem('token')!)
  }
}