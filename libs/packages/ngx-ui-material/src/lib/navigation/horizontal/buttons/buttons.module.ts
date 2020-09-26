import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NavHSharedModule } from '../shared/shared.module';
import { NavHButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [NavHButtonsComponent],
  imports: [NavHSharedModule, MatButtonModule],
  exports: [NavHButtonsComponent],
})
export class MatNavHButtonsModule {}
