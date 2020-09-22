import { NgModule } from '@angular/core';
import { DocsShellModule } from '@sinbix/docs-ngx-frontend/shell';

@NgModule({
  imports: [DocsShellModule],
  exports: [DocsShellModule],
})
export class AppModule {}
