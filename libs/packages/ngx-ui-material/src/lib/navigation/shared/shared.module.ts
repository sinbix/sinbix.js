import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UiNavigationModule } from '@sinbix/ngx-ui/navigation';

@NgModule({
  exports: [CommonModule, MatIconModule, UiNavigationModule],
})
export class NavSharedModule {}
