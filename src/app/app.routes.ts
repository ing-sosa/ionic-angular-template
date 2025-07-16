// app.routing.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pdf-template',
    loadComponent: () =>
      import('./pages/welcome/welcome.page').then(m => m.WelcomePage),
    children: [
      {
        path: '', // cuando entras a /pdf-template muestra lista de plantillas
        loadComponent: () =>
          import('./pages/pdf-templates/pdf-templates.component').then(m => m.PdfTemplatesComponent),
      },
      {
        path: 'crear', // /pdf-template/create para crear nueva plantilla
        loadComponent: () =>
          import('./pages/pdf-templates/components/template-edit/template-edit.component').then(m => m.TemplateEditComponent),
      },
      {
        path: 'editar/:id', // /pdf-template/edit/123 para editar plantilla
        loadComponent: () =>
          import('./pages/pdf-templates/components/template-edit/template-edit.component').then(m => m.TemplateEditComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pdf-template',
  },
];
