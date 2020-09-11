import * as _ from 'lodash';
import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'sui-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @ViewChild('ref') linkElRef: ElementRef;

  @Input() url: string;
  @Input() externalUrl: boolean;
  @Input() openInNewTab: boolean;
  @Input() exactMatch: boolean;
  @Input() function: any;
  @Input() activeOnHover = true;

  activeClasses = ['active'];

  constructor(
    private renderer: Renderer2
  ) {
  }

  private _activeClass = 'active';

  get activeClass() {
    return this._activeClass;
  }

  @Input() set activeClass(value: string) {
    this._activeClass = value;
    this.changeActiveClasses();
  }

  private _linkActive: string | string[];

  get linkActive() {
    return this._linkActive;
  }

  @Input() set linkActive(
    value: string | string[]
  ) {
    this._linkActive = value;
    this.changeActiveClasses();
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  mouseenter() {
    if (this.activeOnHover) {
      this.renderer.addClass(
        this.linkElRef.nativeElement,
        _.join(this.linkActive)
      );
    }
  }

  @HostListener('mouseleave')
  mouseleave() {
    if (
      !this.linkElRef.nativeElement.classList.contains(
        this.activeClass
      )
    ) {
      this.renderer.removeClass(
        this.linkElRef.nativeElement,
        _.join(this.linkActive)
      );
    }
  }

  private changeActiveClasses() {
    const classes = [];

    if (this.activeClass) {
      classes.push(this.activeClass);
    }
    if (this.linkActive) {
      if (_.isArray(this.linkActive)) {
        classes.push(...this.linkActive);
      } else {
        classes.push(this.linkActive);
      }
    }
    this.activeClasses = classes;
  }
}
