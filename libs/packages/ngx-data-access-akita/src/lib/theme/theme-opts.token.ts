import { InjectionToken } from '@angular/core';
import { IThemeOpts } from './theme-opts.model';

export const THEME_OPTS_TOKEN = new InjectionToken<IThemeOpts>(
  'sinbix.theme.opts'
);
