import { Component } from '@angular/core';
import { AlertFormComponent } from '../alert-form/alert-form.component';

@Component({
  selector: 'app-alerts-admin-view',
  standalone: true,
  imports: [AlertFormComponent],
  templateUrl: './alerts-admin-view.component.html',
  styleUrl: './alerts-admin-view.component.scss'
})
export class AlertsAdminViewComponent {

}
