import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterComponent } from './router.component';

@NgModule({
  declarations: [RouterComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterComponent],
})
export class UiRouterModule {}
