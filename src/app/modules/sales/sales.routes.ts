// src/app/modules/sales/sales.routes.ts
import { Routes } from '@angular/router';
import { SalesDefaultRedirectGuard } from './guards/sales-default-redirect.guard';

export const SALES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sales.component').then((m) => m.SalesComponent),
    children: [
      {
        path: 'manage-pi',
        loadComponent: () =>
          import('./pages/manage-pi/manage-pi.component').then(
            (m) => m.ManagePiComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('./pages/manage-pi/manage-pi.component').then(
            (m) => m.ManagePiComponent
          ), // dummy component provided b/c actual redirection will place from guard
        canActivate: [SalesDefaultRedirectGuard],
        pathMatch: 'full',
      },
    ],
  },
];
