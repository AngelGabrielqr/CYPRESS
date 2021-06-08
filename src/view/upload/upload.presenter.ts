import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StepPresenter } from '@commons/models/step.presenter';
@Injectable()
export class UploadPresenter extends StepPresenter<IIdentityForm> {
 /*
  /*
   *  ------------------------------------------------------- Miembros
   */


  public items: Array<IParameter> = new Array<IParameter>();

  /*
   *  ---------------------------------------------------- Constructor
   */

  public constructor(private readonly fb: FormBuilder) {

    super();

    this.items = [
      {
        id: 'CUENTA_SUELDO',
        name: 'CUENTA SUELDO'
      },
      {
        id: 'CTS',
        name: 'CTS'
      },
    ];
  }

  /*
   *  ----------------------------------------------- Métodos Públicos
   */

  public ngOnDestroy() {
  }

}

export interface IIdentityForm {
  document: string;
  typeDocument: string;
}
export interface IParameter {
  id: string;
  name: string;
  disable?: string;
}
