import { ILoremIpsumParams } from 'lorem-ipsum';
import { Component } from '@angular/core';
import { NgxLipsumComponent } from 'ngx-lipsum';

@Component({
  selector: 'app-deferred-loading-view',
  standalone: true,
  imports: [NgxLipsumComponent],
  templateUrl: './deferred-loading-view.component.html',
  styleUrl: './deferred-loading-view.component.scss'
})
export class DeferredLoadingViewComponent {
  config: ILoremIpsumParams = { count: 5, units: 'paragraphs' }
}
