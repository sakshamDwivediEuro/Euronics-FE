import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  //   const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error) => {
      // Log errors to console (optional)
      console.error('HTTP Error:', error);

      // Show user-friendly messages
      if (error.status >= 500) {
        // toastr.error('Server error occurred. Please try again later.', 'Error');
        console.log('Server error occurred. Please try again later');
      } else if (error.status === 404) {
        // toastr.warning('Requested resource not found.', 'Warning');
        console.log('Requested resource not found');
      } else if (error.status === 400) {
        // toastr.info('Bad request. Please check your input.', 'Info');
        console.log('Bad request. Please check your input');
      }

      // Handle unauthorized globally (optional)
      if (error.status === 401 || error.status === 403) {
        router.navigate(['/login']);
      }

      return throwError(() => error); // propagate error downstream
    })
  );
};
