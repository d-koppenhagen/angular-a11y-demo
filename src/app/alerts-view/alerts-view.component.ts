import { Component } from '@angular/core';
import { AlertTableComponent } from '../alert-table/alert-table.component';
import { AlertListComponent } from '../alert-list/alert-list.component';

@Component({
  selector: 'app-alerts-view',
  standalone: true,
  imports: [AlertTableComponent, AlertListComponent],
  templateUrl: './alerts-view.component.html',
  styleUrl: './alerts-view.component.scss'
})
export class AlertsViewComponent {

}
