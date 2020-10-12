import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavHItemModule } from '../item';

import { NavHButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [NavHButtonsComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, NavHItemModule],
  exports: [NavHButtonsComponent],
})
export class NavHButtonsModule {}
