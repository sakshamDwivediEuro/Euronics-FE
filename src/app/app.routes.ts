// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'sales',
        loadChildren: () =>
          import('./modules/sales/sales.routes').then((m) => m.SALES_ROUTES), // v18 compatible lazy loading
      },
      // Root redirect
      { path: '', pathMatch: 'full', redirectTo: 'sales' },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./auth/components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
