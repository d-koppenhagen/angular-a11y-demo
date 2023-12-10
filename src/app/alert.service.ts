import { AriaLivePoliteness } from '@angular/cdk/a11y';
import { Injectable, signal } from '@angular/core';

export type Role = 'status' | 'alert' | 'marquee' | 'log' | 'progress' | 'timer'

export type Alert = {
  title: string;
  description?: string;
  politeness: AriaLivePoliteness;
  role: Role;
  timer: number,
  duration: number
  active?: boolean
};

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alerts = signal<Alert[]>([
    {
      role: "log",
      title: "Log",
      description: "A simple log",
      politeness: "polite",
      timer: 2000,
      duration: 3000,
      active: true
    },
    {
      role: "alert",
      title: "Alert",
      description: "A very important alert message",
      politeness: "assertive",
      timer: 200,
      duration: 2000,
      active: true
    },
    {
      role: "status",
      title: "Status",
      description: "A status alert which isn't that important",
      politeness: "polite",
      timer: 3000,
      duration: 2000,
      active: true
    },
    {
      role: "marquee",
      title: "Marquee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      politeness: "polite",
      timer: 500,
      duration: 10000,
      active: true
    },
    {
      role: "progress",
      title: "Progress",
      description: "Step 1 of 4 finished.",
      politeness: "polite",
      timer: 6000,
      duration: 3000,
      active: true
    },
    {
      role: "timer",
      title: "Timer",
      description: "2 minutes left",
      politeness: "polite",
      timer: 7000,
      duration: 3000,
      active: true
    },
  ])

  constructor() {}

  addAlert(alert: Alert) {
    this.alerts.set([
      ...this.alerts(),
      { ...alert, active: true }
    ])
  }

  private activateOrDeactivateAlert(title: string, active: boolean) {
    this.alerts.set([
      ...this.alerts().map(a => {
        if (a.title === title) {
          a.active = active
        }
        return a
      }),
    ])
  }

  removeAlert(title: string) {
    this.alerts.set(this.alerts().filter(a => a.title !== title))
  }

  activateAlert(title: string) {
    this.activateOrDeactivateAlert(title, true)
  }

  deactivateAlert(title: string) {
    console.log('❌ deactivate', title)
    this.activateOrDeactivateAlert(title, false)
  }
}
