import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadContainer } from './upload.container';

export const routes: Routes = [
    { path: '', component: UploadContainer },

];
@NgModule({

    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class UploadRoutingModule {}
