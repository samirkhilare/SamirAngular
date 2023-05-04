import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { DonationComponent } from './donation/donation.component';
import { StudentComponent } from './student/student.component';
import {CalendarModule} from 'primeng/calendar';





@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    DonationComponent,
    StudentComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    FieldsetModule,
    HttpClientModule,
    TableModule,
    CalendarModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
