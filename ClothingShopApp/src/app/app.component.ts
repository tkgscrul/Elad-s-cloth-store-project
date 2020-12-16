import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClothingShopApp';
  amountOfProducts:any
  constructor() { }
  setDataFromStorePage(data){
    this.amountOfProducts = data
  }
}

