import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocsNgxFrontendShellFeatMainModule } from '@sinbix/docs-ngx-frontend-shell-feat-main';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DocsNgxFrontendShellFeatMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
