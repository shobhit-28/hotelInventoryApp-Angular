import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';
import { routesForAuth } from './pages/auth/authConfig/module/auth.module';
import { loginGuard } from './guards/loginGuard/canActivate/login.guard';
import { loginGuardMatch } from './guards/loginGuard/canMatch/login.guard';
import { commentsResolver } from './guards/resolvers/comments/comments.resolver';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    {
        path: 'rooms',
        loadChildren: () => import('./pages/rooms/rooms.module').then((m) => m.RoomsModule),
        canActivate: [loginGuard], canMatch: [loginGuardMatch]
    },
    {
        path: 'comments',
        loadChildren: () => import('./pages/comments/comments.module').then((m) => m.CommentsModule),
        resolve: { comments: commentsResolver }, canActivate: [loginGuard], canMatch: [loginGuardMatch]
    },
    { path: 'auth', children: routesForAuth },
    { path: '**', component: ErrorCompComponent },
];
