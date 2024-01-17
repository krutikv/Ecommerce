import { Pipe, PipeTransform } from '@angular/core';
import { productmodal } from '../modals/product.modal';

@Pipe({
  name: 'sortfilter'
})
export class sortPipe  implements PipeTransform{
    transform(value:productmodal[],toggle:string){
        if(toggle=='htl'){
            value=value.sort((a,b)=>b.product_price - a.product_price)
          }
        if(toggle=='lth'){
          value=value.sort((a,b)=>a.product_price - b.product_price)
        }
    return value;
    }
}