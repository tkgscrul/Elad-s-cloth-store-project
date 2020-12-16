import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Category } from '../class/category';
import { Invoice } from '../class/invoice';
import { Order } from '../class/order';
import { Product } from '../class/product';
import { UserMyserver } from '../class/userMyserver';
import { Observable } from 'rxjs';
import { Newsletter } from '../class/newsletter';
@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Category CRUD
  getallCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.ApiUrl}/Category`)
  }

  getCategorybyid(id):Observable<Category>{
    return this.http.get<Category>(`${environment.ApiUrl}/Category/${id}`)
  }

  putCategorybyid(id,newCategory:Category):Observable<Category>{
    return this.http.put<Category>(`${environment.ApiUrl}/Category/${id}`,newCategory)
  }

  postCategory(newCategory:Category):Observable<Category>{
    return this.http.post<Category>(`${environment.ApiUrl}/Category`,newCategory)
  }

  deleteCategorybyid(id):Observable<Category>{
    return this.http.delete<Category>(`${environment.ApiUrl}/Category/${id}`)
  }

  //Invoice CRUD
  getallInvoice():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${environment.ApiUrl}/Invoice`)
  }

  getInvoicebyid(id):Observable<Invoice>{
    return this.http.get<Invoice>(`${environment.ApiUrl}/Invoice/${id}`)
  }

  putInvoicebyid(id,newInvoice:Invoice):Observable<Invoice>{
    return this.http.put<Invoice>(`${environment.ApiUrl}/Invoice/${id}`,newInvoice)
  }

  postInvoice(newInvoice:Invoice):Observable<Invoice>{
    return this.http.post<Invoice>(`${environment.ApiUrl}/Invoice`,newInvoice)
  }

  deleteInvoicebyid(id):Observable<Invoice>{
    return this.http.delete<Invoice>(`${environment.ApiUrl}/Invoice/${id}`)
  }

  //Order CRUD
  getallOrder():Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.ApiUrl}/order`)
  }

  getOrderbyid(id):Observable<Order>{
    return this.http.get<Order>(`${environment.ApiUrl}/order/${id}`)
  }
 // iwrokhere------
 putOrder(newOrder:Order,id:Order):Observable<Order>{
   return this.http.put<Order>(`${environment.ApiUrl}/order/${id}`,newOrder,this.httpOptions)
  }
  // ------------------
  
  postOrder(newOrder:Order):Observable<Order>{
    return this.http.post<Order>(`${environment.ApiUrl}/order`,newOrder)
  }

  deleteOrderbyid(id):Observable<Order>{
    return this.http.delete<Order>(`${environment.ApiUrl}/order/${id}`)
  }

  //Product CRUD
  getallProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.ApiUrl}/Product`)
  }

  getProductbyid(id):Observable<Product>{
    return this.http.get<Product>(`${environment.ApiUrl}/Product/${id}`)
  }

  putProductbyid(id,newProduct:Product):Observable<Product>{
    return this.http.put<Product>(`${environment.ApiUrl}/Product/${id}`,newProduct)
  }

  postProduct(newProduct:Product):Observable<Product>{
    return this.http.post<Product>(`${environment.ApiUrl}/Product`,newProduct)
  }

  deleteProductbyid(id):Observable<Product>{
    return this.http.delete<Product>(`${environment.ApiUrl}/Product/${id}`)
  }

  //User CRUD
  getallUserMyserver():Observable<UserMyserver[]>{
    return this.http.get<UserMyserver[]>(`${environment.ApiUrl}/User`)
  }

  getUserMyserverbyid(id):Observable<UserMyserver>{
    return this.http.get<UserMyserver>(`${environment.ApiUrl}/User/${id}`)
  }

  putUserMyserverbyid(id,newUserMyserver:UserMyserver):Observable<UserMyserver>{
    return this.http.put<UserMyserver>(`${environment.ApiUrl}/User/${id}`,newUserMyserver)
  }

  postUserMyserver(newUserMyserver:UserMyserver):Observable<UserMyserver>{
    return this.http.post<UserMyserver>(`${environment.ApiUrl}/User`,newUserMyserver)
  }

  deleteUserMyserverbyid(id):Observable<UserMyserver>{
    return this.http.delete<UserMyserver>(`${environment.ApiUrl}/User/${id}`)
  }

  //newsletter CRUD
  getallNewsletter():Observable<Newsletter[]>{
    return this.http.get<Newsletter[]>(`${environment.ApiUrl}/newsletter`)
  }

  getNewsletterbyid(id):Observable<Newsletter>{
    return this.http.get<Newsletter>(`${environment.ApiUrl}/newsletter/${id}`)
  }

  putNewsletterbyid(id,newNewsLetter:Newsletter):Observable<Newsletter>{
    return this.http.put<Newsletter>(`${environment.ApiUrl}/newsletter/${id}`,newNewsLetter)
  }

  postNewsletter(newNewsLetter:Newsletter):Observable<Newsletter>{
    debugger;
    return this.http.post<Newsletter>(`${environment.ApiUrl}/newsletter`,newNewsLetter)

  }

  deleteNewsletter(id):Observable<Newsletter>{
    return this.http.delete<Newsletter>(`${environment.ApiUrl}/newsletter/${id}`)
  }

}
