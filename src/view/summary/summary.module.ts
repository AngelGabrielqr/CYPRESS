import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryContainer } from './summary.container';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SummaryRoutingModule,
  ],
  declarations: [
    SummaryComponent,
    SummaryContainer
  ],
  exports: [
    SummaryComponent,
    SummaryContainer
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SummaryModule { }
