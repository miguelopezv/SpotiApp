import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../search/search.module').then(m => m.SearchModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
