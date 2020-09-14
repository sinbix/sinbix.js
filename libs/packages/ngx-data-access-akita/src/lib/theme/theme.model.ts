import { Type } from '@angular/core';
import { AStorageService } from '@sinbix/ngx-data-access/storage';

export interface ITheme {
  themeId: string;
  cssClass?: string;
  cssFile?: string;
}

export interface IThemeStorageOpts {
  storage: Type<AStorageService>;
  key: string;
}

export interface IThemeOpts {
  themeStorage?: IThemeStorageOpts;
  themes?: ITheme[];
  defaultThemeId?: string;
}
