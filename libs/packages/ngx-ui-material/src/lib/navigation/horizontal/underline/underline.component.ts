import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { INavItem } from '@sinbix/common/navigation';
import { TCssClasses } from '@sinbix/common/common';

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
