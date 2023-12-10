import { Component, Input } from '@angular/core';
import { Alert, AlertService } from '../alert.service';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
import { RemoveAlertDialogComponent } from '../remove-alert-dialog/remove-alert-dialog.component';

@Component({
  selector: '[app-alert-table-entry]',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './alert-table-entry.component.html',
  styleUrl: './alert-table-entry.component.scss',
})
export class AlertTableEntryComponent {
  @Input({ required: true }) alert?: Alert;

  constructor(private alertService: AlertService, private dialog: Dialog) {}

  removeAlert(title: string) {
    const dialogRef = this.dialog.open<string>(RemoveAlertDialogComponent, {
      width: '250px',
      data: { title },
      ariaLabel: "Remove alert"
    });

    dialogRef.closed.subscribe((doClose) => {
      if (doClose) {
        this.alertService.removeAlert(title);
      }
    });
  }

  startAlert(title: string) {
    this.alertService.activateAlert(title);
  }
}
