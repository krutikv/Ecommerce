import { Component } from '@angular/core';
import { basicservice } from '../../services/basic.service';
import { productmodal } from 'src/app/modals/product.modal';
import { cartmodal } from '../../modals/cart.modal';
import { Router } from '@angular/router';
import { accountservice } from '../../services/account.service';
import { ordermodal } from 'src/app/modals/order.modal';
import { apiservice } from '../../services/api.service';
import { PopupService } from '../../services/popup.service';
import { loadingService } from '../../services/loading.service';

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
    public accountservice: accountservice,
    private apiservice:apiservice,
    private PopupService:PopupService,
    public loadingService:loadingService
  ) {
    this.create();
  }
  create(){
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
    this.accountservice.user.order.push(this.order);
    localStorage.setItem('user',JSON.stringify(this.accountservice.user))
    this.accountservice.user=JSON.parse(localStorage.getItem('user')!)
    this.apiservice.getuser().subscribe(data=>
      {
        this.loadingService.loading();
        data.find((u)=>{
          if(this.accountservice.user.username==u.username){
            u.order.push(this.order)
          }
          this.apiservice.updateuser(u);
        })
      })
      this.loadingService.stoploading();
    this.PopupService.openPopup('Order','Successfully placed');
    this.router.navigate(['head/home']);
    this.basicservice.clearcart();
  }
}
