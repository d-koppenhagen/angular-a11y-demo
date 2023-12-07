import { Component } from '@angular/core';
import { AlertTableComponent } from '../alert-table/alert-table.component';

@Component({
  selector: 'app-alerts-view',
  standalone: true,
  imports: [AlertTableComponent],
  templateUrl: './alerts-view.component.html',
  styleUrl: './alerts-view.component.scss'
})
export class AlertsViewComponent {

}
