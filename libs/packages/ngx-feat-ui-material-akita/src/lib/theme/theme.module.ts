import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiMatThemeModule } from '@sinbix/ngx-ui-material/theme';
import { LightDarkToggleComponent } from './light-dark-toggle';

@NgModule({
  declarations: [LightDarkToggleComponent],
  imports: [CommonModule, NgxUiMatThemeModule],
  exports: [LightDarkToggleComponent],
})
export class NgxFeatUiMatThemeModule {}
