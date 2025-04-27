import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../../pages/auth/authConfig/services/auth.service';

export const loginGuardMatch: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService)

  return authService?.isLoggedIn();
};
