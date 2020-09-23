import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHUnderlineComponent } from './underline.component';

describe('UnderlineComponent', () => {
  let component: NavHUnderlineComponent;
  let fixture: ComponentFixture<NavHUnderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHUnderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
