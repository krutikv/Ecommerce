import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutComponent } from './about/about.component';
import { storeComponent } from './store/store.component';
import { loginComponent } from './account/login/login.component';
import { signupComponent } from './account/signup/signup.component';
import { frontpageComponent } from './frontpage/frontpage.component';
import { cartComponent } from './store/cart/cart.component';
import { headComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { logoutComponent } from './account/logout/logout.component';
import { productdetailsComponent } from './store/productdetails/productdetails.component';
import { authenticationGuard, deactivateGuard } from './authguard';
import { ProductListResolveService } from './services/ProductListResolveGuardService';

const routes: Routes = [
  {path:'', redirectTo:"head/home", pathMatch:'full'},
  {path:'head', component:headComponent,children:[ 
    {path:'home', component:frontpageComponent},
    {path:'about',canActivate:[authenticationGuard()], component:aboutComponent},
    {path:'store',canActivate:[authenticationGuard()], component:storeComponent,resolve: {products: ProductListResolveService}},
    {path:'store/product',canActivate:[authenticationGuard()], component:productdetailsComponent},
    {path:'profile' ,canActivate:[authenticationGuard()],loadChildren: () => import('./profile/profile.module').then(m => m.profileModule)},
    {path: 'cart',canActivate:[authenticationGuard()], component: cartComponent} ]},
  { path: 'login', component: loginComponent},
  { path: 'logout', component: logoutComponent},
  { path: 'signup',canDeactivate:[deactivateGuard()], component:signupComponent},
  { path: '**', component:ErrorComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
