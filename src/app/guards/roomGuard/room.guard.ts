import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../../pages/auth/authConfig/services/auth.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService)

  return authService.isAdmin();
};
