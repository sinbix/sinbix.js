import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocsHomeComponent } from './docs-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocsHomeComponent,
      },
    ]),
  ],
  declarations: [DocsHomeComponent],
})
export class DocsHomeModule {}
