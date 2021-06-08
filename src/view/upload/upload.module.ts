import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload.component';
import { UploadContainer } from './upload.container';
import { UploadRoutingModule } from './upload.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UploadRoutingModule
  ],
  declarations: [
    UploadComponent,
    UploadContainer
  ],
  exports: [
    UploadComponent,
    UploadContainer
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UploadModule { }
