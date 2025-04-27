import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../pages/auth/authConfig/services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService?.isLoggedIn() ? true : router.navigate(['/auth/signin']);
};
