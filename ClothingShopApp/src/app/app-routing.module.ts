import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from './service/services/auth.guard';
import { AdminpageComponent } from './components/adminpage/adminpage.component';





const routes: Routes = [
  { path:'', component: StorePageComponent },
  { path:'cart', component: CartComponent },
  { path:'login',component: LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'contact', component:ContactComponent},
  { path:'about', component:AboutComponent},
  { path:'payment', component:PaymentComponent},
  { path:'admin-page', component:AdminpageComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
