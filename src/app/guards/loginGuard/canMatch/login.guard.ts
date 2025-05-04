import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../../../pages/auth/authConfig/services/auth.service';

export const loginGuardMatch: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService?.isLoggedIn() ? true : router.navigate(['/auth/signin']);
};
