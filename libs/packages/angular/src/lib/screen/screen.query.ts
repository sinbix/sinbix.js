import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IScreen } from './screen.model';
import { ScreenStore } from './screen.store';

@Injectable()
export class ScreenQuery extends Query<IScreen> {
  constructor(protected store: ScreenStore) {
    super(store);
  }
}
