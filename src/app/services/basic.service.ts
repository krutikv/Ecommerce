import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { productmodal } from '../modals/product.modal';

@Injectable({ providedIn: 'root' })
export class basicservice {
  product_number: number = 0;
  totalamount: number = 0;
  wishlist:productmodal[]=[]
  wishlistid:string[]=[]
  filterprd: productmodal[] = [];
  cart: productmodal[] = [];
  product: productmodal[] = [];
  cartisempty: boolean = false;
  p2: productmodal | undefined = undefined;
  constructor() {}
  addwishlist(w:productmodal){
    this.wishlist.push(w)
    this.wishlistid.push(w.product_id)
  }
  removewishlist(id:string){
    let i = this.wishlist.findIndex((e)=> e.product_id==id)
    this.wishlist.splice(i,1)
    this.wishlistid.splice(i,1)
  }
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
  oninc() {
    return (this.product_number += 1);
  }
}