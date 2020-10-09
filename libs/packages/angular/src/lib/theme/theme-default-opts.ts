import { LocalStorageService } from '@sinbix/angular/storage';
import { IThemeOpts } from './theme-opts.model';

export const THEME_DEFAULT_OPTS: IThemeOpts = {
  themeStorage: {
    storage: LocalStorageService,
    key: 'sinbix-theme',
  },
};
