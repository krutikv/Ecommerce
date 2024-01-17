import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashboardComponent } from './dashboard/dashboard.component';
import { wishlistComponent } from './wishlist/wishlist.component';
import { orderhistoryComponent } from './orderhistory/orderhistory.component';
import { trackComponent } from './track/track.component';
import { editprofileComponent } from './editprofile/editprofile.component';
import { profileComponent } from './profile.component';

const routes: Routes = [
    {path:'', component: profileComponent ,children:[
      {path:'dashboard',component:dashboardComponent},
    {path:'wishlist',component:wishlistComponent},
    {path:'orderhistory',component:orderhistoryComponent},
    {path:'track',component:trackComponent},
    {path:'editprofile',component:editprofileComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profileRoutingModule { }