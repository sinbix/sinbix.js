import {
  Injectable,
  Inject
} from '@angular/core';
import { Stylizer } from './stylizer.service';
import { DOCUMENT } from '@angular/common';
import {
  IStylizer,
  IStyles
} from './stylizer.model';

@Injectable({
  providedIn: 'root'
})
export class BodyStylizer implements IStylizer {
  private readonly body: HTMLElement;

  constructor(
    private commonStyleControl: Stylizer,
    @Inject(DOCUMENT)
    private document: Document
  ) {
    this.body = document.body;
  }

  setStyle(style: string, value: string) {
    this.commonStyleControl.setStyle(
      this.body,
      style,
      value
    );
  }

  removeStyle(style: string) {
    this.commonStyleControl.removeStyle(
      this.body,
      style
    );
  }

  setStyles(styles: IStyles) {
    this.commonStyleControl.setStyles(
      this.body,
      styles
    );
  }

  removeStyles(styles: string[]) {
    this.commonStyleControl.removeStyles(
      this.body,
      styles
    );
  }

  addClass(name: string) {
    this.commonStyleControl.addClass(
      this.body,
      name
    );
  }

  removeClass(name: string) {
    this.commonStyleControl.removeClass(
      this.body,
      name
    );
  }

  addClasses(names: string[]) {
    this.commonStyleControl.addClasses(
      this.body,
      names
    );
  }

  removeClasses(names: string[]) {
    this.commonStyleControl.removeClasses(
      this.body,
      names
    );
  }
}
