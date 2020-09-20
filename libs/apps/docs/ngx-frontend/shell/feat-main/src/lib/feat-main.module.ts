import { NgModule } from '@angular/core';
import { NgxDataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';
import { NgxFeatUiMatThemeModule } from '@sinbix/ngx-feat-ui-material-akita/theme';

import { THEMES } from './common/themes';
import { AppComponent } from './app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxDataAccessThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'dark',
    }),
    NgxFeatUiMatThemeModule,
  ],
  exports: [AppComponent],
})
export class DocsNgxFrontendShellFeatMainModule {}
