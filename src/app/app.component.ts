import { Component } from '@angular/core';
import { basicservice } from './services/basic.service';
import { apiservice } from './services/api.service';
import { accountservice } from './services/account.service';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { loadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='ECommerce'
  isloading:boolean=false;
  constructor(public basicservice:basicservice,private apiservice:apiservice,private accountservice:accountservice,public route:Router,public loadingService:loadingService){
  }
  ngOnInit(): void {
    this.route.events.subscribe((routerEvent : Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.isloading = true;
      }
      if(  routerEvent instanceof NavigationEnd    ||
           routerEvent instanceof NavigationCancel ||
           routerEvent instanceof NavigationError)
      {
        this.isloading = false;
      }
    })
  }
}
