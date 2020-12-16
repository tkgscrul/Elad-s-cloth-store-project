import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, NgModel } from '@angular/forms';
import { Newsletter } from 'src/app/class/newsletter';
import { Order } from 'src/app/class/order';
import { AuthService } from 'src/app/service/auth.service';
import { StoreApiService } from 'src/app/service/store-api.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {


  putOrder;
  ordersArray: any[] = [];
  orders: Order[] = [];
  emailSubscribers: Newsletter[] = [];

  id: FormControl
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

  putorderid: Order
  deleteOrderId: Order
  deleteNewsletter: Newsletter
  result: any
  constructor(private storeapi: StoreApiService, private formBiulder: FormBuilder, private ref: ChangeDetectorRef, public auth: AuthService, private afs: AngularFirestore) { }

  fillEditInput() {     
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i]
      this.ordersArray.push({
        id: `${element.id}`,
        orderproductid: `${element.orderproductid}`,
        orderfirstname: `${element.orderfirstname}`,
        orderlastname: `${element.orderlastname}`,
        orderadress: `${element.orderadress}`,
        orderzipcode: `${element.orderzipcode}`,
        orderphone: `${element.orderphone}`,
        orderemail: `${element.orderemail}`,
        orderprice: `${element.orderprice}`,
        ordernote: `${element.ordernote}`,
        orderpersonalgreeting: `${element.orderpersonalgreeting}`,
        orderpayment: `${element.orderpayment}`
      })
      console.log(this.ordersArray)
    }
  }




  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  setIndexForDeleteNewsletter(i: Newsletter) {
    this.deleteNewsletter = i
    console.log(this.deleteNewsletter)
  }
  setIndexForDelete(i: Order) {
    this.deleteOrderId = i
    console.log(this.deleteOrderId)
  }

  setIndexForEdit(i: Order) {
    this.putorderid = i
    console.log(this.putorderid)
  }

  loadOrders() {
    return this.storeapi.getallOrder().subscribe(ele => this.orders = ele);
  }
  deleteOrderOnSubmit() {
    this.storeapi.deleteOrderbyid(this.deleteOrderId).subscribe(
      data => {
        console.log(data)
      }, err => console.log(err))
  }
  setEditValue() {
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i];
      this.id.setValue(element.id)
      this.orderproductid.setValue(element.orderproductid)
      this.orderfirstname.setValue(element.orderfirstname)
      this.orderlastname.setValue(element.orderlastname)
      this.orderadress.setValue(element.orderadress)
      this.orderzipcode.setValue(element.orderzipcode)
      this.orderphone.setValue(element.orderphone)
      this.orderemail.setValue(element.orderemail)
      this.orderprice.setValue(element.orderprice)
      this.ordernote.setValue(element.ordernote)
      this.orderpersonalgreeting.setValue(element.orderpersonalgreeting)
      this.orderpayment.setValue(element.orderpayment)
    }
  }
  editOrderOnSubmit() {
    if (!this.putOrder.valid) {
      return;
    }
    const order: Order = {
      id: this.putOrder.controls.id.value,
      orderproductid: this.putOrder.controls.orderproductid.value,
      orderfirstname: `${this.putOrder.controls.orderfirstname.value}`,
      orderlastname: `${this.putOrder.controls.orderlastname.value}`,
      orderadress: `${this.putOrder.controls.orderadress.value}`,
      orderzipcode: `${this.putOrder.controls.orderzipcode.value}`,
      orderphone: `${this.putOrder.controls.orderphone.value}`,
      orderemail: `${this.putOrder.controls.orderemail.value}`,
      orderprice: `${this.putOrder.controls.orderprice.value}`,
      ordernote: `${this.putOrder.controls.ordernote.value}`,
      orderpersonalgreeting: `${this.putOrder.controls.orderpersonalgreeting.value}`,
      orderpayment: `${this.putOrder.controls.orderpayment.value}`,
    }
    this.storeapi.putOrder(order, this.putorderid).subscribe(
      data => {
        console.log(data)
      }, err => console.log(err))
    console.log(order)
  }


  getAllEmailSubscribers() {
    this.storeapi.getallNewsletter().subscribe(ele => this.emailSubscribers = ele);
  }
  deleteEmailSubscriber() {
    this.storeapi.deleteNewsletter(this.deleteNewsletter).subscribe(
      data => {
        console.log(data)
      }, err => console.log(err))
  }

  ngOnInit(): void {
    this.putOrder = this.formBiulder.group({
      id: [``],
      orderproductid: [``],
      orderfirstname: [``],
      orderlastname: [``],
      orderadress: [``],
      orderzipcode: [``],
      orderphone: [``],
      orderemail: [``],
      orderprice: [``],
      ordernote: [``],
      orderpersonalgreeting: [``],
      orderpayment: [``],
    })
    
    this.getAllEmailSubscribers();
    this.loadOrders();
    this.ngAfterContentChecked();
    this.setEditValue();
  }

}
