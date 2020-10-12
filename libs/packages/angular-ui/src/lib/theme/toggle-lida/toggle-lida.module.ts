import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeToggleLidaComponent } from './toggle-lida.component';

@NgModule({
  declarations: [ThemeToggleLidaComponent],
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule, MatIconModule],
  exports: [ThemeToggleLidaComponent],
})
export class ThemeToggleLidaModule {}
