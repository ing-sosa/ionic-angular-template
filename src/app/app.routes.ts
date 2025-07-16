import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.page').then((m) => m.WelcomePage),
  },
  // Redirects
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
