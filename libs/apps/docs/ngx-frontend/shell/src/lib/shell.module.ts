import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';
import { NgxFeatUiMatThemeModule } from '@sinbix/ngx-feat-ui-material-akita/theme';

import { THEMES } from './common/themes';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    children: [
      {
        path: 'components',
        loadChildren: () =>
          import('@sinbix/demo/ngx-demo/routes/components/index').then(
            (m) => m.DemoNgxDemoRoutesComponentsIndexModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    NgxDataAccessThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'dark',
    }),
    NgxFeatUiMatThemeModule,
    RouterModule.forRoot([]),
  ],
  exports: [ShellComponent],
})
export class DocsNgxFrontendShellModule {}
