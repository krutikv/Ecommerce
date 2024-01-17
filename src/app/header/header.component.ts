import { Component, EventEmitter, Output } from '@angular/core';
import { basicservice } from '../services/basic.service';
import { ActivatedRoute } from '@angular/router';
import { accountservice } from '../services/account.service';

@Component({
  selector: 'head-app',
  templateUrl: './header.component.html',
 // styleUrls: ['./head.component.css']
 styles: [".is-active {text-decoration: underline solid 15%; }"]
})
export class headComponent {
  loggedin:boolean=false;
  constructor(public basicservice:basicservice,private route: ActivatedRoute,public accountservice:accountservice) { 
  }
ngOnInit(){
  this.loggedin=this.accountservice.auth 
}
  onAuth(){
    this.accountservice.onAuths();
  }
}