import { Pipe, PipeTransform } from '@angular/core';
import { productmodal } from '../modals/product.modal';

@Pipe({
  name: 'searchfilter'
})
export class searchPipe  implements PipeTransform{
    transform(value:productmodal[],search:string) {
        value = value.filter((obj)=>{
          if(obj.product_name.toLowerCase().includes(search)){return obj}else{return }
        })
     
      return value
    }}