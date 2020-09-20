import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router.component';

@NgModule({
  declarations: [RouterComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterComponent],
})
export class RouterModule {}
