import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  A11yModule,
  AriaLivePoliteness,
  LiveAnnouncer,
} from '@angular/cdk/a11y';
import { concat, defer, map, tap, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-alert-region',
  standalone: true,
  imports: [A11yModule, AsyncPipe],
  templateUrl: './alert-region.component.html',
  styleUrl: './alert-region.component.scss',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate(300),
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateY(20px)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class AlertRegionComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() timer: number = 0; // Timer duration in milliseconds
  @Input() duration: number = 3000; // Timer duration in milliseconds
  @Input() politeness: AriaLivePoliteness = 'polite';
  @Input() role?:
    | 'status'
    | 'alert'
    | 'marquee'
    | 'log'
    | 'progress'
    | 'timer' = 'status';
  @Output() deactivated = new EventEmitter<void>();
  @Input() toastState: string = 'active'; // You can use this to trigger enter/leave animations

  readonly show$ = defer(() => {
    // Emit "true" after e.g. 3 seconds and announce
    const firstTimer = timer(this.timer).pipe(
      map(() => true),
      tap(() => this.announce())
    );

    // Emit "false" after e.g. 20 seconds
    const secondTimer = timer(this.duration).pipe(
      map(() => false),
      tap(() => this.closeMessage())
    );

    return concat(firstTimer, secondTimer);
  });

  constructor(private liveAnnouncer: LiveAnnouncer) {}

  private announce() {
    const description = this.description ? `: ${this.description}` : '';
    this.liveAnnouncer.announce(`${this.title}${description}`);
  }

  private closeMessage() {
    this.deactivated.emit();
    this.liveAnnouncer.clear();
  }
}
