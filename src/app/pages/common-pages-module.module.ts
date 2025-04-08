import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CommonPagesModuleModule { }
