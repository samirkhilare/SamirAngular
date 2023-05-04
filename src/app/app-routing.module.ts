import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { UserModule } from './user/user.module';
import { DonationComponent } from './donation/donation.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path:"form1",component:Form1Component},
  {path:"form2",component:Form2Component},
  {path:"donation",component:DonationComponent},
  {path:"student",component:StudentComponent},
 
  {path :"userinfo", loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
  {path :"pizza", loadChildren:()=>import('./pizza/pizza.module').then(mod=>mod.PizzaModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  Form1Component,Form2Component,DonationComponent,
  StudentComponent,
]
