import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LightDarkToggleComponent } from './light-dark-toggle';

@NgModule({
  declarations: [LightDarkToggleComponent],
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule, MatIconModule],
  exports: [LightDarkToggleComponent],
})
export class NgxUiMatThemeModule {}
