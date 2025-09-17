import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const ls = inject(LocalStorageService);
  const router = inject(Router);

  const token = ls.get<string>('token');

  if (token) {
    // User is logged in, allow access
    return true;
  } else {
    // User not logged in, redirect to login page
    // router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    router.navigate(['/login']);
    return false;
  }
};
