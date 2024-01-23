export class productmodal{
    public product_id : string;
    public product_name : string;
    public product_img : string;
    public product_price : number;
    public product_type : string;
    public product_quantity:number;
    public product_rating:number;
    constructor( id : string,name : string,img : string,price : number,type : string, qnt:number , r:number){
        this.product_id = id;
        this.product_img = img;
        this.product_name = name;
        this.product_price = price;
        this.product_type = type;
        this.product_quantity=qnt;
        this.product_rating=r;
    }
}