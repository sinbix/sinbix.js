import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LinkComponent
  ]
})
export class NavigationModule { }
