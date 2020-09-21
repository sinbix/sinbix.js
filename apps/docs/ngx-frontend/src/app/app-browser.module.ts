import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DocsNgxFrontendShellModule,
  AppComponent,
} from '@sinbix/docs-ngx-frontend/shell';

@NgModule({
  imports: [BrowserModule, DocsNgxFrontendShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
