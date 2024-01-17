import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { aboutComponent } from './about/about.component';
import { storeComponent } from './store/store.component';
import { loginComponent } from './account/login/login.component';
import { signupComponent } from './account/signup/signup.component';
import { frontpageComponent } from './frontpage/frontpage.component';
import { cartComponent } from './store/cart/cart.component';
import { headComponent } from './header/header.component';
import { profileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { logoutComponent } from './account/logout/logout.component';

const routes: Routes = [
  {path:'', redirectTo:"head/home", pathMatch:'full'},
  {path:'head', component:headComponent,children:[ 
    {path:'home', component:frontpageComponent},
    {path:'about', component:aboutComponent},
    {path:'store', component:storeComponent},
    {path:'profile', loadChildren: () => import('./profile/profile.module').then(m => m.profileModule)},
    {path: 'cart', component: cartComponent} ]},
  { path: 'login', component: loginComponent},
  { path: 'logout', component: logoutComponent},
  { path: 'signup', component:signupComponent},
  { path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
