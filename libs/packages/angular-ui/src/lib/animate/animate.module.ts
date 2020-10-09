import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateComponent } from './animate.component';

@NgModule({
  declarations: [AnimateComponent],
  imports: [CommonModule],
  exports: [AnimateComponent],
})
export class UiAnimateModule {}
