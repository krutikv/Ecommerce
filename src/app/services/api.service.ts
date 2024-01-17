import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { productmodal } from '../modals/product.modal';

@Injectable({ providedIn: 'root' })
export class apiservice{
    productsapi: productmodal[] = [
        {
          product_id: '1FDF',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_1',
          product_price: 10430,
          product_type: 'type A',
          product_quantity:1
        },
        {
          product_id: '2FDSF',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_2',
          product_price: 14500,
          product_type: 'type B',
          product_quantity:1
        },
        {
          product_id: '3FDF',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_3',
          product_price: 10450,
          product_type: 'type C',
          product_quantity:1
        },
        {
          product_id: '4JHH',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_4',
          product_price: 10012,
          product_type: 'type A',
          product_quantity:1
        },
        {
          product_id: '5ASHF',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_5',
          product_price: 10450,
          product_type: 'type B',
          product_quantity:1
        },
        {
          product_id: '6GFDSD',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_6',
          product_price: 10240,
          product_type: 'type C',
          product_quantity:1
        },
        {
          product_id: '7SDFDH',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_7',
          product_price: 10250,
          product_type: 'type A',
          product_quantity:1
        },
        {
          product_id: '8SDSEDSD',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_8',
          product_price: 1200,
          product_type: 'type B',
          product_quantity:1
        },
        {
          product_id: '9SDDF',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_9',
          product_price: 1020,
          product_type: 'type C',
          product_quantity:1
        },
        {
          product_id: '20FDFD',
          product_img: 'https://picsum.photos/150/100/',
          product_name: 'Product_10',
          product_price: 10075,
          product_type: 'type A',
          product_quantity:1
        },
      ];
      userdata: usermodals[] = [
        {
          username: 'krutik',
          password: '1234',
          name: 'krutik vaishnav',
          pnumber: 1234567890,
          address: 'ahmedabad',
          order: [],
        },
        {
          username: 'abc',
          password: '1234',
          name: 'abc',
          pnumber: 1234567890,
          address: 'ahmedabad',
          order: [],
        },
        {
          username: 'def',
          password: '1234',
          name: 'def',
          pnumber: 1234567890,
          address: 'ahmedabad',
          order: [],
        },
        {
          username: 'hij',
          password: '1234',
          name: 'krutik vaishnav',
          pnumber: 1234567890,
          address: 'ahmedabad',
          order: [],
        },
      ];
}