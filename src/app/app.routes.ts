// app.routing.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.page').then(m => m.WelcomePage),
    children: [
      {
        path: '', // cuando entras a /welcome muestra lista de plantillas
        loadComponent: () =>
          import('./pages/pdf-templates/pdf-templates.component').then(m => m.PdfTemplatesComponent),
      },
      {
        path: 'create', // /welcome/create para crear nueva plantilla
        loadComponent: () =>
          import('./pages/pdf-templates/components/template-edit/template-edit.component').then(m => m.TemplateEditComponent),
      },
      {
        path: 'edit/:id', // /welcome/edit/123 para editar plantilla
        loadComponent: () =>
          import('./pages/pdf-templates/components/template-edit/template-edit.component').then(m => m.TemplateEditComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
