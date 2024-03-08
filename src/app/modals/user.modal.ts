import { ordermodal } from "./order.modal";
import { productmodal } from "./product.modal";

export class usermodals {
  public id?:number;
    public username: string;
    public password: string;
    public name: string;
    public address:string[];
    public pnumber:string;
    public email?:string;
    public wishlist:productmodal[];
    public order:ordermodal[];
    constructor(un: string, pass: string, name: string,address:string[], pnumber:string,order:ordermodal[],email:string,wl:productmodal[],i:number) {
      this.id=i;
      this.username = un;
      this.password = pass;
      this.name=name;
      this.address=address;
      this.pnumber=pnumber;
      this.order=order;
      this.email=email;
      this.wishlist=wl
    }
  }