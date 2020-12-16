import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { Category } from 'src/app/class/category';
import { Product } from 'src/app/class/product';
import { StoreApiService } from 'src/app/service/store-api.service';
import { Order } from 'src/app/class/order';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Input } from '@angular/core'; 




@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  searchText: string;
  searchTextHidden: string;
  categorys:Category[];
  products:Product[];
  CartProductID:string[] = [];
  Cartproductimgurl:string[]= [];
  Cartproductname:string[]= [];
  CartProductproductprice:string[]= [];
  CartProductproductcolor:string[]= [];
  CartProductproductsize:string[]= [];
  CartProductproductdescription:string[]= [];
  CartProductproductcatagoryid:string[]= [];
  amountOfProducts:string[] =[]

  @Output() event:EventEmitter<string> = new EventEmitter();

  public transferThis:any
  
  constructor(private storeapi:StoreApiService,private localStorage:LocalStorageService) { }
  addToCartPopUp(){
    this.amountOfProducts = window.JSON.parse(localStorage.getItem("UserSelectedProducts"));
    this.transferThis =this.amountOfProducts.length
    this.event.emit(this.transferThis)
  }
  addToCartStorage(ProductID,productimgurl,productname,productprice,productcolor,productsize,productdescription,productcatagoryid){

    console.log(this.CartProductID)
    this.CartProductID.push(`${ProductID}`)
    localStorage.setItem("UserSelectedProducts",JSON.stringify(this.CartProductID))

    this.Cartproductimgurl.push(`${productimgurl}`)
    localStorage.setItem("UserSelectedproductimgurl",JSON.stringify(this.Cartproductimgurl))

    this.Cartproductname.push(`${productname}`)
    localStorage.setItem("UserSelectedproductname",JSON.stringify(this.Cartproductname))

    this.CartProductproductprice.push(`${productprice}`)
    localStorage.setItem("UserSelectedproductprice",JSON.stringify(this.CartProductproductprice))

    this.CartProductproductcolor.push(`${productcolor}`)
    localStorage.setItem("UserSelectedproductcolor",JSON.stringify(this.CartProductproductcolor))

    this.CartProductproductsize.push(`${productsize}`)
    localStorage.setItem("UserSelectedproductsize",JSON.stringify(this.CartProductproductsize))

    this.CartProductproductdescription.push(`${productdescription}`)
    localStorage.setItem("UserSelectedproductdescription",JSON.stringify(this.CartProductproductdescription))

    this.CartProductproductcatagoryid.push(`${productcatagoryid}`)
    localStorage.setItem("UserSelectedproductcatagoryid",JSON.stringify(this.CartProductproductcatagoryid))
    
  }
  showProducts(){
    this.CartProductID=JSON.parse(localStorage.getItem(`UserSelectedProducts`));
    this.Cartproductimgurl=JSON.parse(localStorage.getItem(`UserSelectedproductimgurl`));
    this.Cartproductname=JSON.parse(localStorage.getItem(`UserSelectedproductname`));
    this.CartProductproductprice=JSON.parse(localStorage.getItem(`UserSelectedproductprice`));
    this.CartProductproductcolor=JSON.parse(localStorage.getItem(`UserSelectedproductcolor`));
    this.CartProductproductsize=JSON.parse(localStorage.getItem(`UserSelectedproductsize`));
    this.CartProductproductdescription=JSON.parse(localStorage.getItem(`UserSelectedproductdescription`));
    this.CartProductproductcatagoryid=JSON.parse(localStorage.getItem(`UserSelectedproductcatagoryid`));
  }
  categorySearch(categoryid){
    this.searchTextHidden=`${categoryid}`
  }
  loadProducts(){
    this.storeapi.getallProduct().subscribe(ele => this.products = ele);
  }
  loadCategorys(){
    this.storeapi.getallCategory().subscribe(ele => this.categorys = ele);
  }
  ngOnInit(): void {
    this.loadCategorys();
    this.loadProducts();
    this.addToCartPopUp();
    
    //this.showProducts()//this cause null
  }

}
