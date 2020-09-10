export interface IStyles {
  [style: string]: string;
}

export interface IStylizer {
  addClass(el: any, name: string);

  removeClass(el: any, name: string);

  addClasses(el: any, names: string[]);

  removeClasses(el: any, names: string[]);

  setStyle(el: any, style: string, value: string);

  removeStyle(el: any, style: string);

  setStyles(el: any, styles: IStyles);

  removeStyles(el: any, styles: string[]);
}
