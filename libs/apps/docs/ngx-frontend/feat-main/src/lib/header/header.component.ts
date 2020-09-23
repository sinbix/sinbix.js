import { Component, HostBinding, OnInit } from '@angular/core';
import { MAIN_MENU } from '../common/main-menu';

@Component({
  selector: 'docs-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainMenu = MAIN_MENU;

  constructor() {}

  @HostBinding('class') class = '_primary';

  ngOnInit(): void {}
}
