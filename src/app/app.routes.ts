import { Routes } from '@angular/router';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: '**', component: ErrorCompComponent}
];
