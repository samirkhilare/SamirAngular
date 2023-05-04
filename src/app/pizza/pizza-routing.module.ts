import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallComponent } from './small/small.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"small",component:SmallComponent},
  {path:"order",component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
