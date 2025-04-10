import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../signin/signin.component';
import { Routes } from '@angular/router';

export const routesForAuth: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
