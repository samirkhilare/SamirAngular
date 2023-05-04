import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { SmallComponent } from './small/small.component';
import { OrderComponent } from './order/order.component';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    SmallComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FieldsetModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    SidebarModule,
    ReactiveFormsModule,
    InputTextModule
    
    
    
    
  ]
})
export class PizzaModule { }
