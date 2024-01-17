import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileRoutingModule } from './profile-routing.module';
import { dashboardComponent } from './dashboard/dashboard.component';
import { editprofileComponent } from './editprofile/editprofile.component';
import { wishlistComponent } from './wishlist/wishlist.component';
import { trackComponent } from './track/track.component';
import { orderhistoryComponent } from './orderhistory/orderhistory.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    profileRoutingModule,
    FormsModule
  ],
  declarations: [
    dashboardComponent,
    editprofileComponent,
    wishlistComponent,
    trackComponent,
    orderhistoryComponent
  ]
})
export class profileModule { }