import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TCssClasses, INavItem } from '@sinbix/common/types';

@Component({
  selector: 'smat-nav-h-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavHUnderlineComponent implements OnInit {
  @Input() items: INavItem[];
  @Input() activeParent: TCssClasses;
  @Input() activeChild: string | string[];

  constructor() {}

  ngOnInit(): void {}
}
