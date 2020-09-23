import { NgModule } from '@angular/core';

import { NavHSharedModule } from '../shared/shared.module';
import { NavHUnderlineComponent } from './underline.component';

@NgModule({
  declarations: [NavHUnderlineComponent],
  imports: [NavHSharedModule],
  exports: [NavHUnderlineComponent],
})
export class MatNavHUnderlineModule {}
