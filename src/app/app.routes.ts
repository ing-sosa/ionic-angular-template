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
  {
    path: 'pdf-templates',
    loadComponent: () =>
      import('./pages/pdf-templates/pdf-templates.component').then(m => m.PdfTemplatesComponent)
  },

  // Redirects
  {
    path: '**',
    redirectTo: 'pdf-templates',
  },
];
