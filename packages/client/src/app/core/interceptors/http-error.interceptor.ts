import { HttpInterceptorFn } from '@angular/common/http';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe
    // Handle errors here if needed
    // For example, you can catch errors and log them or transform them
    ();
};
