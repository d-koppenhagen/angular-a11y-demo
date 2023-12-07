import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-remove-alert-dialog',
  standalone: true,
  imports: [],
  templateUrl: './remove-alert-dialog.component.html',
  styleUrl: './remove-alert-dialog.component.scss'
})
export class RemoveAlertDialogComponent {
  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: { title: string },
  ) {}
}
