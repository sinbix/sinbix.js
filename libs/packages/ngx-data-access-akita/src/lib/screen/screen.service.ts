import * as _ from 'lodash';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Debounce } from '@sinbix/utils/debounce';
import { ScreenStore } from './screen.store';
import { IScreen } from './screen.model';

@Injectable()
export class ScreenService {
  constructor(
    private screenStore: ScreenStore,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const window = this.document.defaultView;

      this.windowResizeHandler(window);

      window.addEventListener('resize', (event) =>
        this.windowDebounceResizeHandler(event)
      );
    }
  }

  private updateScreen(screen: Partial<IScreen>) {
    this.screenStore.update(screen);
  }

  @Debounce(100)
  private windowDebounceResizeHandler(event: any): void {
    this.windowResizeHandler(event.target);
  }

  private windowResizeHandler(window: Window): void {
    const height = window.innerHeight;
    const width = window.innerWidth;
    this.updateScreen({
      height,
      width,
      orientation: height
        ? width / height > 1
          ? 'landscape'
          : 'portrait'
        : 'landscape',
    });
  }
}
