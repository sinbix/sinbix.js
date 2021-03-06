import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessScreenModule } from '@sinbix/ngx-data-access-akita/screen';
import { DataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';

import { THEMES } from './common/themes';
import { DocsShellComponent } from './docs-shell.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@sinbix/docs-ngx-frontend/feat-main').then(
        (m) => m.DocsMainModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [DocsShellComponent],
  imports: [
    DataAccessThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'dark',
    }),
    DataAccessScreenModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [DocsShellComponent],
})
export class DocsShellModule {}
