import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepPresenter } from 'src/commons/models/step.presenter';
@Injectable()
export class CompanyPresenter extends StepPresenter<ICompany> {
 /*
  /*
   *  ------------------------------------------------------- Miembros
   */

  public ruc: FormControl;
  public name: FormControl;
  public address: FormControl;

  /*
   *  ---------------------------------------------------- Constructor
   */

  public constructor(private readonly fb: FormBuilder) {

    super();

    this.createValidators();
    this.form = this.fb.group({
      ruc: this.ruc,
      name: this.name,
      address: this.address
    });
    this.ruc.setValidators(Validators.required);
    this.name.setValidators(Validators.required);
    this.address.setValidators(Validators.required);
  }
  /*
   *  ----------------------------------------------- Métodos Públicos
   */

  public ngOnDestroy() {

    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private createValidators(): void {
    this.ruc = new FormControl();
    this.name = new FormControl();
    this.address = new FormControl();
  }

}

export interface ICompany {
  ruc: string;
  name: string;
  address: string
}

