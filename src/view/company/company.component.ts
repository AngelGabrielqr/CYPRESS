import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyPresenter } from './company.presenter';

@Component({
  selector: 'bio-company-ui',
  templateUrl: './company.component.html',
  styleUrls: [ './company.component.scss' ],
  providers: [
    CompanyPresenter
  ]
})
export class CompanyComponent {

  @Output() public save: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    public presenter: CompanyPresenter
  ) {}

  public signIn() {
    localStorage.setItem('company', JSON.stringify(this.presenter.Value));
    this.save.emit();
  }
}
