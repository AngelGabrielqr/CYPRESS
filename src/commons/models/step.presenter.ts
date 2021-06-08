import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export class StepPresenter<T> {

  protected form: FormGroup;
  protected unsubscribe: Subject<void>;

  public constructor() {

    this.unsubscribe = new Subject();
  }

  public get Form() {
    return this.form;
  }

  public get Value(): T {

    return this.form.value as T;
  }

  public get Disabled(): boolean {

    return this.form.disabled;
  }

  public get Invalid(): boolean {

    return this.form.invalid;
  }

  public patchValue(model: T, options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): void {

    this.form.patchValue(model, options);
  }

  public get Valid(): boolean {

    return this.form.valid;
  }
}
