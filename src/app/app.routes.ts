import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';
import { routesForRooms } from './pages/rooms/rooms.module';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'rooms', children: routesForRooms},
    {path: '**', component: ErrorCompComponent},
];
