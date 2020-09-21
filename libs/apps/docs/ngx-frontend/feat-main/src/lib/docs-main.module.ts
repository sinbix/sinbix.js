import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DocsMainComponent } from './docs-main.component';

const routes: Routes = [
  {
    path: '',
    component: DocsMainComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DocsMainComponent],
})
export class DocsMainModule {}
