import { TestBed, waitForAsync } from '@angular/core/testing';

import { UiNavigationModule } from './navigation.module';

describe('NavigationModule', () => {
  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        imports: [UiNavigationModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(UiNavigationModule).toBeTruthy();
  });
});
