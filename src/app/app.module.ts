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
import { basicservice } from './services/basic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { profileComponent } from './profile/profile.component';
import { searchPipe } from './pipes/searchfilter.pipe';
import { apiservice } from './services/api.service';
import { accountservice } from './services/account.service';
import { categoryPipe } from './pipes/categoryfilter.pipe';
import { sortPipe } from './pipes/sortfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { productdetailsComponent } from './store/productdetails/productdetails.component';
import { CommonModule } from '@angular/common';
import { popupComponent } from './popup/popup.component';
import { PopupService } from './services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ProductListResolveService } from './services/ProductListResolveGuardService';
import { loaderComponent } from './loader/loader.component';
import { DarkModeToggle } from './darkmode/darkmode.component';

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
        productdetailsComponent,
        productComponent,
        profileComponent,
        popupComponent,
        searchPipe,
        categoryPipe,
        sortPipe,
        DarkModeToggle
    ],
    providers: [basicservice, apiservice, accountservice, PopupService, ProductListResolveService],
    bootstrap: [AppComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatDialogModule,
        HttpClientModule,
        loaderComponent
    ]
})
export class AppModule { }
