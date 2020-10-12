import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';

import { Router } from '@angular/router';

import { CssClasses, NavItem } from '@sinbix/common/types';
import { Point, PrefDir } from '../h.model';

@Component({
  selector: 'sinbix-nav-h-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavHItemComponent implements OnInit {
  @Input() item: NavItem;
  @Input() activeParent: CssClasses;
  @Input() activeChild: CssClasses;
  @Input() level = 0;
  @Input() prefDir: PrefDir = PrefDir.RIGHT;
  @Input() containerWidth = 0;
  @Input() set close(close: any) {
    if (close) {
      this.mouseleave();
    }
  }

  @ViewChild('children', { read: ElementRef }) childrenRef: ElementRef;

  pivot: Point;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  @HostListener('mouseenter')
  mouseenter() {
    if (this.item.children?.length) {
      const rect = this.elRef.nativeElement.getBoundingClientRect();

      const x1 = rect.x;

      const x2 = x1 + rect.width;

      this.pivot = { x1, x2 };
    }
  }

  @HostListener('mouseleave')
  mouseleave() {
    if (this.childrenRef) {
      if (this.item.children?.length) {
        this.renderer.addClass(this.childrenRef.nativeElement, 'lock-events');
        this.pivot = null;
      }
    }
  }
}
