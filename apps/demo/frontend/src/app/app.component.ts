import { Component } from '@angular/core';

@Component({
  selector: 'sinbix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-frontend';

  classes = ['red', 'green'];
}