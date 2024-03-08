import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { popupComponent } from '../popup/popup.component';
@Injectable({
  providedIn: 'root',
})
export class PopupService {
    title:string='';
    content:string='';
    reply:boolean=false;
  constructor(private dialog: MatDialog) {}

  openPopup(title:string,content:string) {
    this.title=title;
    this.content=content;
    this.dialog.open(popupComponent, {panelClass: 'demo'});
  }
  replyset(re:boolean){
    this.reply=re
  }
  replyget(){
    return this.reply
  }
}