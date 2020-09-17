import { TestBed, waitForAsync } from '@angular/core/testing';

import { NgxUiNavigationModule } from './navigation.module';

describe('LayoutsModule', () => {
  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        imports: [NgxUiNavigationModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NgxUiNavigationModule).toBeTruthy();
  });
});
