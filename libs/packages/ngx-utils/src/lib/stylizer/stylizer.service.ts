import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { GlobalRenderer } from '@sinbix/ngx-utils/renderer';
import { IStylizer, IStyles } from './stylizer.model';

@Injectable({
  providedIn: 'root'
})
export class Stylizer implements IStylizer {
  private renderer = this.globalRenderer.renderer;

  constructor(private globalRenderer: GlobalRenderer) {
  }

  setStyle(el: any, style: string, value) {
    this.renderer.setStyle(el, style, value);
  }

  removeStyle(el: any, style: string) {
    this.renderer.removeStyle(el, style);
  }

  setStyles(el: any, styles: IStyles) {
    _.keys(styles).map((style) => {
      this.setStyle(el, style, styles[style]);
    });
  }

  removeStyles(el: any, styles: string[]) {
    styles.map((style) => {
      this.removeStyle(el, style);
    });
  }

  addClass(el: any, name: string) {
    this.renderer.addClass(el, name);
  }

  removeClass(el: any, name: string) {
    this.renderer.removeClass(el, name);
  }

  addClasses(el: any, names: string | string[]) {
    // if (_.isArray(names)) {
    //   names.map((name) => {
    //     this.addClass(el, name);
    //   });
    // } else {
    //   this.addClass(el, names);
    // }
  }

  removeClasses(
    el: any,
    names: string | string[]
  ) {
    // if (_.isArray(names)) {
    //   names.map((name) => {
    //     this.removeClass(el, name);
    //   });
    // } else {
    //   this.removeClass(el, names);
    // }
  }
}
