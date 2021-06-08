import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../view/login-demo/login-demo.module').then((m) => m.LoginModule) },
  { path: 'company', loadChildren: () => import('../view/company/company.module').then((m) => m.CompanyModule) },
  { path: 'upload', loadChildren: () => import('../view/upload/upload.module').then((m) => m.UploadModule) },
  { path: 'summary', loadChildren: () => import('../view/summary/summary.module').then((m) => m.SummaryModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
