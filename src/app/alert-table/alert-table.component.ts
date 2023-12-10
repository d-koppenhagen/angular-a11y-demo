import { Component, computed, Signal } from '@angular/core';

import { AlertTableEntryComponent } from '../alert-table-entry/alert-table-entry.component';
import { Alert, AlertService } from './../alert.service';

@Component({
  selector: 'app-alert-table',
  standalone: true,
  imports: [AlertTableEntryComponent],
  templateUrl: './alert-table.component.html',
  styleUrl: './alert-table.component.scss'
})
export class AlertTableComponent {
  private readonly alerts: Signal<Alert[]>;
  alertsSorted = computed(() => {
    return [...this.alerts().sort((a, b) => a.title.localeCompare(b.title))];
  });
  activeAlerts = computed(() => {
    return this.alertsSorted().filter((a) => !!a.active);
  });
  nonActiveAlerts = computed(() => {
    return this.alertsSorted().filter((a) => !a.active);
  });


  constructor(private alertService: AlertService) {
    this.alerts = alertService.alerts;
  }

  startAlert(title: string) {
    this.alertService.activateAlert(title)
  }
}
