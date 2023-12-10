import { Component, computed } from '@angular/core';
import { AlertRegionComponent } from '../alert-region/alert-region.component';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-list',
  standalone: true,
  imports: [AlertRegionComponent],
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.scss'
})
export class AlertListComponent {
  private readonly alerts;
  activeAlerts = computed(() => {
    return this.alerts().filter((a) => !!a.active);
  });

  constructor(private alertService: AlertService) {
    this.alerts = alertService.alerts;
  }

  deactivateAlert(title: string) {
    this.alertService.deactivateAlert(title)
  }
}
