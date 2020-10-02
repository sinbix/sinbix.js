import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';
import { DocsShellComponent } from '@sinbix/docs-ngx-frontend/feat-shell';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppModule],
  bootstrap: [DocsShellComponent],
})
export class AppBrowserModule {}
