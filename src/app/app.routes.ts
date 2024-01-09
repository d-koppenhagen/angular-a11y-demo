import { Routes } from '@angular/router';

import { HomeViewComponent } from './home-view/home-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'deferred-loading',
    loadComponent: () => import('./deferred-loading-view/deferred-loading-view.component').then(m => m.DeferredLoadingViewComponent),
    title: 'Deferred Loading'
  },
  {
    path: 'track',
    loadComponent: () => import('./track-view/track-view.component').then(m => m.TrackViewComponent),
    title: 'Track List Items'
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alerts-view/alerts-view.component').then(m => m.AlertsViewComponent),
    title: 'List of configured alerts'
  },
  {
    path: 'admin',
    loadComponent: () => import('./alerts-admin-view/alerts-admin-view.component').then(m => m.AlertsAdminViewComponent),
    title: 'Administrate alerts'
  },
  {
    path: '**',
    redirectTo: '/'
  },
];
