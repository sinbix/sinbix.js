import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScreenService } from './screen.service';
import { ScreenStore } from './screen.store';
import { ScreenQuery } from './screen.query';

@NgModule()
export class DataAccessScreenModule {
  static forRoot(): ModuleWithProviders<DataAccessScreenModule> {
    return {
      ngModule: DataAccessScreenModule,
      providers: [ScreenService, ScreenStore, ScreenQuery],
    };
  }

  constructor(private screenService: ScreenService) {}
}
