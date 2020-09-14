import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { GlobalRenderer } from '@sinbix/ngx-utils/renderer';
import { AStorageService } from '@sinbix/ngx-data-access/storage';
import { IThemeOpts } from './theme-opts.model';
import { THEME_OPTS_TOKEN } from './theme-opts.token';
import { ThemeStore } from './theme.store';
import { ThemeQuery } from './theme.query';
import { ITheme } from './theme.model';

@Injectable()
export class ThemeService {
  private head: HTMLHeadElement;
  private body: HTMLElement;
  private renderer = this.globalRenderer.renderer;
  private themeLinks: HTMLElement[] = [];

  constructor(
    private themeStore: ThemeStore,
    private themeQuery: ThemeQuery,
    private globalRenderer: GlobalRenderer,
    private storageService: AStorageService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(THEME_OPTS_TOKEN) private opts?: IThemeOpts
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.head = this.document.head;
      this.body = this.document.body;
    }

    const { themes, defaultThemeId } = this.opts;

    this.addThemes(themes, defaultThemeId);
  }

  async addThemes(themes: ITheme[], defaultTheme?: string) {
    if (themes?.length) {
      this.themeStore.add(themes);
      if (!(await this.storageService.getItem(this.opts.themeStorage.key))) {
        this.setTheme(defaultTheme ? defaultTheme : themes[0].themeId);
      } else {
        const themeId = await this.storageService.getItem(
          this.opts.themeStorage.key
        );

        if (themeId) {
          await this.setTheme(themeId);
        }
      }
    }
  }

  async setTheme(themeId: string) {
    const entity = this.themeQuery.getEntity(themeId);
    const active = this.themeQuery.getActive();

    if (entity.cssFile) {
      await this.loadCss(entity.cssFile);
      if (this.themeLinks?.length >= 2) {
        this.renderer.removeChild(this.head, this.themeLinks.shift());
      }
    }

    this.themeStore.setActive(themeId);

    if (active) {
      if (active.cssClass) {
        this.renderer.removeClass(this.body, active.cssClass);
      }
    }

    if (entity.cssClass) {
      this.renderer.addClass(this.body, entity.cssClass);
    }

    await this.setThemeToStorage(themeId);
  }

  private async setThemeToStorage(themeId) {
    await this.storageService.setItem(this.opts.themeStorage.key, themeId);
  }

  private async loadCss(filename: string) {
    return new Promise((resolve) => {
      const linkEl: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkEl, 'type', 'text/css');
      this.renderer.setAttribute(linkEl, 'href', filename);
      this.renderer.setProperty(linkEl, 'onload', resolve);
      this.renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    });
  }
}
