import { Component, Input, OnInit } from '@angular/core';
import { StoreApiService } from 'src/app/service/store-api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/class/order';
import { Product } from 'src/app/class/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  newproductprice:number[] = [];
  Totalpricearr:any;

  id:string[] = [];
  productimgurl:string[] = [];
  productname:string[] = [];
  productprice:string[] = [];
  productcolor:string[] = [];
  productsize:string[] = [];
  productdescription:string[] = [];
  productcatagoryid:string[] = [];
  paymentcarddetails:string[] = [];

  postOrder;
  orderproductid: FormControl
  orderfirstname: FormControl
  orderlastname: FormControl
  orderadress: FormControl
  orderzipcode: FormControl
  orderphone: FormControl
  orderemail: FormControl
  orderprice: FormControl
  ordernote: FormControl
  orderpersonalgreeting: FormControl
  orderpayment: FormControl

  orderid:any

  newid:number[]=[]

  
  
  cartProductNumber:number
  constructor(private storeapi: StoreApiService, private localStorage: LocalStorageService, private formBiulder: FormBuilder) { }
  

  showProducts(){
    this.id=window.JSON.parse(localStorage.getItem(`UserSelectedProducts`));
    this.productimgurl=window.JSON.parse(localStorage.getItem(`UserSelectedproductimgurl`));
    this.productname=window.JSON.parse(localStorage.getItem(`UserSelectedproductname`));
    this.productprice=window.JSON.parse(localStorage.getItem(`UserSelectedproductprice`));
    this.productcolor=window.JSON.parse(localStorage.getItem(`UserSelectedproductcolor`));
    this.productsize=window.JSON.parse(localStorage.getItem(`UserSelectedproductsize`));
    this.productdescription=window.JSON.parse(localStorage.getItem(`UserSelectedproductdescription`));
    this.productcatagoryid=window.JSON.parse(localStorage.getItem(`UserSelectedproductcatagoryid`));
    this.paymentcarddetails=window.JSON.parse(localStorage.getItem(`userpaymentdetails`))  
  }
  

  removeItemFromShowProducts(indexinarray){

    this.id.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedProducts`,JSON.stringify(this.id))

    this.productimgurl.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductimgurl`,JSON.stringify(this.productimgurl));

    this.productname.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductname`,JSON.stringify(this.productname));

    this.productprice.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductprice`,JSON.stringify(this.productprice));

    this.productcolor.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductcolor`,JSON.stringify(this.productcolor));

    this.productsize.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductsize`,JSON.stringify(this.productsize));

    this.productdescription.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductdescription`,JSON.stringify(this.productdescription));
    
    this.productcatagoryid.splice(indexinarray,1)
    localStorage.setItem(`UserSelectedproductcatagoryid`,JSON.stringify(this.productcatagoryid));


    this.showProducts()
    this.reduceArrOrderPrice()
    
  }

  reduceArrOrderPrice(){
    for (let index = 0; index < this.productprice.length; index++) {
      this.productprice[index] = this.productprice[index].replace('$','')
    }
    this.newproductprice = this.productprice.map((i) => Number(i));
      this.Totalpricearr = this.newproductprice.reduce((a, b) => a + b , 0)
  }
  oredergeneratedid(){
    this.orderid=Math.floor(100000 + Math.random() * 900000)
  }
  postOrderonSubmit() {
    this.oredergeneratedid()
    if (!this.postOrder.invalid) {
      return;
    }
    const order: Order = {
      orderproductid: `${this.postOrder.controls.orderproductid.value}`,
      orderfirstname: `${this.postOrder.controls.orderfirstname.value}`,
      orderlastname: `${this.postOrder.controls.orderlastname.value}`,
      orderadress: `${this.postOrder.controls.orderadress.value}`,
      orderzipcode: `${this.postOrder.controls.orderzipcode.value}`,
      orderphone: `${this.postOrder.controls.orderphone.value}`,
      orderemail: `${this.postOrder.controls.orderemail.value}`,
      orderprice: `${this.postOrder.controls.orderprice.value}`,
      ordernote: `${this.postOrder.controls.ordernote.value}`,
      orderpersonalgreeting: `${this.postOrder.controls.orderpersonalgreeting.value}`,
      orderpayment: `${this.postOrder.controls.orderpayment.value}`,
    }
    console.log(order)
    this.storeapi.postOrder(order).subscribe(data=>{
      console.log(data)
    }, err => console.log(err))
  }
  completeForm(){
    this.newid = this.id.map((i) => Number(i))
    this.postOrder.controls.orderproductid.value = this.newid 
    this.postOrder.controls.orderprice.value = this.Totalpricearr + 10
    this.postOrder.controls.orderpayment.value = this.paymentcarddetails
  }
  ngOnInit(): void {
    this.postOrder = this.formBiulder.group({
      orderproductid: [``, Validators.compose([Validators.required, Validators.minLength(6)])],
      orderfirstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      orderlastname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      orderadress: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      orderzipcode: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      orderphone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      orderemail: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      orderprice: [``, Validators.compose([Validators.required, Validators.minLength(2)])],
      ordernote: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      orderpersonalgreeting: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      orderpayment: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
    })
    this.showProducts()
    this.reduceArrOrderPrice()
    this.oredergeneratedid()
    this.completeForm()

  }

}
