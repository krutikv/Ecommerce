import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from '../services/popup.service';
@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
//   styles:[".demo {background-color: aqua; margin: -30px;color: black;padding: 50px;}"],
  styleUrls: ['popup.component.css']
})
export class popupComponent {
    title:string='';
    content:string=''
    constructor(private dialog: MatDialog ,public PopupService:PopupService) {
        this.title=this.PopupService.title;
        this.content=this.PopupService.content;
    }
    closeDialog(){
        this.dialog.closeAll();
        this.PopupService.replyset(false);
    }
    confirmDialog(){
        this.PopupService.replyset(true);
        this.dialog.closeAll();       
    }
}