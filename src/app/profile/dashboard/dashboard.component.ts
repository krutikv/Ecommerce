import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { usermodals } from 'src/app/modals/user.modal';
import { accountservice } from 'src/app/services/account.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./app.component.css']
})
export class dashboardComponent {
    user:usermodals|null=null;
    constructor(public basicservice:basicservice,public accountservice:accountservice){}
    ngOnInit(){
        this.user=this.accountservice.user;
    }
}