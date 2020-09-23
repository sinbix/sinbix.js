import { NgModule } from '@angular/core';

import { NavSharedModule } from '../../shared/shared.module';
import { NavHItemComponent } from './item';
import { NavHChildrenComponent } from './children';

@NgModule({
  declarations: [NavHItemComponent, NavHChildrenComponent],
  imports: [NavSharedModule],
  exports: [NavHItemComponent, NavHChildrenComponent, NavSharedModule],
})
export class NavHSharedModule {}
