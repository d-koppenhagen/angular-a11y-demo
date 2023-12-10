import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  appName = 'Angular a11y Demo';

  constructor(private title: Title) {
    super();
  }

  updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(`${title} | ${this.appName}`);
    } else {
      this.title.setTitle(this.appName);
    }
  }
}
