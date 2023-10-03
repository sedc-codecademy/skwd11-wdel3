import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)},  // /products
  {path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)}, // /auth/login   /auth/register
  {path: '', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
