import { Component, EventEmitter, Output } from '@angular/core';
import { basicservice } from '../basic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'head-app',
  templateUrl: './header.component.html',
 // styleUrls: ['./head.component.css']
 styles: [".is-active {text-decoration: underline solid 15%; }"]
})
export class headComponent {
  loggedin:boolean=false;
  constructor(public basicservice:basicservice,private route: ActivatedRoute) {
}
ngOnInit(){
  this.loggedin=this.basicservice.auth;
}
  onAuth(){
    this.basicservice.onAuths()
  }
}