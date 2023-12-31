import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'movies',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/movies/movies.module').then((m) => m.MoviesModule),
  },
  // { path: 'movies',
  // loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule), canActivate: [AuthGuard]},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
