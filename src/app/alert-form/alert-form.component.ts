import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService, Role, Alert } from '../alert.service';
import { AriaLivePoliteness, A11yModule } from '@angular/cdk/a11y';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';

@Component({
  selector: 'app-alert-form',
  standalone: true,
  imports: [A11yModule, ReactiveFormsModule, CdkListbox, CdkOption],
  templateUrl: './alert-form.component.html',
  styleUrl: './alert-form.component.scss'
})
export class AlertFormComponent {
  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(20)
      ],
    }),
    description: new FormControl('', {
      nonNullable: true,
    }),
    politeness: new FormControl<AriaLivePoliteness>('polite', {
      nonNullable: true,
      validators: Validators.required,
    }),
    role: new FormControl<Role>('status', {
      nonNullable: true,
      validators: Validators.required,
    }),
    timer: new FormControl<number>(5000, {
      nonNullable: true,
      validators: Validators.required,
    }),
    duration: new FormControl<number>(3000, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(private alertService: AlertService) {}

  get titleError() {
    const title = this.getField('title')
    return title?.invalid && (title.dirty || title.touched)
  }
  get timerError() {
    const title = this.getField('timer')
    return title?.invalid && (title.dirty || title.touched)
  }
  get durationError() {
    const title = this.getField('duration')
    return title?.invalid && (title.dirty || title.touched)
  }

  private getField(fieldName: string) {
    return this.form.get(fieldName)
  }

  submitForm() {
    const alert = this.form.value;
    this.alertService.addAlert(alert as Alert)
    this.form.reset()
  }
}
