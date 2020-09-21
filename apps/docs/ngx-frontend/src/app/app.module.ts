import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@sinbix/docs-ngx-frontend/feat-main').then(
        (m) => m.DocsMainModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [AppComponent],
})
export class AppModule {}
