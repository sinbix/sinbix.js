import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxUiNavigationModule } from '@sinbix/ngx-ui/navigation';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '**',
      component: AppComponent
    }]),
    NgxUiNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
