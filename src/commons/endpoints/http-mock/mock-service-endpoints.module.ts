import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from './mock-service.endpoints';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MockService]
})
export class MockServiceModule { }
