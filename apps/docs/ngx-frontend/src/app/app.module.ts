import { NgModule } from '@angular/core';
import { DocsShellModule } from '@sinbix/docs-ngx-frontend/feat-shell';

@NgModule({
  imports: [DocsShellModule],
  exports: [DocsShellModule],
})
export class AppModule {}
