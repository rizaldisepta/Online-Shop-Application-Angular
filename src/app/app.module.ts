import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { FakturService} from './services/faktur.service';
import { Form4Component } from './form4/form4.component';
import { CustomerService} from './services/customer.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { Form5Component } from './form5/form5.component';
import { DataService} from './services/data.service';
import {BarcodeService} from './services/barcode.service';
import {ColorService} from './services/color.service';
import {PriceListService} from './services/pricelist.service';
import {ProductService} from './services/products.service';
import {ProductTypeService} from './services/producttypes.service';
import {ProductUnitService} from './services/productunits.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';



const appRoutes: Routes = [
							{
								path: 'form1',
								component: Form1Component
							},
							{
								path: 'form2',
								component: Form2Component
              },
              {
								path: 'form4',
								component: Form4Component
              },
              {
								path: 'form5',
								component: Form5Component
              },
              {
                path: 'parent',
                component: ParentComponent
              },
              {
                path: 'parent2',
                component: Parent2Component
              }
];


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form4Component,
    Form5Component,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    
  ],
  imports: [
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserModule, FormsModule, HttpClientModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    AccordionModule,
    TableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CustomerService, FakturService, BarcodeService, ColorService, PriceListService, ProductService,
  ProductTypeService, ProductUnitService,DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
