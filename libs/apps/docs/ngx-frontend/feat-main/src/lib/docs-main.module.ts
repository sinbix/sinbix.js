import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxUiRouterModule } from '@sinbix/ngx-ui/router';

import { DocsMainComponent } from './docs-main.component';

const routes: Routes = [
  {
    path: '',
    component: DocsMainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@sinbix/docs-ngx-frontend/feat-home').then(
            (m) => m.DocsHomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgxUiRouterModule],
  declarations: [DocsMainComponent],
})
export class DocsMainModule {}
