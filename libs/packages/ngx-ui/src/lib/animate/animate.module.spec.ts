import { TestBed, waitForAsync } from '@angular/core/testing';

import { NgxUiAnimateModule } from './animate.module';

describe('AnimateModule', () => {
  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        imports: [NgxUiAnimateModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NgxUiAnimateModule).toBeTruthy();
  });
});
