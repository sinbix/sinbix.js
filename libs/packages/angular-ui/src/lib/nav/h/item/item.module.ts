import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavLinkModule } from '../../link';
import { NavHChildrenComponent } from './children';
import { NavHItemComponent } from './item.component';

@NgModule({
  declarations: [NavHItemComponent, NavHChildrenComponent],
  imports: [CommonModule, MatIconModule, NavLinkModule],
  exports: [NavHItemComponent, NavHChildrenComponent],
})
export class NavHItemModule {}
