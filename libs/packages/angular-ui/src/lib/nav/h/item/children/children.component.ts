import * as _ from 'lodash-es';

import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

import { trigger, transition, useAnimation } from '@angular/animations';

import { CssClasses, NavItem } from '@sinbix/common/types';
import { fadeInRight, fadeOutLeft } from '@sinbix/angular-ui/animations';

import { Point, PrefDir } from '../../h.model';

@Component({
  selector: 'sinbix-nav-h-item-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('animate', [
      transition(':enter', [
        useAnimation(fadeInRight, {
          params: { duration: '200ms' },
        }),
      ]),
      transition(':leave', [
        useAnimation(fadeOutLeft, {
          params: { duration: '200ms' },
        }),
      ]),
    ]),
  ],
})
export class NavHChildrenComponent implements OnInit {
  @HostBinding('style') style = {};

  @HostBinding('@animate') animate;

  @HostBinding('class.lock-events') lockEvents;

  @Input() items: NavItem[];
  @Input() active: CssClasses;
  @Input() level: number;
  @Input() prefDir: PrefDir;
  @Input() pivot: Point;

  @Input() set containerWidth(width: number) {
    this.checkDir(width);
    this.style = {
      left: this.calcOffset(PrefDir.RIGHT),
      right: this.calcOffset(PrefDir.LEFT),
    };

    this._containerWidth = width;
  }
  get containerWidth() {
    return this._containerWidth;
  }
  private _containerWidth: number;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  private calcOffset(prefDir: PrefDir) {
    const offset = this.level > 1 ? 100 : 0;

    return this.prefDir === prefDir ? (offset ? `${offset}%` : 0) : 'auto';
  }

  private checkDir(rootWidth: number) {
    const pivot = this.pivot;
    const rect = this.elRef.nativeElement.getBoundingClientRect();
    const width = rect.width;
    const rootX1 = 0;
    const rootX2 = rootX1 + rootWidth;
    let rightOffset;
    let leftOffset;

    if (this.level > 1) {
      rightOffset = rootX2 - pivot.x2;
      leftOffset = pivot.x1 - rootX1;
    } else {
      rightOffset = rootX2 - pivot.x1;
      leftOffset = pivot.x2 - width - rootX1;
    }
    let prefDir = this.prefDir;
    if (this.prefDir === PrefDir.RIGHT && rightOffset > width) {
      prefDir = PrefDir.RIGHT;
    } else if (this.prefDir === PrefDir.LEFT && leftOffset > width) {
      prefDir = PrefDir.LEFT;
    } else {
      prefDir = rightOffset > leftOffset ? PrefDir.RIGHT : PrefDir.LEFT;
    }
    this.prefDir = prefDir;
  }
}
