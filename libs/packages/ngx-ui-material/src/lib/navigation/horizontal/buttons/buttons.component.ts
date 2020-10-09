import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TCssClasses, INavItem } from '@sinbix/common/types';

@Component({
  selector: 'smat-nav-h-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavHButtonsComponent implements OnInit {
  @Input() items: INavItem[];
  @Input() activeParent: TCssClasses;
  @Input() activeChild: string | string[];

  constructor() {}

  ngOnInit(): void {}
}
