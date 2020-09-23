import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocsComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DocsComponentsComponent,
      },
    ]),
  ],
  declarations: [DocsComponentsComponent],
})
export class DocsComponentsMainModule {}
