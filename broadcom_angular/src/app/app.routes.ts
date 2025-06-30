import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'company',
    loadComponent: () => import('./pages/company/company.component').then(m => m.CompanyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 