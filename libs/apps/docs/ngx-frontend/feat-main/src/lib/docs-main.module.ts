import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiRouterModule } from '@sinbix/ngx-ui/router';
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
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiRouterModule,
    NgxFeatUiMatThemeModule,
  ],
  declarations: [DocsMainComponent, HeaderComponent],
})
export class DocsMainModule {}
