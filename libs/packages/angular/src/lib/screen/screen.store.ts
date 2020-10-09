import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IScreen } from './screen.model';

export function createInitialState(): IScreen {
  return {
    width: 0,
    height: 0,
    orientation: 'landscape',
  };
}

@Injectable()
@StoreConfig({ name: 'sceen' })
export class ScreenStore extends Store<IScreen> {
  constructor() {
    super(createInitialState());
  }
}
