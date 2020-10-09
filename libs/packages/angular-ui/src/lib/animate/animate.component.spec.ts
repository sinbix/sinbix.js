import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimateComponent } from './animate.component';

describe('AnimateComponent', () => {
  let component: AnimateComponent;
  let fixture: ComponentFixture<AnimateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AnimateComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
