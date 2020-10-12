import * as _ from 'lodash-es';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { bunchHandler } from '@sinbix/common/utils';
import { NavigationService } from '@sinbix/angular/navigation';
import { TCssClasses } from '@sinbix/common/types';

@Component({
  selector: 'sinbix-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  @ViewChild('ref') linkElRef: ElementRef;

  @Input() url: string;
  @Input() externalUrl: boolean;
  @Input() openInNewTab: boolean;
  @Input() exactMatch: boolean;
  @Input() function: any;

  @Input() set active(active: TCssClasses) {
    if (active) {
      this._active = active;
    } else {
      this._active = [];
    }
  }
  get active() {
    return this._active;
  }
  private _active: TCssClasses = [];

  constructor(
    private renderer: Renderer2,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {}

  @HostListener('mouseenter')
  mouseenter() {
    if (this.active) {
      bunchHandler(this.active, (cssClass) => {
        this.renderer.addClass(this.linkElRef.nativeElement, cssClass);
      });
    }
  }

  @HostListener('mouseleave')
  mouseleave() {
    if (
      this.active &&
      !this.navigationService.isRouterLinkActive(this.url, this.exactMatch)
    ) {
      bunchHandler(this.active, (cssClass) => {
        this.renderer.removeClass(this.linkElRef.nativeElement, cssClass);
      });
    }
  }
}
