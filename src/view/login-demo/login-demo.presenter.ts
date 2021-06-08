import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepPresenter } from 'src/commons/models/step.presenter';
@Injectable()
export class LoginPresenter extends StepPresenter<IIdentityForm> {
 /*
  /*
   *  ------------------------------------------------------- Miembros
   */

  public user: FormControl;
  public password: FormControl;

  /*
   *  ---------------------------------------------------- Constructor
   */

  public constructor(private readonly fb: FormBuilder) {

    super();

    this.createValidators();
    this.form = this.fb.group({
      user: this.user,
      password: this.password,
    });

    this.user.setValidators(Validators.required);
    this.password.setValidators(Validators.required)

  }
  /*
   *  ----------------------------------------------- Métodos Públicos
   */

  public ngOnDestroy() {

    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private createValidators(): void {
    this.user = new FormControl();
    this.password = new FormControl();
  }

}

export interface IIdentityForm {
  user: string;
  password: string;
}

