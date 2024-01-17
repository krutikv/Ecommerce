export class cartmodal{
    public product_id : string;
    public product_name : string;
    public product_img : string;
    public product_price : number;
    public product_type : string;
    public product_count:number;
    constructor( id : string,name : string,img : string,price : number,type : string,count:number){
        this.product_id = id;
        this.product_img = img;
        this.product_name = name;
        this.product_price = price;
        this.product_type = type;
        this.product_count=count;
    }
}