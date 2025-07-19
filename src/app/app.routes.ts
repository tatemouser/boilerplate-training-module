import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },  // Default redirect
    { path: 'entry', loadComponent: () => import('./pages/entry/entry.component').then(m => m.EntryComponent) },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) }
];
