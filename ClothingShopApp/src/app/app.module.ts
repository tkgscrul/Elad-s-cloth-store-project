import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterArrPipe } from './filter-arr.pipe';
import { StorePageComponent } from './components/store-page/store-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreApiService } from './service/store-api.service';
import { AdminpageComponent } from './components/adminpage/adminpage.component';



@NgModule({
  declarations: [
    AppComponent,
    StorePageComponent,
    NavBarComponent,
    FooterComponent,
    FilterArrPipe,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    CheckoutComponent,
    PaymentComponent,
    AdminpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],
  providers: [StoreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
