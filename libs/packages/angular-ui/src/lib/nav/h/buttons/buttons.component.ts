import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScreenQuery } from '@sinbix/angular/screen';
import { CssClasses, NavItem } from '@sinbix/common/types';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sinbix-nav-h-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavHButtonsComponent implements OnInit {
  @Input() items: NavItem[];
  @Input() activeParent: CssClasses;
  @Input() activeChild: string | string[];

  width$ = this.screenQuery.select('width');

  close$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  );

  constructor(private screenQuery: ScreenQuery, private router: Router) {}

  ngOnInit(): void {}
}
