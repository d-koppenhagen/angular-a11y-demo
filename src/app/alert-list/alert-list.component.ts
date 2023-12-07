import { Component, Signal, computed } from '@angular/core';
import { AlertRegionComponent } from '../alert-region/alert-region.component';
import { Alert, AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-list',
  standalone: true,
  imports: [AlertRegionComponent],
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.scss'
})
export class AlertListComponent {
  private readonly alerts;
  public activeAlerts: Signal<Alert[]> = computed(() => {
    return this.alerts().filter((a) => !!a.active);
  });

  constructor(private alertService: AlertService) {
    this.alerts = alertService.alerts;
  }

  deactivateAlert(title: string) {
    this.alertService.deactivateAlert(title)
  }
}
