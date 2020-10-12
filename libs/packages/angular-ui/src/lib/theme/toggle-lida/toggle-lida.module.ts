import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeToggleLidaComponent } from './toggle-lida.component';
import { ThemeToggleLidaDumbComponent } from './dumb/dumb.component';

@NgModule({
  declarations: [ThemeToggleLidaComponent, ThemeToggleLidaDumbComponent],
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule, MatIconModule],
  exports: [ThemeToggleLidaComponent, ThemeToggleLidaDumbComponent],
})
export class ThemeToggleLidaModule {}
