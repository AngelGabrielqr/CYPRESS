import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryContainer } from './summary.container';

export const routes: Routes = [
    { path: '', component: SummaryContainer },

];
@NgModule({

    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class SummaryRoutingModule {}
