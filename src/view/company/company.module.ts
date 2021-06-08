import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyContainer } from './company.container';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompanyRoutingModule,
  ],
  declarations: [
    CompanyComponent,
    CompanyContainer
  ],
  exports: [
    CompanyComponent,
    CompanyContainer
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanyModule { }
