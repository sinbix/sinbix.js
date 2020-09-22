import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMatThemeModule } from '@sinbix/ngx-ui-material/theme';
import { LightDarkToggleComponent } from './light-dark-toggle';

@NgModule({
  declarations: [LightDarkToggleComponent],
  imports: [CommonModule, UiMatThemeModule],
  exports: [LightDarkToggleComponent],
})
export class NgxFeatUiMatThemeModule {}
