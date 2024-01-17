import { ordermodal } from "./order.modal";
import { productmodal } from "./product.modal";

export class usermodals {
    public username: string;
    public password: string;
    public name: string;
    public address:string;
    public pnumber:number;
    public order:ordermodal[]
    constructor(un: string, pass: string, name: string,address:string, pnumber:number,order:ordermodal[]) {
      this.username = un;
      this.password = pass;
      this.name=name;
      this.address=address;
      this.pnumber=pnumber;
      this.order=order;
    }
  }