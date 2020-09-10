import { Injectable, Inject } from '@angular/core';
import { Stylizer } from './stylizer.service';
import { DOCUMENT } from '@angular/common';
import { IStylizer, IStyles } from './stylizer.model';

@Injectable({
  providedIn: 'root'
})
export class BodyStylizer implements IStylizer {
  private readonly body: HTMLElement;

  constructor(
    private stylizer: Stylizer,
    @Inject(DOCUMENT) private document: any
  ) {
    this.body = document.body;
  }

  setStyle(style: string, value: string) {
    this.stylizer.setStyle(
      this.body,
      style,
      value
    );
  }

  removeStyle(style: string) {
    this.stylizer.removeStyle(
      this.body,
      style
    );
  }

  setStyles(styles: IStyles) {
    this.stylizer.setStyles(
      this.body,
      styles
    );
  }

  removeStyles(styles: string[]) {
    this.stylizer.removeStyles(
      this.body,
      styles
    );
  }

  addClass(name: string) {
    this.stylizer.addClass(
      this.body,
      name
    );
  }

  removeClass(name: string) {
    this.stylizer.removeClass(
      this.body,
      name
    );
  }

  addClasses(names: string[]) {
    this.stylizer.addClasses(
      this.body,
      names
    );
  }

  removeClasses(names: string[]) {
    this.stylizer.removeClasses(
      this.body,
      names
    );
  }
}
