 
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
//import { ProductService } from './product.service';
import { Observable, of, observable } from 'rxjs';
import { apiservice } from './api.service';
import { productmodal } from '../modals/product.modal';
 
@Injectable({ providedIn: 'root' })
export class ProductListResolveService implements Resolve<productmodal[]>{
 
    constructor(private _router:Router , public apiservice:apiservice ) {
    }
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<productmodal[]> {
        return this.apiservice.getproducts();
    }
}
 