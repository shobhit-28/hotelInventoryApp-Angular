import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';

export const routesForComments: Routes = [
  { path: '', component: CommentsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesForComments)
  ]
})
export class CommentsModule { }
