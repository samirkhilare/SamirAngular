import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UdetailsComponent } from './udetails/udetails.component';
import { AdetailsComponent } from './adetails/adetails.component';
import { ProfileComponent } from './udetails/profile/profile.component';


const routes: Routes = [
  {path:"user",component:UdetailsComponent},
  {path:"account",component:AdetailsComponent},
  {path:"details",component:ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const RoutingComponent = [UdetailsComponent,AdetailsComponent,ProfileComponent]