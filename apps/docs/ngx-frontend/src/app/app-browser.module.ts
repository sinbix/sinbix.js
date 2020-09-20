import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DocsNgxFrontendShellFeatMainAppModule,
  AppComponent,
} from '@sinbix/docs-ngx-frontend-shell-feat-main';

@NgModule({
  imports: [BrowserModule, DocsNgxFrontendShellFeatMainAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
