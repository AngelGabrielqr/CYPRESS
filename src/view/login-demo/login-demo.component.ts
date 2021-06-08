import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginPresenter } from './login-demo.presenter';

@Component({
  selector: 'bio-login-demo-ui',
  templateUrl: './login-demo.component.html',
  styleUrls: [ './login-demo.component.scss' ],
  providers: [
    LoginPresenter
  ]
})
export class LoginComponent implements OnInit {
  @Output() public login: EventEmitter<void> = new EventEmitter<void>();
 
  public constructor(
    public presenter: LoginPresenter,
  ) {}

  public ngOnInit() {
  }
  public signIn() {
    localStorage.setItem('user', JSON.stringify(this.presenter.Value));
    this.login.emit();
  }
}
