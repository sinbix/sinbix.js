import * as _ from 'lodash';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { bunchHandler } from '@sinbix/utils';

@Component({
  selector: 'sui-nav-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @ViewChild('ref') linkElRef: ElementRef;

  @Input() url: string;
  @Input() externalUrl: boolean;
  @Input() openInNewTab: boolean;
  @Input() exactMatch: boolean;
  @Input() function: any;

  @Input() active: string | string[];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

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
    if (this.active) {
      bunchHandler(this.active, (cssClass) => {
        this.renderer.removeClass(this.linkElRef.nativeElement, cssClass);
      });
    }
  }
}
