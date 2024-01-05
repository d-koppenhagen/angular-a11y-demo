import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-remove-alert-dialog',
  standalone: true,
  imports: [],
  templateUrl: './remove-alert-dialog.component.html',
  styleUrl: './remove-alert-dialog.component.scss'
})
export class RemoveAlertDialogComponent {
  data: { title: string } = inject(DIALOG_DATA)
  constructor(
    public dialogRef: DialogRef<boolean>,
  ) {}
}
