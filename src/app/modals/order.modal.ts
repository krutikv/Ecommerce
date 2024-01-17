import { productmodal } from "./product.modal";

export class ordermodal{
    public order_number:number;
    public order_date:Date;
    public order_status:string;
    public order_amount:number;
    public products:productmodal[]
    constructor(on:number,od:Date,prd:productmodal[],os:string,oa:number){
        this.order_number=on;
        this.order_date=od;
        this.products=prd;
        this.order_status=os;
        this.order_amount=oa;
    }
}