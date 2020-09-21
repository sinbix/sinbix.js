import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DocsNgxFrontendShellModule,
  ShellComponent,
} from '@sinbix/docs-ngx-frontend/shell';

@NgModule({
  imports: [BrowserModule, DocsNgxFrontendShellModule],
  providers: [],
  bootstrap: [ShellComponent],
})
export class AppBrowserModule {}
