import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  CardNumber
  CardholdersName
  ExpirationDate
  CVV
  paymentdetails:string[] = []

  productprice:string[] = []
  newproductprice:number[] = []
  Totalpricearr:any
  paySuccessFull(CardNumber, CardholdersName, ExpirationDate, CVV) {

      this.paymentdetails.push(`${CardNumber}`,`${CardholdersName}`,`${ExpirationDate}`,`${CVV}`)
    localStorage.setItem("userpaymentdetails",JSON.stringify(this.paymentdetails))
  }
  showprice(){
    this.productprice=window.JSON.parse(localStorage.getItem(`UserSelectedproductprice`));
    for (let index = 0; index < this.productprice.length; index++) {
      this.productprice[index] = this.productprice[index].replace('$','')
    }
      this.newproductprice = this.productprice.map((i) => Number(i));
      this.Totalpricearr = this.newproductprice.reduce((a, b) => a + b , 0)
  }
  ngOnInit(): void {
    this.showprice();
  }

}
