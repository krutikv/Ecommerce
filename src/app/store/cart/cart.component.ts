import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { productmodal } from 'src/app/modals/product.modal';
import { cartmodal } from '../../modals/cart.modal';
import { Router } from '@angular/router';
import { accountservice } from '../../services/account.service';
import { ordermodal } from 'src/app/modals/order.modal';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class cartComponent {
  cart: productmodal[] = [];
  order: ordermodal = {
    order_number: 0,
    order_amount: 0,
    order_date: new Date(),
    order_status: '',
    products: [],
  };
  totalamount: number = 0;
  cartisempty: boolean = false;
  constructor(
    public basicservice: basicservice,
    private router: Router,
    public accountservice: accountservice
  ) {
    this.create();
  }
  create() {
    this.cart = [];
    this.cart = this.basicservice.createcart();
    this.totalamount = this.basicservice.total();
    this.cartisempty = this.basicservice.isempty();
  }
  inc(id: string) {
    this.basicservice.passidi(id);
    this.totalamount = this.basicservice.total();
    this.create();
  }
  dcr(id: string) {
    this.basicservice.passidd(id);
    this.totalamount = this.basicservice.total();
    let tempc = this.cart.find((c) => {
      return c.product_id == id;
    });
    if (tempc?.product_quantity == 0) {
      this.cartisempty = this.basicservice.remove(id);
    }
    this.create();
  }

  onpayment() {
    this.order.order_date = new Date();
    this.order.order_number = this.basicservice.oninc();
    this.order.order_status = 'Delivered';
    this.order.order_amount = this.totalamount;
    this.order.products = this.cart;
    this.accountservice.user?.order.push(this.order);
    alert('order placed!!');
    this.router.navigate(['head/home']);
    this.basicservice.clearcart();
  }
}
