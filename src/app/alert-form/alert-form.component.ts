import { A11yModule, AriaLivePoliteness } from '@angular/cdk/a11y';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Alert, AlertService, Role } from '../alert.service';

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
    timer: new FormControl(5000, {
      nonNullable: true,
      validators: Validators.required,
    }),
    duration: new FormControl(3000, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(private alertService: AlertService) {}

  isInvalid(controlName: keyof typeof this.form.controls) {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  submitForm() {
    const alert = this.form.value;
    this.alertService.addAlert(alert as Alert)
    this.form.reset()
  }
}
