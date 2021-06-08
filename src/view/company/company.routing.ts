import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyContainer } from './company.container';

export const routes: Routes = [
    { path: '', component: CompanyContainer },

];
@NgModule({

    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class CompanyRoutingModule {}
