import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { productmodal } from '../modals/product.modal';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { loadingService } from './loading.service';
@Injectable({ providedIn: 'root' })
export class apiservice{
    productsapi : productmodal[] = []
      constructor(public http: HttpClient,public Route:ActivatedRoute,public loadingService:loadingService){}
      setuser(data:usermodals){
        if(data){

          this.http.post<usermodals>('http://localhost:3000/userdata',data).subscribe(data=>{
          this.loadingService.loading();
         })
         this.loadingService.stoploading();
        }
      }
      getuser(){
        return this.http.get<usermodals[]>('http://localhost:3000/userdata')
      } 
      updateuser(userdata:usermodals){
         this.http.put<usermodals>('http://localhost:3000/userdata/'+userdata.id,userdata).subscribe(data=>{
          //this.loadingService.loading();
        })
        //this.loadingService.stoploading();
      }
       url:string="";
      getproducts(){
        return this.http.get<productmodal[]>('http://localhost:3000/productsapi')
      }    
      userdata: usermodals[] = [];
      fetchdata(s:number,e:number){
        let pass:productmodal[]=[]
       for(let i=s*12;i<e*12;i++){
                    if(this.productsapi[i]){pass.push(this.productsapi[i]);}          
        }
        return pass;
      }
}