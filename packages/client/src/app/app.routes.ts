import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/pages/home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent}, // Redirect to a real route
  // { path: 'home', component: HomeComponent }, // Create a proper home component
  // { path: 'auth', loadChildren: () => import('./features/auth/routes').then(m => m.authRoutes) },
  // { path: '**', redirectTo: '/home' }, // Redirect unknown routes
];

