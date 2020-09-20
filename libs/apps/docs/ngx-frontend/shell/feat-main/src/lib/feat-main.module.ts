import { NgModule } from '@angular/core';
import { NgxDataAccessThemeModule } from '@sinbix/ngx-data-access-akita/theme';

import { THEMES } from './common/themes';
import { AppComponent } from './app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxDataAccessThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'dark',
    }),
  ],
  exports: [AppComponent],
})
export class DocsNgxFrontendShellFeatMainModule {}
