import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { productmodal } from '../modals/product.modal';

@Injectable({ providedIn: 'root' })
export class apiservice{
    productsapi : productmodal[] = [
        {
          product_id: '1FDF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_1',
          product_price: 104,
          product_type: 'type A',
          product_quantity:1,
          product_rating:2.5
        },
        {
          product_id: '2FDSF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_2',
          product_price: 145,
          product_type: 'type B',
          product_quantity:1,
          product_rating:5
        },
        {
          product_id: '3FDF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_3',
          product_price: 104,
          product_type: 'type C',
          product_quantity:1,
          product_rating:4
        },
        {
          product_id: '4JHH',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_4',
          product_price: 100,
          product_type: 'type A',
          product_quantity:1,
          product_rating:2.5
        },
        {
          product_id: '5ASHF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_5',
          product_price: 104,
          product_type: 'type B',
          product_quantity:1,
          product_rating:4
        },
        {
          product_id: '6GFDSD',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_6',
          product_price: 102,
          product_type: 'type C',
          product_quantity:1,
          product_rating:3
        },
        {
          product_id: '7SDFDH',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_7',
          product_price: 102,
          product_type: 'type A',
          product_quantity:1,
          product_rating:2.5
        },
        {
          product_id: '8SDSEDSD',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_8',
          product_price: 120,
          product_type: 'type B',
          product_quantity:1,
          product_rating:1.5
        },
        {
          product_id: '9SDDF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_9',
          product_price: 102,
          product_type: 'type C',
          product_quantity:1,
          product_rating:3.5
        },
        {
          product_id: '20FDFD',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_10',
          product_price: 100,
          product_type: 'type A',
          product_quantity:1,
          product_rating:0
        },
        {
          product_id: '1FDFGFD',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_11',
          product_price: 104,
          product_type: 'type A',
          product_quantity:1,
          product_rating:4.5
        },
        {
          product_id: '2FDSFHGFG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_12',
          product_price: 145,
          product_type: 'type B',
          product_quantity:1,
          product_rating:5
        },
        {
          product_id: '3FDFFG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_13',
          product_price: 104,
          product_type: 'type C',
          product_quantity:1,
          product_rating:2.5
        },
        {
          product_id: '4JHHFG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_14',
          product_price: 100,
          product_type: 'type A',
          product_quantity:1,
          product_rating:1.5
        },
        {
          product_id: '5ASHFFGF',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_15',
          product_price: 104,
          product_type: 'type B',
          product_quantity:1,
          product_rating:5
        },
        {
          product_id: '6GFDSDFDGFDG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_16',
          product_price: 102,
          product_type: 'type C',
          product_quantity:1,
          product_rating:2
        },
        {
          product_id: '7SDFDHFDG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_17',
          product_price: 102,
          product_type: 'type A',
          product_quantity:1,
          product_rating:2
        },
        {
          product_id: '8SDSEDSDFD',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_18',
          product_price: 120,
          product_type: 'type B',
          product_quantity:1,
          product_rating:5
        },
        {
          product_id: '9SDDFDFG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_19',
          product_price: 102,
          product_type: 'type C',
          product_quantity:1,
          product_rating:1,
        },
        {
          product_id: '20FDFDFG',
          product_img: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
          product_name: 'Product_20',
          product_price: 100,
          product_type: 'type A',
          product_quantity:1,
          product_rating:4.5
        },
      ];
      
      userdata: usermodals[] = [
        {
          username: 'krutik',
          password: '1234',
          name: 'krutik vaishnav',
          pnumber: "1234567890",
          address: ['ahmedabad'],
          order: [],
          wishlist:[]
        },
        {
          username: 'abc',
          password: '1234',
          name: 'abc',
          pnumber: "1234567890",
          address: ['ahmedabad'],
          order: [],
          wishlist:[]
        },
        {
          username: 'def',
          password: '1234',
          name: 'def',
          pnumber: "1234567890",
          address: ['ahmedabad'],
          order: [],
          wishlist:[]
        },
        {
          username: 'hij',
          password: '1234',
          name: 'krutik vaishnav',
          pnumber: "1234567890",
          address: ['ahmedabad'],
          order: [],
          wishlist:[]
        },
      ];
      fetchdata(s:number,e:number){
        let pass:productmodal[]=[]
        for(let i=s*12;i<e*12;i++){
          if(this.productsapi[i]){pass.push(this.productsapi[i]);}          
        }
        return pass;
      }
}