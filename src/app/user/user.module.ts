import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from "primeng/calendar";

import { UserRoutingModule } from './user-routing.module';

import { UdetailsComponent } from './udetails/udetails.component';
import { AdetailsComponent } from './adetails/adetails.component';
import { ProfileComponent } from './udetails/profile/profile.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [

   
    AdetailsComponent,
    ProfileComponent,
    UdetailsComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    InputTextareaModule,
    FieldsetModule,
    ButtonModule,
  ]
})
export class UserModule { }
