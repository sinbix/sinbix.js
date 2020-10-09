import { Type } from '@angular/core';
import { AStorageService } from '@sinbix/angular/storage';
import { ITheme } from './theme.model';

export interface IThemeStorageOpts {
  storage: Type<AStorageService>;
  key: string;
}

export interface IThemeOpts {
  themeStorage?: IThemeStorageOpts;
  themes?: ITheme[];
  defaultThemeId?: string;
}
