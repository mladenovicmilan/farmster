// app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // { path: 'auth', loadChildren: () => import('./features/auth/routes').then(m => m.authRoutes) },
  { path: '**', redirectTo: '' },
];
