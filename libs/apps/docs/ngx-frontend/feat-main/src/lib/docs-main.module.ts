import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatNavHUnderlineModule } from '@sinbix/ngx-ui-material/navigation';
import { NgxFeatUiMatThemeModule } from '@sinbix/ngx-feat-ui-material-akita/theme';

import { DocsMainComponent } from './docs-main.component';
import { HeaderComponent } from './header/header.component';

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
      {
        path: 'components',
        loadChildren: () =>
          import('@sinbix/docs-ngx-frontend/components-feat-main').then(
            (m) => m.DocsComponentsMainModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    NgxFeatUiMatThemeModule,
    MatNavHUnderlineModule,
  ],
  declarations: [DocsMainComponent, HeaderComponent],
})
export class DocsMainModule {}
