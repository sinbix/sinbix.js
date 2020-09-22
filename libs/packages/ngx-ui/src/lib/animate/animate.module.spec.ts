import { TestBed, waitForAsync } from '@angular/core/testing';

import { UiAnimateModule } from './animate.module';

describe('AnimateModule', () => {
  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        imports: [UiAnimateModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(UiAnimateModule).toBeTruthy();
  });
});
