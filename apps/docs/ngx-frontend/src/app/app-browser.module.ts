import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { DocsShellComponent } from '@sinbix/docs-ngx-frontend/shell';

@NgModule({
  imports: [BrowserModule, AppModule],
  bootstrap: [DocsShellComponent],
})
export class AppBrowserModule {}
