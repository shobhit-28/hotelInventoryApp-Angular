import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';
import { routesForAuth } from './pages/auth/authConfig/module/auth.module';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'rooms', loadChildren: () => import('./pages/rooms/rooms.module').then((m) => m.RoomsModule) },
    { path: 'auth', children: routesForAuth },
    { path: 'booking', loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule) },
    { path: '**', component: ErrorCompComponent },
];
