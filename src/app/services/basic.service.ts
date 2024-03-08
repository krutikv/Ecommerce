import { Injectable } from '@angular/core';
import { productmodal } from '../modals/product.modal';
import { accountservice } from './account.service';

@Injectable({ providedIn: 'root' })
export class basicservice {
  resultlength:number=0
  product_number:number=JSON.parse(localStorage.getItem('order_number')!);
  totalamount: number = 0;
  filterprd: productmodal[] = [];
  cart: productmodal[] = [];
  product: productmodal[] = [];
  cartisempty: boolean = false;
  p2: productmodal | undefined = undefined;
  constructor(public accountservice:accountservice) {}
  clearcart() {
    this.product = [];
    this.cart = [];
  }
  createcart() {
    this.cart = [];
    for (let prd of this.product) {
      this.filterprd = this.product.filter((p) => {
        return p.product_id == prd.product_id;
      });
      if (this.filterprd.length == 1) {
        prd.product_quantity = 1;
      }
      if (this.cart.length == 0) {
        this.cart.push(prd);
      } else {
        this.p2 = this.cart.find((e) => {
          return e.product_id == prd.product_id;
        });
        if (this.p2) {
          this.cart.find((e) => {
            if (e.product_id == prd.product_id) {
              e.product_quantity = this.filterprd.length;
            }
          });
        } else {
          this.cart.push(prd);
        }
      }
    }
    return this.cart;
  }
  isempty() {
    if (this.cart.length == 0) {
      this.cartisempty = true;
    }
    return this.cartisempty;
  }
  remove(id: string) {
    let index = this.cart.findIndex((item) => item.product_id == id);
    this.cart.splice(index, 1);
    if (this.cart.length == 0) {
      this.cartisempty = true;
    }
    return this.cartisempty;
  }
  total() {
    this.totalamount = 0;
    for (let j = 0; j < this.cart.length; j++) {
      this.totalamount +=
        this.cart[j].product_price * this.cart[j].product_quantity;
    }
    return this.totalamount;
  }
  passidi(id: string) {
    let find = this.product.find((pr) => {
      return pr.product_id == id;
    });
    if (find) {
      this.product.push(find);
    }
  }
  passidd(id: string) {
    let index = this.product.findIndex((item) => item.product_id == id);
    this.product.splice(index, 1);
  }
  oncarts(p: productmodal) {
    this.cartisempty = false;
    this.product.push(p);
  }
  oninc(){
    this.product_number+=1;
    localStorage.setItem('order_number',JSON.stringify(this.product_number))
    return (this.product_number);
  }
}
