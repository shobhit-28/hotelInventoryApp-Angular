import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';
import { routesForAuth } from './pages/auth/authConfig/module/auth.module';
import { loginGuard } from './guards/loginGuard/canActivate/login.guard';
import { loginGuardMatch } from './guards/loginGuard/canMatch/login.guard';
import { bookingFormFieldsResolver } from './pages/booking/resolvers/booking-form-fields.resolver';
import { bookingRoutes } from './pages/booking/booking-routing.module';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    {
        path: 'rooms',
        loadChildren: () => import('./pages/rooms/rooms.module').then((m) => m.RoomsModule),
        // canActivate: [loginGuard], canMatch: [loginGuardMatch]
    },
    { path: 'auth', children: routesForAuth },
    {
        path: 'booking',
        children: bookingRoutes,
        // loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule),
        resolve: { fields: bookingFormFieldsResolver },
        // canActivate: [loginGuard], canMatch: [loginGuardMatch]
    },
    { path: '**', component: ErrorCompComponent },
];
