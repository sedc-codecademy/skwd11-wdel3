import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  // Use dependency injection to obtain instances of AuthService and Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const isUserLoggedIn: boolean = !!authService.currentUser$.getValue();

  if (isUserLoggedIn) {
    return true;
  }

  router.navigate(['auth', 'login']);
  return false;

};
