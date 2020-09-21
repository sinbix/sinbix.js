import { NgModule } from '@angular/core';
import { NgxDataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';
import { NgxFeatUiMatThemeModule } from '@sinbix/ngx-feat-ui-material-akita/theme';

import { THEMES } from './common/themes';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    NgxDataAccessThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'dark',
    }),
    NgxFeatUiMatThemeModule,
  ],
  exports: [ShellComponent],
})
export class DocsNgxFrontendShellModule {}
