import { Component } from '@angular/core';
import { NgxLipsumComponent } from 'ngx-lipsum';
import { type ILoremIpsumParams } from 'lorem-ipsum';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [NgxLipsumComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  config: ILoremIpsumParams = { count: 5, units: 'paragraphs' }
}
