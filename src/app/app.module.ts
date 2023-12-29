import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headComponent } from './header/header.component';
import { aboutComponent } from './about/about.component';
import { loginComponent } from './account/login/login.component';
import { signupComponent } from './account/signup/signup.component';
import { frontpageComponent } from './frontpage/frontpage.component';
import { storeComponent } from './store/store.component';
import { cartComponent } from './store/cart/cart.component';
import { productComponent } from './store/product/product.component';
import { basicservice } from './basic.service';
import { FormsModule } from '@angular/forms';
import { profileComponent } from './profile/profile.component';
import { cartService } from './store/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    headComponent,
    aboutComponent,
    loginComponent,
    signupComponent,
    frontpageComponent,
    storeComponent,
    cartComponent,
    productComponent,
    profileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [basicservice,cartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
