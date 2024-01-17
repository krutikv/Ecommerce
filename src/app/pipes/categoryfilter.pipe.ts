import { Pipe, PipeTransform } from '@angular/core';
import { productmodal } from '../modals/product.modal';

@Pipe({
  name: 'categoryfilter'
})
export class categoryPipe  implements PipeTransform{
    transform(value:productmodal[],category:string){
        if(category){
            value = value.filter((e)=>{if(e.product_type == category){return e}else{return }})
          }
    return value;
    }
}