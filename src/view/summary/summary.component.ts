import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompany } from '../company/company.presenter';
import { IIdentityForm } from '../login-demo/login-demo.presenter';
import { SummaryPresenter } from './summary.presenter';

@Component({
  selector: 'bio-summary-ui',
  templateUrl: './summary.component.html',
  styleUrls: [ './summary.component.scss' ],
  providers: [
    SummaryPresenter
  ]
})
export class SummaryComponent implements OnInit {
  public user: IIdentityForm = {} as IIdentityForm;
  public company: ICompany = {} as ICompany;
  public file: string;
  public constructor(
    public presenter: SummaryPresenter,
    private router: Router
  ) {}

  public ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.company = JSON.parse(localStorage.getItem('company') as string);
    this.file = localStorage.getItem('file') as string;
  }
  public out() {
    this.router.navigate(['login'])
  }
}
