import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
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
import {
  Observable,
  concatMap,
  of,
  switchMap,
  take,
  tap,
  timer
} from 'rxjs';
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

  readonly show$ = new Observable<boolean>(observer => {
    console.log(`[Creation: ${this.title} - sec: ${new Date().getSeconds()}]`)
    const firstTimer = timer(this.timer); // Emit "true" after 3 seconds
    const secondTimer = timer(this.timer + this.duration); // Emit "false" after 20 seconds

    const subscription1 = firstTimer.subscribe(() => {
      observer.next(true);
      console.log(`[Start: ${this.title} - sec: ${new Date().getSeconds()}]`)
      this.announce()
    });

    const subscription2 = secondTimer.subscribe(() => {
      observer.next(false);
      observer.complete();
    });

    // Clean up subscriptions when the source observable is unsubscribed
    return () => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      console.log(`[End: ${this.title} - sec: ${new Date().getSeconds()}]`)
      this.closeMessage()
    };
  });

  constructor(private liveAnnouncer: LiveAnnouncer) {}

  private announce() {
    const description = this.description ? `: ${this.description}` : ""
    this.liveAnnouncer.announce(`${this.title}${description}`)
  }

  private closeMessage() {
    this.deactivated.emit()
    this.liveAnnouncer.clear()
  }

  // ngOnDestroy() {
  //   this.subscription?.unsubscribe();
  // }
}
