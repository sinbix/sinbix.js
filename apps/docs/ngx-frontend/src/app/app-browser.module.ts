import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DocsNgxFrontendShellFeatMainModule,
  AppComponent,
} from '@sinbix/docs-ngx-frontend/shell-feat-main';

@NgModule({
  imports: [BrowserModule, DocsNgxFrontendShellFeatMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
