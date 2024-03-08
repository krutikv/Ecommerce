import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class loadingService {
    isloading:boolean=false
    constructor(){}
    loading(){
        this.isloading= true;
    }
    stoploading(){
        this.isloading= false;
    }
  }
