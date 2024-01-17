import { Component } from '@angular/core';
import { basicservice } from './services/basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='ECommerce'
  constructor(public basicservice:basicservice){}
}
