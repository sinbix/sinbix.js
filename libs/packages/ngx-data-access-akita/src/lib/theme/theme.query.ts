import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ThemeStore, ThemeState } from './theme.store';
import { ITheme } from './theme.model';

@Injectable()
export class ThemeQuery extends QueryEntity<ThemeState, ITheme> {
  constructor(protected store: ThemeStore) {
    super(store);
  }
}
