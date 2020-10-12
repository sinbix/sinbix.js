import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavLinkComponent } from './link.component';

@NgModule({
  declarations: [NavLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavLinkComponent],
})
export class NavLinkModule {}
