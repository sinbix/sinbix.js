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
  OnDestroy
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { TCssClasses, INavItem } from '@sinbix/common/types';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { EPrefDir, IPoint } from '../../horizontal.models';

@Component({
  selector: 'smat-nav-h-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavHItemComponent implements OnInit, OnDestroy {
  @Input() item: INavItem;
  @Input() activeParent: TCssClasses;
  @Input() activeChild: TCssClasses;
  @Input() level = 0;
  @Input() prefDir: EPrefDir = EPrefDir.RIGHT;

  @ViewChild('children', { read: ElementRef }) childrenRef: ElementRef;

  @HostBinding('class.nav-root') root;

  pivot: IPoint;

  private unsubscribeAll = new Subject();

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.root = !this.level;
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe((event: NavigationEnd) => {
        this.mouseleave();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  @HostListener('mouseenter', ['$event'])
  mouseenter(event: MouseEvent) {
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
